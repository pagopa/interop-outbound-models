import { match } from "ts-pattern";
import { z } from "zod";
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
    data: Buffer.from(purposeEventToBinaryData(event)).toString("hex"),
    stream_id: event.stream_id,
    version: event.version,
    timestamp: event.timestamp,
  });
}

export function decodeOutboundPurposeEvent(encodedEvent: string): PurposeEvent {
  return PurposeEvent.parse(JSON.parse(encodedEvent));
}

export const PurposeEvent = z.discriminatedUnion("event_version", [
  PurposeEventV1,
  PurposeEventV2,
]);

export type PurposeEventType = PurposeEvent["type"];
export type PurposeEvent = z.infer<typeof PurposeEvent>;
export { PurposeEventV1, PurposeEventV2 };
