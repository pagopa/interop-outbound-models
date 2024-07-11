import { match } from "ts-pattern";
import { z } from "zod";
import { EventEnvelope, eventV1, eventV2 } from "../events.js";
import { AgreementEventV1, agreementEventToBinaryDataV1 } from "./eventsV1.js";
import { AgreementEventV2, agreementEventToBinaryDataV2 } from "./eventsV2.js";

function agreementEventToBinaryData(event: AgreementEvent): Uint8Array {
  return match(event)
    .with({ event_version: 1 }, agreementEventToBinaryDataV1)
    .with({ event_version: 2 }, agreementEventToBinaryDataV2)
    .exhaustive();
}

const AgreementEvent = z
  .discriminatedUnion("event_version", [eventV1, eventV2])
  .transform((obj, ctx) => {
    const res = match(obj)
      .with({ event_version: 1 }, () => AgreementEventV1.safeParse(obj))
      .with({ event_version: 2 }, () => AgreementEventV2.safeParse(obj))
      .exhaustive();

    if (!res.success) {
      res.error.issues.forEach(ctx.addIssue);
      return z.NEVER;
    }
    return res.data;
  });

type AgreementEvent = z.infer<typeof AgreementEvent>;

const AgreementEventEnvelopeV1 = EventEnvelope(AgreementEventV1);
type AgreementEventEnvelopeV1 = z.infer<typeof AgreementEventEnvelopeV1>;

const AgreementEventEnvelopeV2 = EventEnvelope(AgreementEventV2);
type AgreementEventEnvelopeV2 = z.infer<typeof AgreementEventEnvelopeV2>;

const AgreementEventEnvelope = EventEnvelope(AgreementEvent);
type AgreementEventEnvelope = z.infer<typeof AgreementEventEnvelope>;

export {
  agreementEventToBinaryData,
  AgreementEvent,
  AgreementEventV1,
  AgreementEventV2,
  AgreementEventEnvelope,
  AgreementEventEnvelopeV1,
  AgreementEventEnvelopeV2,
};
