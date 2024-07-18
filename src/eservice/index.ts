import { match } from "ts-pattern";
import { z } from "zod";
import { EventEnvelope, eventV1, eventV2 } from "../events.js";
import { EServiceEventV1, eServiceEventToBinaryDataV1 } from "./eventsV1.js";
import { EServiceEventV2, eServiceEventToBinaryDataV2 } from "./eventsV2.js";

export function eServiceEventToBinaryData(event: EServiceEvent): Uint8Array {
  return match(event)
    .with({ event_version: 1 }, eServiceEventToBinaryDataV1)
    .with({ event_version: 2 }, eServiceEventToBinaryDataV2)
    .exhaustive();
}

export const EServiceEvent = z
  .discriminatedUnion("event_version", [eventV1, eventV2])
  .transform((obj, ctx) => {
    const res = match(obj)
      .with({ event_version: 1 }, () => EServiceEventV1.safeParse(obj))
      .with({ event_version: 2 }, () => EServiceEventV2.safeParse(obj))
      .exhaustive();

    if (!res.success) {
      res.error.issues.forEach(ctx.addIssue);
      return z.NEVER;
    }
    return res.data;
  });

export type EServiceEvent = z.infer<typeof EServiceEvent>;

export const EServiceEventEnvelopeV1 = EventEnvelope(EServiceEventV1);
export type EServiceEventEnvelopeV1 = z.infer<typeof EServiceEventEnvelopeV1>;

export const EServiceEventEnvelopeV2 = EventEnvelope(EServiceEventV2);
export type EServiceEventEnvelopeV2 = z.infer<typeof EServiceEventEnvelopeV2>;

export const EServiceEventEnvelope = EventEnvelope(EServiceEvent);
export type EServiceEventEnvelope = z.infer<typeof EServiceEventEnvelope>;
