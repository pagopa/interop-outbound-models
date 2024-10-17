import { match } from "ts-pattern";
import { z } from "zod";
import { protobufDecoder } from "../utils.js";
import {
  DraftEServiceUpdatedV2,
  EServiceAddedV2,
  EServiceClonedV2,
  EServiceDeletedV2,
  EServiceDescriptorActivatedV2,
  EServiceDescriptorAddedV2,
  EServiceDescriptorArchivedV2,
  EServiceDescriptorDocumentAddedV2,
  EServiceDescriptorDocumentDeletedV2,
  EServiceDescriptorDocumentUpdatedV2,
  EServiceDescriptorInterfaceAddedV2,
  EServiceDescriptorInterfaceDeletedV2,
  EServiceDescriptorInterfaceUpdatedV2,
  EServiceDescriptorPublishedV2,
  EServiceDescriptorSuspendedV2,
  EServiceDraftDescriptorDeletedV2,
  EServiceDraftDescriptorUpdatedV2,
  EServiceDescriptorQuotasUpdatedV2,
  EServiceDescriptionUpdatedV2,
  EServiceDescriptorDelegateSubmittedV2,
  EServiceDescriptorDelegatorApprovedV2,
  EServiceDescriptorDelegatorRejectedV2
} from "../gen/v2/eservice/events.js";

export function eServiceEventToBinaryDataV2(
  event: EServiceEventV2
): Uint8Array {
  return match(event)
    .with({ type: "EServiceAdded" }, ({ data }) =>
      EServiceAddedV2.toBinary(data)
    )
    .with({ type: "DraftEServiceUpdated" }, ({ data }) =>
      DraftEServiceUpdatedV2.toBinary(data)
    )
    .with({ type: "EServiceDeleted" }, ({ data }) =>
      EServiceDeletedV2.toBinary(data)
    )
    .with({ type: "EServiceCloned" }, ({ data }) =>
      EServiceClonedV2.toBinary(data)
    )
    .with({ type: "EServiceDescriptorAdded" }, ({ data }) =>
      EServiceDescriptorAddedV2.toBinary(data)
    )
    .with({ type: "EServiceDraftDescriptorUpdated" }, ({ data }) =>
      EServiceDraftDescriptorUpdatedV2.toBinary(data)
    )
    .with({ type: "EServiceDescriptorQuotasUpdated" }, ({ data }) =>
      EServiceDescriptorQuotasUpdatedV2.toBinary(data)
    )
    .with({ type: "EServiceDescriptorActivated" }, ({ data }) =>
      EServiceDescriptorActivatedV2.toBinary(data)
    )
    .with({ type: "EServiceDescriptorArchived" }, ({ data }) =>
      EServiceDescriptorArchivedV2.toBinary(data)
    )
    .with({ type: "EServiceDescriptorPublished" }, ({ data }) =>
      EServiceDescriptorPublishedV2.toBinary(data)
    )
    .with({ type: "EServiceDescriptorSuspended" }, ({ data }) =>
      EServiceDescriptorSuspendedV2.toBinary(data)
    )
    .with({ type: "EServiceDraftDescriptorDeleted" }, ({ data }) =>
      EServiceDraftDescriptorDeletedV2.toBinary(data)
    )
    .with({ type: "EServiceDescriptorInterfaceAdded" }, ({ data }) =>
      EServiceDescriptorInterfaceAddedV2.toBinary(data)
    )
    .with({ type: "EServiceDescriptorDocumentAdded" }, ({ data }) =>
      EServiceDescriptorDocumentAddedV2.toBinary(data)
    )
    .with({ type: "EServiceDescriptorInterfaceUpdated" }, ({ data }) =>
      EServiceDescriptorInterfaceUpdatedV2.toBinary(data)
    )
    .with({ type: "EServiceDescriptorDocumentUpdated" }, ({ data }) =>
      EServiceDescriptorDocumentUpdatedV2.toBinary(data)
    )
    .with({ type: "EServiceDescriptorInterfaceDeleted" }, ({ data }) =>
      EServiceDescriptorInterfaceDeletedV2.toBinary(data)
    )
    .with({ type: "EServiceDescriptorDocumentDeleted" }, ({ data }) =>
      EServiceDescriptorDocumentDeletedV2.toBinary(data)
    )
    .with({ type: "EServiceDescriptionUpdated" }, ({ data }) =>
      EServiceDescriptionUpdatedV2.toBinary(data)
    )
    .with({ type: "EServiceDescriptorDelegateSubmitted" }, ({ data }) =>
      EServiceDescriptorDelegateSubmittedV2.toBinary(data)
    )
    .with({ type: "EServiceDescriptorDelegatorApproved" }, ({ data }) =>
      EServiceDescriptorDelegatorApprovedV2.toBinary(data)
    )
    .with({ type: "EServiceDescriptorDelegatorRejected" }, ({ data }) =>
      EServiceDescriptorDelegatorRejectedV2.toBinary(data)
    )
    .exhaustive();
}

export const EServiceEventV2 = z.discriminatedUnion("type", [
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceAdded"),
    data: protobufDecoder(EServiceAddedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("DraftEServiceUpdated"),
    data: protobufDecoder(DraftEServiceUpdatedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceDeleted"),
    data: protobufDecoder(EServiceDeletedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceCloned"),
    data: protobufDecoder(EServiceClonedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceDescriptorAdded"),
    data: protobufDecoder(EServiceDescriptorAddedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceDraftDescriptorUpdated"),
    data: protobufDecoder(EServiceDraftDescriptorUpdatedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceDescriptorQuotasUpdated"),
    data: protobufDecoder(EServiceDescriptorQuotasUpdatedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceDescriptorActivated"),
    data: protobufDecoder(EServiceDescriptorActivatedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceDescriptorArchived"),
    data: protobufDecoder(EServiceDescriptorArchivedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceDescriptorPublished"),
    data: protobufDecoder(EServiceDescriptorPublishedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceDescriptorSuspended"),
    data: protobufDecoder(EServiceDescriptorSuspendedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceDraftDescriptorDeleted"),
    data: protobufDecoder(EServiceDraftDescriptorDeletedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceDescriptorInterfaceAdded"),
    data: protobufDecoder(EServiceDescriptorInterfaceAddedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceDescriptorDocumentAdded"),
    data: protobufDecoder(EServiceDescriptorDocumentAddedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceDescriptorInterfaceUpdated"),
    data: protobufDecoder(EServiceDescriptorInterfaceUpdatedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceDescriptorDocumentUpdated"),
    data: protobufDecoder(EServiceDescriptorDocumentUpdatedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceDescriptorInterfaceDeleted"),
    data: protobufDecoder(EServiceDescriptorInterfaceDeletedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceDescriptorDocumentDeleted"),
    data: protobufDecoder(EServiceDescriptorDocumentDeletedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceDescriptionUpdated"),
    data: protobufDecoder(EServiceDescriptionUpdatedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceDescriptorDelegateSubmitted"),
    data: protobufDecoder(EServiceDescriptorDelegateSubmittedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceDescriptorDelegatorApproved"),
    data: protobufDecoder(EServiceDescriptorDelegatorApprovedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceDescriptorDelegatorRejected"),
    data: protobufDecoder(EServiceDescriptorDelegatorRejectedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
]);

export type EServiceEventV2 = z.infer<typeof EServiceEventV2>;
