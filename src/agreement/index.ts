import { match } from "ts-pattern";
import { z } from "zod";
import { AgreementEventV1, agreementEventToBinaryDataV1 } from "./eventsV1.js";
import { AgreementEventV2, agreementEventToBinaryDataV2 } from "./eventsV2.js";

function agreementEventToBinaryData(event: AgreementEvent): Uint8Array {
  return match(event)
    .with({ event_version: 1 }, agreementEventToBinaryDataV1)
    .with({ event_version: 2 }, agreementEventToBinaryDataV2)
    .exhaustive();
}

export function encodeOutboundAgreementEvent(event: AgreementEvent): string {
  return JSON.stringify({
    event_version: event.event_version,
    type: event.type,
    data: Buffer.from(agreementEventToBinaryData(event)).toString("hex"),
    stream_id: event.stream_id,
    version: event.version,
    timestamp: event.timestamp,
  });
}

export function decodeOutboundAgreementEvent(
  encodedEvent: string
): AgreementEvent {
  return AgreementEvent.parse(JSON.parse(encodedEvent));
}

export const AgreementEvent = z.discriminatedUnion("event_version", [
  AgreementEventV1,
  AgreementEventV2,
]);

export type AgreementEventType = AgreementEvent["type"];
export type AgreementEvent = z.infer<typeof AgreementEvent>;
export { AgreementEventV1, AgreementEventV2 };
