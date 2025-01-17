import { match } from "ts-pattern";
import { z } from "zod";
import { VersionedEvent } from "../utils.js";
import {
  DelegationEventV2,
  delegationEventToBinaryDataV2,
} from "./eventsV2.js";

function delegationEventToBinaryData(event: DelegationEvent): Uint8Array {
  return match(event)
    .with({ event_version: 2 }, delegationEventToBinaryDataV2)
    .exhaustive();
}

export function encodeOutboundDelegationEvent(event: DelegationEvent): string {
  return JSON.stringify({
    event_version: event.event_version,
    type: event.type,
    data: Buffer.from(delegationEventToBinaryData(event)).toString("hex"),
    stream_id: event.stream_id,
    version: event.version,
    timestamp: event.timestamp,
  });
}

export function decodeOutboundDelegationEvent(
  encodedEvent: string
): DelegationEvent {
  return DelegationEvent.parse(JSON.parse(encodedEvent));
}

export const DelegationEvent = VersionedEvent.transform((obj, ctx) => {
  const res = match(obj)
    .with({ event_version: 1 }, () => {
      throw new Error("Unsupported event version");
    })
    .with({ event_version: 2 }, () => DelegationEventV2.safeParse(obj))
    .exhaustive();

  if (!res.success) {
    res.error.issues.forEach(ctx.addIssue);
    return z.NEVER;
  }
  return res.data;
});

export type DelegationEventType = DelegationEvent["type"];
export type DelegationEvent = z.infer<typeof DelegationEvent>;
export { DelegationEventV2 };
