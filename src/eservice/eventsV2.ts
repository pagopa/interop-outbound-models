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
  EServiceDescriptorSubmittedByDelegateV2,
  EServiceDescriptorApprovedByDelegatorV2,
  EServiceDescriptorRejectedByDelegatorV2,
  EServiceDescriptorAttributesUpdatedV2,
  EServiceIsClientAccessDelegableDisabledV2,
  EServiceIsClientAccessDelegableEnabledV2,
  EServiceIsConsumerDelegableDisabledV2,
  EServiceIsConsumerDelegableEnabledV2,
  EServiceNameUpdatedV2,
  EServiceDescriptionUpdatedByTemplateUpdateV2,
  EServiceDescriptorQuotasUpdatedByTemplateUpdateV2,
  EServiceDescriptorAttributesUpdatedByTemplateUpdateV2,
  EServiceDescriptorDocumentAddedByTemplateUpdateV2,
  EServiceDescriptorDocumentUpdatedByTemplateUpdateV2,
  EServiceDescriptorDocumentDeletedByTemplateUpdateV2,
  EServiceNameUpdatedByTemplateUpdateV2,
  EServiceDescriptorAgreementApprovalPolicyUpdatedV2,
  EServiceSignalHubEnabledV2,
  EServiceSignalHubDisabledV2,
  EServicePersonalDataUpdatedAfterPublishV2,
  EServicePersonalDataUpdatedByTemplateUpdateV2,
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
    .with({ type: "EServiceDescriptorSubmittedByDelegate" }, ({ data }) =>
      EServiceDescriptorSubmittedByDelegateV2.toBinary(data)
    )
    .with({ type: "EServiceDescriptorApprovedByDelegator" }, ({ data }) =>
      EServiceDescriptorApprovedByDelegatorV2.toBinary(data)
    )
    .with({ type: "EServiceDescriptorRejectedByDelegator" }, ({ data }) =>
      EServiceDescriptorRejectedByDelegatorV2.toBinary(data)
    )
    .with({ type: "EServiceDescriptorAttributesUpdated" }, ({ data }) =>
      EServiceDescriptorAttributesUpdatedV2.toBinary(data)
    )
    .with({ type: "EServiceIsConsumerDelegableEnabled" }, ({ data }) =>
      EServiceIsConsumerDelegableEnabledV2.toBinary(data)
    )
    .with({ type: "EServiceIsConsumerDelegableDisabled" }, ({ data }) =>
      EServiceIsConsumerDelegableDisabledV2.toBinary(data)
    )
    .with({ type: "EServiceIsClientAccessDelegableEnabled" }, ({ data }) =>
      EServiceIsClientAccessDelegableEnabledV2.toBinary(data)
    )
    .with({ type: "EServiceIsClientAccessDelegableDisabled" }, ({ data }) =>
      EServiceIsClientAccessDelegableDisabledV2.toBinary(data)
    )
    .with({ type: "EServiceNameUpdated" }, ({ data }) =>
      EServiceNameUpdatedV2.toBinary(data)
    )
    .with({ type: "EServiceDescriptionUpdatedByTemplateUpdate" }, ({ data }) =>
      EServiceDescriptionUpdatedByTemplateUpdateV2.toBinary(data)
    )
    .with(
      { type: "EServiceDescriptorQuotasUpdatedByTemplateUpdate" },
      ({ data }) =>
        EServiceDescriptorQuotasUpdatedByTemplateUpdateV2.toBinary(data)
    )
    .with(
      { type: "EServiceDescriptorAttributesUpdatedByTemplateUpdate" },
      ({ data }) =>
        EServiceDescriptorAttributesUpdatedByTemplateUpdateV2.toBinary(data)
    )
    .with(
      { type: "EServiceDescriptorDocumentAddedByTemplateUpdate" },
      ({ data }) =>
        EServiceDescriptorDocumentAddedByTemplateUpdateV2.toBinary(data)
    )
    .with(
      { type: "EServiceDescriptorDocumentUpdatedByTemplateUpdate" },
      ({ data }) =>
        EServiceDescriptorDocumentUpdatedByTemplateUpdateV2.toBinary(data)
    )
    .with(
      { type: "EServiceDescriptorDocumentDeletedByTemplateUpdate" },
      ({ data }) =>
        EServiceDescriptorDocumentDeletedByTemplateUpdateV2.toBinary(data)
    )
    .with({ type: "EServiceNameUpdatedByTemplateUpdate" }, ({ data }) =>
      EServiceNameUpdatedByTemplateUpdateV2.toBinary(data)
    )
    .with(
      { type: "EServiceDescriptorAgreementApprovalPolicyUpdated" },
      ({ data }) =>
        EServiceDescriptorAgreementApprovalPolicyUpdatedV2.toBinary(data)
    )
    .with({ type: "EServiceSignalHubEnabled" }, ({ data }) =>
      EServiceSignalHubEnabledV2.toBinary(data)
    )
    .with({ type: "EServiceSignalHubDisabled" }, ({ data }) =>
      EServiceSignalHubDisabledV2.toBinary(data)
    )
    .with({ type: "EServicePersonalDataUpdatedAfterPublish" }, ({ data }) =>
      EServicePersonalDataUpdatedAfterPublishV2.toBinary(data)
    )
    .with({ type: "EServicePersonalDataUpdatedByTemplateUpdate" }, ({ data }) =>
      EServicePersonalDataUpdatedByTemplateUpdateV2.toBinary(data)
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
    type: z.literal("EServiceDescriptorSubmittedByDelegate"),
    data: protobufDecoder(EServiceDescriptorSubmittedByDelegateV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceDescriptorApprovedByDelegator"),
    data: protobufDecoder(EServiceDescriptorApprovedByDelegatorV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceDescriptorRejectedByDelegator"),
    data: protobufDecoder(EServiceDescriptorRejectedByDelegatorV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceDescriptorAttributesUpdated"),
    data: protobufDecoder(EServiceDescriptorAttributesUpdatedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceIsConsumerDelegableEnabled"),
    data: protobufDecoder(EServiceIsConsumerDelegableEnabledV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceIsConsumerDelegableDisabled"),
    data: protobufDecoder(EServiceIsConsumerDelegableDisabledV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceIsClientAccessDelegableEnabled"),
    data: protobufDecoder(EServiceIsClientAccessDelegableEnabledV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceNameUpdated"),
    data: protobufDecoder(EServiceNameUpdatedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceIsClientAccessDelegableDisabled"),
    data: protobufDecoder(EServiceIsClientAccessDelegableDisabledV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceDescriptionUpdatedByTemplateUpdate"),
    data: protobufDecoder(EServiceDescriptionUpdatedByTemplateUpdateV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceDescriptorQuotasUpdatedByTemplateUpdate"),
    data: protobufDecoder(EServiceDescriptorQuotasUpdatedByTemplateUpdateV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceDescriptorAttributesUpdatedByTemplateUpdate"),
    data: protobufDecoder(
      EServiceDescriptorAttributesUpdatedByTemplateUpdateV2
    ),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceDescriptorDocumentAddedByTemplateUpdate"),
    data: protobufDecoder(EServiceDescriptorDocumentAddedByTemplateUpdateV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceDescriptorDocumentUpdatedByTemplateUpdate"),
    data: protobufDecoder(EServiceDescriptorDocumentUpdatedByTemplateUpdateV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceDescriptorDocumentDeletedByTemplateUpdate"),
    data: protobufDecoder(EServiceDescriptorDocumentDeletedByTemplateUpdateV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceNameUpdatedByTemplateUpdate"),
    data: protobufDecoder(EServiceNameUpdatedByTemplateUpdateV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceDescriptorAgreementApprovalPolicyUpdated"),
    data: protobufDecoder(EServiceDescriptorAgreementApprovalPolicyUpdatedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceSignalHubEnabled"),
    data: protobufDecoder(EServiceSignalHubEnabledV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceSignalHubDisabled"),
    data: protobufDecoder(EServiceSignalHubDisabledV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServicePersonalDataUpdatedAfterPublish"),
    data: protobufDecoder(EServicePersonalDataUpdatedAfterPublishV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServicePersonalDataUpdatedByTemplateUpdate"),
    data: protobufDecoder(EServicePersonalDataUpdatedByTemplateUpdateV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
]);

export type EServiceEventV2 = z.infer<typeof EServiceEventV2>;
