import { match } from "ts-pattern";
import { z } from "zod";
import {
  AgreementAddedV1,
  AgreementDeletedV1,
  AgreementUpdatedV1,
  AgreementContractAddedV1,
  AgreementConsumerDocumentAddedV1,
  AgreementConsumerDocumentRemovedV1,
  AgreementActivatedV1,
  AgreementSuspendedV1,
  AgreementDeactivatedV1,
  VerifiedAttributeUpdatedV1,
} from "../gen/v1/agreement/events.js";
import { protobufDecoder } from "../protobuf.js";

export function agreementEventToBinaryDataV1(
  event: AgreementEventV1
): Uint8Array {
  return match(event)
    .with({ type: "AgreementDeleted" }, ({ data }) =>
      AgreementDeletedV1.toBinary(data)
    )
    .with({ type: "AgreementAdded" }, ({ data }) =>
      AgreementAddedV1.toBinary(data)
    )
    .with({ type: "AgreementActivated" }, ({ data }) =>
      AgreementActivatedV1.toBinary(data)
    )
    .with({ type: "AgreementSuspended" }, ({ data }) =>
      AgreementSuspendedV1.toBinary(data)
    )
    .with({ type: "AgreementDeactivated" }, ({ data }) =>
      AgreementDeactivatedV1.toBinary(data)
    )
    .with({ type: "VerifiedAttributeUpdated" }, ({ data }) =>
      VerifiedAttributeUpdatedV1.toBinary(data)
    )
    .with({ type: "AgreementUpdated" }, ({ data }) =>
      AgreementUpdatedV1.toBinary(data)
    )
    .with({ type: "AgreementContractAdded" }, ({ data }) =>
      AgreementContractAddedV1.toBinary(data)
    )
    .with({ type: "AgreementConsumerDocumentAdded" }, ({ data }) =>
      AgreementConsumerDocumentAddedV1.toBinary(data)
    )
    .with({ type: "AgreementConsumerDocumentRemoved" }, ({ data }) =>
      AgreementConsumerDocumentRemovedV1.toBinary(data)
    )
    .exhaustive();
}

export const AgreementEventV1 = z.discriminatedUnion("type", [
  z.object({
    event_version: z.literal(1),
    type: z.literal("AgreementAdded"),
    data: protobufDecoder(AgreementAddedV1),
  }),
  z.object({
    event_version: z.literal(1),
    type: z.literal("AgreementActivated"),
    data: protobufDecoder(AgreementActivatedV1),
  }),
  z.object({
    event_version: z.literal(1),
    type: z.literal("AgreementSuspended"),
    data: protobufDecoder(AgreementSuspendedV1),
  }),
  z.object({
    event_version: z.literal(1),
    type: z.literal("AgreementDeactivated"),
    data: protobufDecoder(AgreementDeactivatedV1),
  }),
  z.object({
    event_version: z.literal(1),
    type: z.literal("AgreementDeleted"),
    data: protobufDecoder(AgreementDeletedV1),
  }),
  z.object({
    event_version: z.literal(1),
    type: z.literal("VerifiedAttributeUpdated"),
    data: protobufDecoder(VerifiedAttributeUpdatedV1),
  }),
  z.object({
    event_version: z.literal(1),
    type: z.literal("AgreementUpdated"),
    data: protobufDecoder(AgreementUpdatedV1),
  }),
  z.object({
    event_version: z.literal(1),
    type: z.literal("AgreementConsumerDocumentAdded"),
    data: protobufDecoder(AgreementConsumerDocumentAddedV1),
  }),
  z.object({
    event_version: z.literal(1),
    type: z.literal("AgreementConsumerDocumentRemoved"),
    data: protobufDecoder(AgreementConsumerDocumentRemovedV1),
  }),
  z.object({
    event_version: z.literal(1),
    type: z.literal("AgreementContractAdded"),
    data: protobufDecoder(AgreementContractAddedV1),
  }),
]);
export type AgreementEventV1 = z.infer<typeof AgreementEventV1>;
