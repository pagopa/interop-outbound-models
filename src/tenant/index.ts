import { match } from "ts-pattern";
import { z } from "zod";
import { TenantEventV1, tenantEventToBinaryDataV1 } from "./eventsV1.js";
import { TenantEventV2, tenantEventToBinaryDataV2 } from "./eventsV2.js";

function tenantEventToBinaryData(event: TenantEvent): Uint8Array {
  return match(event)
    .with({ event_version: 1 }, tenantEventToBinaryDataV1)
    .with({ event_version: 2 }, tenantEventToBinaryDataV2)
    .exhaustive();
}

export function encodeOutboundTenantEvent(event: TenantEvent): string {
  return JSON.stringify({
    event_version: event.event_version,
    type: event.type,
    data: Buffer.from(tenantEventToBinaryData(event)).toString("hex"),
    stream_id: event.stream_id,
    version: event.version,
    timestamp: event.timestamp,
  });
}

export function decodeOutboundTenantEvent(encodedEvent: string): TenantEvent {
  return TenantEvent.parse(JSON.parse(encodedEvent));
}

export const TenantEvent = z.discriminatedUnion("event_version", [
  TenantEventV1,
  TenantEventV2,
]);

export type TenantEvent = z.infer<typeof TenantEvent>;
export type TenantEventType = TenantEvent["type"];

export { TenantEventV1, TenantEventV2 };
