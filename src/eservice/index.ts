import { match } from "ts-pattern";
import { z } from "zod";
import { EventEnvelope, eventV1, eventV2 } from "../events.js";
import { EServiceEventV1, eServiceEventToBinaryDataV1 } from "./eventsV1.js";
import { EServiceEventV2, eServiceEventToBinaryDataV2 } from "./eventsV2.js";

function eServiceEventToBinaryData(event: EServiceEvent): Uint8Array {
  return match(event)
    .with({ event_version: 1 }, eServiceEventToBinaryDataV1)
    .with({ event_version: 2 }, eServiceEventToBinaryDataV2)
    .exhaustive();
}

const EServiceEvent = z
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

type EServiceEvent = z.infer<typeof EServiceEvent>;

const EServiceEventEnvelopeV1 = EventEnvelope(EServiceEventV1);
type EServiceEventEnvelopeV1 = z.infer<typeof EServiceEventEnvelopeV1>;

const EServiceEventEnvelopeV2 = EventEnvelope(EServiceEventV2);
type EServiceEventEnvelopeV2 = z.infer<typeof EServiceEventEnvelopeV2>;

const EServiceEventEnvelope = EventEnvelope(EServiceEvent);
type EServiceEventEnvelope = z.infer<typeof EServiceEventEnvelope>;

export {
  eServiceEventToBinaryData,
  EServiceEvent,
  EServiceEventV1,
  EServiceEventV2,
  EServiceEventEnvelope,
  EServiceEventEnvelopeV1,
  EServiceEventEnvelopeV2,
};
