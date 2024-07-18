import { match } from "ts-pattern";
import { z } from "zod";
import {
  AgreementActivatedV2,
  AgreementAddedV2,
  AgreementArchivedByUpgradeV2,
  AgreementArchivedByConsumerV2,
  AgreementConsumerDocumentAddedV2,
  AgreementConsumerDocumentRemovedV2,
  AgreementDeletedV2,
  AgreementRejectedV2,
  AgreementSubmittedV2,
  AgreementSuspendedByConsumerV2,
  AgreementSuspendedByPlatformV2,
  AgreementSuspendedByProducerV2,
  AgreementUnsuspendedByConsumerV2,
  AgreementUnsuspendedByPlatformV2,
  AgreementUnsuspendedByProducerV2,
  AgreementUpgradedV2,
  DraftAgreementUpdatedV2,
  AgreementSetDraftByPlatformV2,
  AgreementSetMissingCertifiedAttributesByPlatformV2,
} from "../gen/v2/agreement/events.js";
import { protobufDecoder } from "../protobuf.js";

export function agreementEventToBinaryDataV2(
  event: AgreementEventV2
): Uint8Array {
  return match(event)
    .with({ type: "AgreementAdded" }, ({ data }) =>
      AgreementAddedV2.toBinary(data)
    )
    .with({ type: "AgreementDeleted" }, ({ data }) =>
      AgreementDeletedV2.toBinary(data)
    )
    .with({ type: "DraftAgreementUpdated" }, ({ data }) =>
      DraftAgreementUpdatedV2.toBinary(data)
    )
    .with({ type: "AgreementSubmitted" }, ({ data }) =>
      AgreementSubmittedV2.toBinary(data)
    )
    .with({ type: "AgreementActivated" }, ({ data }) =>
      AgreementActivatedV2.toBinary(data)
    )
    .with({ type: "AgreementUnsuspendedByProducer" }, ({ data }) =>
      AgreementUnsuspendedByProducerV2.toBinary(data)
    )
    .with({ type: "AgreementUnsuspendedByConsumer" }, ({ data }) =>
      AgreementUnsuspendedByConsumerV2.toBinary(data)
    )
    .with({ type: "AgreementUnsuspendedByPlatform" }, ({ data }) =>
      AgreementUnsuspendedByPlatformV2.toBinary(data)
    )
    .with({ type: "AgreementArchivedByConsumer" }, ({ data }) =>
      AgreementArchivedByConsumerV2.toBinary(data)
    )
    .with({ type: "AgreementArchivedByUpgrade" }, ({ data }) =>
      AgreementArchivedByUpgradeV2.toBinary(data)
    )
    .with({ type: "AgreementUpgraded" }, ({ data }) =>
      AgreementUpgradedV2.toBinary(data)
    )
    .with({ type: "AgreementSuspendedByProducer" }, ({ data }) =>
      AgreementSuspendedByProducerV2.toBinary(data)
    )
    .with({ type: "AgreementSuspendedByConsumer" }, ({ data }) =>
      AgreementSuspendedByConsumerV2.toBinary(data)
    )
    .with({ type: "AgreementSuspendedByPlatform" }, ({ data }) =>
      AgreementSuspendedByPlatformV2.toBinary(data)
    )
    .with({ type: "AgreementRejected" }, ({ data }) =>
      AgreementRejectedV2.toBinary(data)
    )
    .with({ type: "AgreementConsumerDocumentAdded" }, ({ data }) =>
      AgreementConsumerDocumentAddedV2.toBinary(data)
    )
    .with({ type: "AgreementConsumerDocumentRemoved" }, ({ data }) =>
      AgreementConsumerDocumentRemovedV2.toBinary(data)
    )
    .with({ type: "AgreementSetDraftByPlatform" }, ({ data }) =>
      AgreementSetDraftByPlatformV2.toBinary(data)
    )
    .with(
      { type: "AgreementSetMissingCertifiedAttributesByPlatform" },
      ({ data }) =>
        AgreementSetMissingCertifiedAttributesByPlatformV2.toBinary(data)
    )
    .exhaustive();
}

export const AgreementEventV2 = z.discriminatedUnion("type", [
  z.object({
    event_version: z.literal(2),
    type: z.literal("AgreementAdded"),
    data: protobufDecoder(AgreementAddedV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("AgreementDeleted"),
    data: protobufDecoder(AgreementDeletedV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("DraftAgreementUpdated"),
    data: protobufDecoder(DraftAgreementUpdatedV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("AgreementSubmitted"),
    data: protobufDecoder(AgreementSubmittedV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("AgreementActivated"),
    data: protobufDecoder(AgreementActivatedV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("AgreementUnsuspendedByProducer"),
    data: protobufDecoder(AgreementUnsuspendedByProducerV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("AgreementUnsuspendedByConsumer"),
    data: protobufDecoder(AgreementUnsuspendedByConsumerV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("AgreementUnsuspendedByPlatform"),
    data: protobufDecoder(AgreementUnsuspendedByPlatformV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("AgreementArchivedByConsumer"),
    data: protobufDecoder(AgreementArchivedByConsumerV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("AgreementArchivedByUpgrade"),
    data: protobufDecoder(AgreementArchivedByUpgradeV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("AgreementUpgraded"),
    data: protobufDecoder(AgreementUpgradedV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("AgreementSuspendedByProducer"),
    data: protobufDecoder(AgreementSuspendedByProducerV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("AgreementSuspendedByConsumer"),
    data: protobufDecoder(AgreementSuspendedByConsumerV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("AgreementSuspendedByPlatform"),
    data: protobufDecoder(AgreementSuspendedByPlatformV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("AgreementRejected"),
    data: protobufDecoder(AgreementRejectedV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("AgreementConsumerDocumentAdded"),
    data: protobufDecoder(AgreementConsumerDocumentAddedV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("AgreementConsumerDocumentRemoved"),
    data: protobufDecoder(AgreementConsumerDocumentRemovedV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("AgreementSetDraftByPlatform"),
    data: protobufDecoder(AgreementSetDraftByPlatformV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("AgreementSetMissingCertifiedAttributesByPlatform"),
    data: protobufDecoder(AgreementSetMissingCertifiedAttributesByPlatformV2),
  }),
]);
export type AgreementEventV2 = z.infer<typeof AgreementEventV2>;
