import { match } from "ts-pattern";
import { z } from "zod";
import {
  PurposeAddedV2,
  DraftPurposeUpdatedV2,
  PurposeWaitingForApprovalV2,
  PurposeActivatedV2,
  DraftPurposeDeletedV2,
  WaitingForApprovalPurposeDeletedV2,
  NewPurposeVersionActivatedV2,
  PurposeVersionActivatedV2,
  PurposeVersionUnsuspendedByProducerV2,
  PurposeVersionUnsuspendedByConsumerV2,
  PurposeVersionSuspendedByProducerV2,
  PurposeVersionSuspendedByConsumerV2,
  NewPurposeVersionWaitingForApprovalV2,
  PurposeVersionOverQuotaUnsuspendedV2,
  PurposeArchivedV2,
  WaitingForApprovalPurposeVersionDeletedV2,
  PurposeVersionRejectedV2,
  PurposeClonedV2,
} from "../gen/v2/purpose/events.js";
import { protobufDecoder } from "../protobuf.js";

export function purposeEventToBinaryDataV2(event: PurposeEventV2): Uint8Array {
  return match(event)
    .with({ type: "PurposeAdded" }, ({ data }) => PurposeAddedV2.toBinary(data))
    .with({ type: "DraftPurposeUpdated" }, ({ data }) =>
      DraftPurposeUpdatedV2.toBinary(data)
    )
    .with({ type: "PurposeWaitingForApproval" }, ({ data }) =>
      PurposeWaitingForApprovalV2.toBinary(data)
    )
    .with({ type: "PurposeActivated" }, ({ data }) =>
      PurposeActivatedV2.toBinary(data)
    )
    .with({ type: "DraftPurposeDeleted" }, ({ data }) =>
      DraftPurposeDeletedV2.toBinary(data)
    )
    .with({ type: "WaitingForApprovalPurposeDeleted" }, ({ data }) =>
      WaitingForApprovalPurposeDeletedV2.toBinary(data)
    )
    .with({ type: "NewPurposeVersionActivated" }, ({ data }) =>
      NewPurposeVersionActivatedV2.toBinary(data)
    )
    .with({ type: "PurposeVersionActivated" }, ({ data }) =>
      PurposeVersionActivatedV2.toBinary(data)
    )
    .with({ type: "PurposeVersionUnsuspendedByProducer" }, ({ data }) =>
      PurposeVersionUnsuspendedByProducerV2.toBinary(data)
    )
    .with({ type: "PurposeVersionUnsuspendedByConsumer" }, ({ data }) =>
      PurposeVersionUnsuspendedByConsumerV2.toBinary(data)
    )
    .with({ type: "PurposeVersionSuspendedByProducer" }, ({ data }) =>
      PurposeVersionSuspendedByProducerV2.toBinary(data)
    )
    .with({ type: "PurposeVersionSuspendedByConsumer" }, ({ data }) =>
      PurposeVersionSuspendedByConsumerV2.toBinary(data)
    )
    .with({ type: "NewPurposeVersionWaitingForApproval" }, ({ data }) =>
      NewPurposeVersionWaitingForApprovalV2.toBinary(data)
    )
    .with({ type: "PurposeVersionOverQuotaUnsuspended" }, ({ data }) =>
      PurposeVersionOverQuotaUnsuspendedV2.toBinary(data)
    )
    .with({ type: "PurposeArchived" }, ({ data }) =>
      PurposeArchivedV2.toBinary(data)
    )
    .with({ type: "WaitingForApprovalPurposeVersionDeleted" }, ({ data }) =>
      WaitingForApprovalPurposeVersionDeletedV2.toBinary(data)
    )
    .with({ type: "PurposeVersionRejected" }, ({ data }) =>
      PurposeVersionRejectedV2.toBinary(data)
    )
    .with({ type: "PurposeCloned" }, ({ data }) =>
      PurposeClonedV2.toBinary(data)
    )
    .exhaustive();
}

export const PurposeEventV2 = z.discriminatedUnion("type", [
  z.object({
    event_version: z.literal(2),
    type: z.literal("PurposeAdded"),
    data: protobufDecoder(PurposeAddedV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("DraftPurposeUpdated"),
    data: protobufDecoder(DraftPurposeUpdatedV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("PurposeWaitingForApproval"),
    data: protobufDecoder(PurposeWaitingForApprovalV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("PurposeActivated"),
    data: protobufDecoder(PurposeActivatedV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("DraftPurposeDeleted"),
    data: protobufDecoder(DraftPurposeDeletedV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("WaitingForApprovalPurposeDeleted"),
    data: protobufDecoder(WaitingForApprovalPurposeDeletedV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("NewPurposeVersionActivated"),
    data: protobufDecoder(NewPurposeVersionActivatedV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("PurposeVersionActivated"),
    data: protobufDecoder(PurposeVersionActivatedV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("PurposeVersionUnsuspendedByProducer"),
    data: protobufDecoder(PurposeVersionUnsuspendedByProducerV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("PurposeVersionUnsuspendedByConsumer"),
    data: protobufDecoder(PurposeVersionUnsuspendedByConsumerV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("PurposeVersionSuspendedByProducer"),
    data: protobufDecoder(PurposeVersionSuspendedByProducerV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("PurposeVersionSuspendedByConsumer"),
    data: protobufDecoder(PurposeVersionSuspendedByConsumerV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("NewPurposeVersionWaitingForApproval"),
    data: protobufDecoder(NewPurposeVersionWaitingForApprovalV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("PurposeVersionOverQuotaUnsuspended"),
    data: protobufDecoder(PurposeVersionOverQuotaUnsuspendedV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("PurposeArchived"),
    data: protobufDecoder(PurposeArchivedV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("WaitingForApprovalPurposeVersionDeleted"),
    data: protobufDecoder(WaitingForApprovalPurposeVersionDeletedV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("PurposeVersionRejected"),
    data: protobufDecoder(PurposeVersionRejectedV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("PurposeCloned"),
    data: protobufDecoder(PurposeClonedV2),
  }),
]);
export type PurposeEventV2 = z.infer<typeof PurposeEventV2>;
