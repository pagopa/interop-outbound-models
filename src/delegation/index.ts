import { z } from "zod";
import { VersionedEvent } from "../utils.js";
import {
  delegationEventToBinaryDataV2,
  DelegationEventV2,
} from "./eventsV2.js";

function DelegationEventToBinaryData(event: DelegationEvent): Uint8Array {
  return delegationEventToBinaryDataV2(event);
}

export function encodeOutboundDelegationEvent(event: DelegationEvent): string {
  return JSON.stringify({
    event_version: event.event_version,
    type: event.type,
    data: Buffer.from(DelegationEventToBinaryData(event)).toString("hex"),
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
  const res = DelegationEventV2.safeParse(obj);

  if (!res.success) {
    res.error.issues.forEach(ctx.addIssue);
    return z.NEVER;
  }
  return res.data;
});

export type DelegationEventType = DelegationEvent["type"];
export type DelegationEvent = z.infer<typeof DelegationEvent>;
export { DelegationEventV2 };
