import { match } from "ts-pattern";
import { z } from "zod";
import { VersionedEvent } from "../utils.js";
import {
  PurposeTemplateEventV2,
  purposeTemplateEventToBinaryDataV2,
} from "./eventsV2.js";

export function purposeTemplateEventToBinaryData(
  event: PurposeTemplateEvent
): Uint8Array {
  return match(event)
    .with({ event_version: 2 }, purposeTemplateEventToBinaryDataV2)
    .exhaustive();
}

export function encodeOutboundPurposeTemplateEvent(
  event: PurposeTemplateEvent
): string {
  return JSON.stringify({
    event_version: event.event_version,
    type: event.type,
    data: Buffer.from(purposeTemplateEventToBinaryData(event)).toString("hex"),
    stream_id: event.stream_id,
    version: event.version,
    timestamp: event.timestamp,
  });
}

export function decodeOutboundPurposeTemplateEvent(
  encodedEvent: string
): PurposeTemplateEvent {
  return PurposeTemplateEvent.parse(JSON.parse(encodedEvent));
}

export const PurposeTemplateEvent = VersionedEvent.transform((obj, ctx) => {
  const res = match(obj)
    .with({ event_version: 1 }, () => {
      throw new Error("Unsupported event version");
    })
    .with({ event_version: 2 }, () => PurposeTemplateEventV2.safeParse(obj))
    .exhaustive();

  if (!res.success) {
    res.error.issues.forEach(ctx.addIssue);
    return z.NEVER;
  }
  return res.data;
});

export type PurposeTemplateEventType = PurposeTemplateEvent["type"];
export type PurposeTemplateEvent = z.infer<typeof PurposeTemplateEvent>;
export { PurposeTemplateEventV2 };
