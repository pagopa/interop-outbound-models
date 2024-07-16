import { match } from "ts-pattern";
import { z } from "zod";
import { EventEnvelope, eventV1, eventV2 } from "../events.js";
import { TenantEventV1, tenantEventToBinaryDataV1 } from "./eventsV1.js";
import { TenantEventV2, tenantEventToBinaryDataV2 } from "./eventsV2.js";

export function tenantEventToBinaryData(event: TenantEvent): Uint8Array {
  return match(event)
    .with({ event_version: 1 }, tenantEventToBinaryDataV1)
    .with({ event_version: 2 }, tenantEventToBinaryDataV2)
    .exhaustive();
}

export const TenantEvent = z
  .discriminatedUnion("event_version", [eventV1, eventV2])
  .transform((obj, ctx) => {
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

export const TenantEventEnvelopeV1 = EventEnvelope(TenantEventV1);
export type TenantEventEnvelopeV1 = z.infer<typeof TenantEventEnvelopeV1>;

export const TenantEventEnvelopeV2 = EventEnvelope(TenantEventV2);
export type TenantEventEnvelopeV2 = z.infer<typeof TenantEventEnvelopeV2>;

export const TenantEventEnvelope = EventEnvelope(TenantEvent);
export type TenantEventEnvelope = z.infer<typeof TenantEventEnvelope>;
