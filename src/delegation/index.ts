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

export const DelegationEvent = z.preprocess((obj) => {
  if (VersionedEvent.safeParse(obj).data?.event_version === 1) {
    throw new Error("Unsupported event version");
  }
  return obj;
}, DelegationEventV2);

export type DelegationEventType = DelegationEvent["type"];
export type DelegationEvent = z.infer<typeof DelegationEvent>;
export { DelegationEventV2 };
