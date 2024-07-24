import { match } from "ts-pattern";
import { z } from "zod";
import { VersionedEvent } from "../utils.js";
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
    data: tenantEventToBinaryData(event),
    stream_id: event.stream_id,
    version: event.version,
    timestamp: new Date(),
  });
}

export function decodeOutboundTenantEvent(encodedEvent: string): TenantEvent {
  return TenantEvent.parse(JSON.parse(encodedEvent));
}

export const TenantEvent = VersionedEvent.transform((obj, ctx) => {
  const res = match(obj)
    .with({ event_version: 1 }, () => TenantEventV1.safeParse(obj))
    .with({ event_version: 2 }, () => TenantEventV2.safeParse(obj))
    .exhaustive();

  if (!res.success) {
    res.error.issues.forEach(ctx.addIssue);
    return z.NEVER;
  }
  return res.data;
});

export type TenantEvent = z.infer<typeof TenantEvent>;
