import { match } from "ts-pattern";
import { z } from "zod";
import { VersionedEvent } from "../utils.js";
import { PurposeEventV1, purposeEventToBinaryDataV1 } from "./eventsV1.js";
import { PurposeEventV2, purposeEventToBinaryDataV2 } from "./eventsV2.js";

function purposeEventToBinaryData(event: PurposeEvent): Uint8Array {
  return match(event)
    .with({ event_version: 1 }, purposeEventToBinaryDataV1)
    .with({ event_version: 2 }, purposeEventToBinaryDataV2)
    .exhaustive();
}

export function encodeOutboundPurposeEvent(event: PurposeEvent): string {
  return JSON.stringify({
    event_version: event.event_version,
    type: event.type,
    data: purposeEventToBinaryData(event),
    stream_id: event.stream_id,
    version: event.version,
    timestamp: new Date(),
  });
}

export function decodeOutboundPurposeEvent(encodedEvent: string): PurposeEvent {
  return PurposeEvent.parse(JSON.parse(encodedEvent));
}

export const PurposeEvent = VersionedEvent.transform((obj, ctx) => {
  const res = match(obj)
    .with({ event_version: 1 }, () => PurposeEventV1.safeParse(obj))
    .with({ event_version: 2 }, () => PurposeEventV2.safeParse(obj))
    .exhaustive();

  if (!res.success) {
    res.error.issues.forEach(ctx.addIssue);
    return z.NEVER;
  }
  return res.data;
});
export type PurposeEvent = z.infer<typeof PurposeEvent>;
