import { match } from "ts-pattern";
import { z } from "zod";
import { EventEnvelope, eventV1, eventV2 } from "../events.js";
import { PurposeEventV1, purposeEventToBinaryDataV1 } from "./eventsV1.js";
import { PurposeEventV2, purposeEventToBinaryDataV2 } from "./eventsV2.js";

export function purposeEventToBinaryData(event: PurposeEvent): Uint8Array {
  return match(event)
    .with({ event_version: 1 }, purposeEventToBinaryDataV1)
    .with({ event_version: 2 }, purposeEventToBinaryDataV2)
    .exhaustive();
}

export const PurposeEvent = z
  .discriminatedUnion("event_version", [eventV1, eventV2])
  .transform((obj, ctx) => {
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

export const PurposeEventEnvelopeV1 = EventEnvelope(PurposeEventV1);
export type PurposeEventEnvelopeV1 = z.infer<typeof PurposeEventEnvelopeV1>;

export const PurposeEventEnvelopeV2 = EventEnvelope(PurposeEventV2);
export type PurposeEventEnvelopeV2 = z.infer<typeof PurposeEventEnvelopeV2>;

export const PurposeEventEnvelope = EventEnvelope(PurposeEvent);
export type PurposeEventEnvelope = z.infer<typeof PurposeEventEnvelope>;
