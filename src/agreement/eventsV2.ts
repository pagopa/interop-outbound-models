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
  AgreementDeletedByRevokedDelegationV2,
  AgreementArchivedByRevokedDelegationV2,
  AgreementSignedContractAddedV2,
  AgreementContractAddedV2,
} from "../gen/v2/agreement/events.js";
import { protobufDecoder } from "../utils.js";

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
    .with({ type: "AgreementDeletedByRevokedDelegation" }, ({ data }) =>
      AgreementDeletedByRevokedDelegationV2.toBinary(data)
    )
    .with({ type: "AgreementArchivedByRevokedDelegation" }, ({ data }) =>
      AgreementArchivedByRevokedDelegationV2.toBinary(data)
    )
    .with({ type: "AgreementContractAdded" }, ({ data }) =>
      AgreementContractAddedV2.toBinary(data)
    )
    .with({ type: "AgreementSignedContractAdded" }, ({ data }) =>
      AgreementSignedContractAddedV2.toBinary(data)
    )
    .exhaustive();
}

export const AgreementEventV2 = z.discriminatedUnion("type", [
  z.object({
    event_version: z.literal(2),
    type: z.literal("AgreementAdded"),
    data: protobufDecoder(AgreementAddedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("AgreementDeleted"),
    data: protobufDecoder(AgreementDeletedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("DraftAgreementUpdated"),
    data: protobufDecoder(DraftAgreementUpdatedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("AgreementSubmitted"),
    data: protobufDecoder(AgreementSubmittedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("AgreementActivated"),
    data: protobufDecoder(AgreementActivatedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("AgreementUnsuspendedByProducer"),
    data: protobufDecoder(AgreementUnsuspendedByProducerV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("AgreementUnsuspendedByConsumer"),
    data: protobufDecoder(AgreementUnsuspendedByConsumerV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("AgreementUnsuspendedByPlatform"),
    data: protobufDecoder(AgreementUnsuspendedByPlatformV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("AgreementArchivedByConsumer"),
    data: protobufDecoder(AgreementArchivedByConsumerV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("AgreementArchivedByUpgrade"),
    data: protobufDecoder(AgreementArchivedByUpgradeV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("AgreementUpgraded"),
    data: protobufDecoder(AgreementUpgradedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("AgreementSuspendedByProducer"),
    data: protobufDecoder(AgreementSuspendedByProducerV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("AgreementSuspendedByConsumer"),
    data: protobufDecoder(AgreementSuspendedByConsumerV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("AgreementSuspendedByPlatform"),
    data: protobufDecoder(AgreementSuspendedByPlatformV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("AgreementRejected"),
    data: protobufDecoder(AgreementRejectedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("AgreementConsumerDocumentAdded"),
    data: protobufDecoder(AgreementConsumerDocumentAddedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("AgreementConsumerDocumentRemoved"),
    data: protobufDecoder(AgreementConsumerDocumentRemovedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("AgreementSetDraftByPlatform"),
    data: protobufDecoder(AgreementSetDraftByPlatformV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("AgreementSetMissingCertifiedAttributesByPlatform"),
    data: protobufDecoder(AgreementSetMissingCertifiedAttributesByPlatformV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("AgreementDeletedByRevokedDelegation"),
    data: protobufDecoder(AgreementDeletedByRevokedDelegationV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("AgreementArchivedByRevokedDelegation"),
    data: protobufDecoder(AgreementArchivedByRevokedDelegationV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("AgreementContractAdded"),
    data: protobufDecoder(AgreementContractAddedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("AgreementSignedContractAdded"),
    data: protobufDecoder(AgreementSignedContractAddedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
]);
export type AgreementEventV2 = z.infer<typeof AgreementEventV2>;
