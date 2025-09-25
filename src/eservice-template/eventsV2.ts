import { z } from "zod";
import { match } from "ts-pattern";
import {
  EServiceTemplateVersionActivatedV2,
  EServiceTemplateAddedV2,
  EServiceTemplateIntendedTargetUpdatedV2,
  EServiceTemplateDescriptionUpdatedV2,
  EServiceTemplateDeletedV2,
  EServiceTemplateDraftVersionDeletedV2,
  EServiceTemplateDraftVersionUpdatedV2,
  EServiceTemplateDraftUpdatedV2,
  EServiceTemplateNameUpdatedV2,
  EServiceTemplateVersionSuspendedV2,
  EServiceTemplateVersionAddedV2,
  EServiceTemplateVersionAttributesUpdatedV2,
  EServiceTemplateVersionDocumentAddedV2,
  EServiceTemplateVersionDocumentDeletedV2,
  EServiceTemplateVersionDocumentUpdatedV2,
  EServiceTemplateVersionInterfaceAddedV2,
  EServiceTemplateVersionInterfaceDeletedV2,
  EServiceTemplateVersionInterfaceUpdatedV2,
  EServiceTemplateVersionPublishedV2,
  EServiceTemplateVersionQuotasUpdatedV2,
  EServiceTemplatePersonalDataFlagUpdatedAfterPublicationV2,
} from "../gen/v2/eservice-template/events.js";
import { protobufDecoder } from "../utils.js";

export function eserviceTemplateEventToBinaryDataV2(
  event: EServiceTemplateEventV2
): Uint8Array {
  return match(event)
    .with({ type: "EServiceTemplateVersionActivated" }, ({ data }) =>
      EServiceTemplateVersionActivatedV2.toBinary(data)
    )
    .with({ type: "EServiceTemplateAdded" }, ({ data }) =>
      EServiceTemplateAddedV2.toBinary(data)
    )
    .with({ type: "EServiceTemplateIntendedTargetUpdated" }, ({ data }) =>
      EServiceTemplateIntendedTargetUpdatedV2.toBinary(data)
    )
    .with({ type: "EServiceTemplateDescriptionUpdated" }, ({ data }) =>
      EServiceTemplateDescriptionUpdatedV2.toBinary(data)
    )
    .with({ type: "EServiceTemplateDeleted" }, ({ data }) =>
      EServiceTemplateDeletedV2.toBinary(data)
    )
    .with({ type: "EServiceTemplateDraftVersionDeleted" }, ({ data }) =>
      EServiceTemplateDraftVersionDeletedV2.toBinary(data)
    )
    .with({ type: "EServiceTemplateDraftVersionUpdated" }, ({ data }) =>
      EServiceTemplateDraftVersionUpdatedV2.toBinary(data)
    )
    .with({ type: "EServiceTemplateDraftUpdated" }, ({ data }) =>
      EServiceTemplateDraftUpdatedV2.toBinary(data)
    )
    .with({ type: "EServiceTemplateNameUpdated" }, ({ data }) =>
      EServiceTemplateNameUpdatedV2.toBinary(data)
    )
    .with({ type: "EServiceTemplateVersionSuspended" }, ({ data }) =>
      EServiceTemplateVersionSuspendedV2.toBinary(data)
    )
    .with({ type: "EServiceTemplateVersionAdded" }, ({ data }) =>
      EServiceTemplateVersionAddedV2.toBinary(data)
    )
    .with({ type: "EServiceTemplateVersionAttributesUpdated" }, ({ data }) =>
      EServiceTemplateVersionAttributesUpdatedV2.toBinary(data)
    )
    .with({ type: "EServiceTemplateVersionDocumentAdded" }, ({ data }) =>
      EServiceTemplateVersionDocumentAddedV2.toBinary(data)
    )
    .with({ type: "EServiceTemplateVersionDocumentDeleted" }, ({ data }) =>
      EServiceTemplateVersionDocumentDeletedV2.toBinary(data)
    )
    .with({ type: "EServiceTemplateVersionDocumentUpdated" }, ({ data }) =>
      EServiceTemplateVersionDocumentUpdatedV2.toBinary(data)
    )
    .with({ type: "EServiceTemplateVersionInterfaceAdded" }, ({ data }) =>
      EServiceTemplateVersionInterfaceAddedV2.toBinary(data)
    )
    .with({ type: "EServiceTemplateVersionInterfaceDeleted" }, ({ data }) =>
      EServiceTemplateVersionInterfaceDeletedV2.toBinary(data)
    )
    .with({ type: "EServiceTemplateVersionInterfaceUpdated" }, ({ data }) =>
      EServiceTemplateVersionInterfaceUpdatedV2.toBinary(data)
    )
    .with({ type: "EServiceTemplateVersionPublished" }, ({ data }) =>
      EServiceTemplateVersionPublishedV2.toBinary(data)
    )
    .with({ type: "EServiceTemplateVersionQuotasUpdated" }, ({ data }) =>
      EServiceTemplateVersionQuotasUpdatedV2.toBinary(data)
    )
    .with(
      { type: "EServiceTemplatePersonalDataFlagUpdatedAfterPublication" },
      ({ data }) =>
        EServiceTemplatePersonalDataFlagUpdatedAfterPublicationV2.toBinary(data)
    )
    .exhaustive();
}

export const EServiceTemplateEventV2 = z.discriminatedUnion("type", [
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceTemplateVersionActivated"),
    data: protobufDecoder(EServiceTemplateVersionActivatedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceTemplateAdded"),
    data: protobufDecoder(EServiceTemplateAddedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceTemplateIntendedTargetUpdated"),
    data: protobufDecoder(EServiceTemplateIntendedTargetUpdatedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceTemplateDescriptionUpdated"),
    data: protobufDecoder(EServiceTemplateDescriptionUpdatedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceTemplateDeleted"),
    data: protobufDecoder(EServiceTemplateDeletedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceTemplateDraftVersionDeleted"),
    data: protobufDecoder(EServiceTemplateDraftVersionDeletedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceTemplateDraftVersionUpdated"),
    data: protobufDecoder(EServiceTemplateDraftVersionUpdatedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceTemplateDraftUpdated"),
    data: protobufDecoder(EServiceTemplateDraftUpdatedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceTemplateNameUpdated"),
    data: protobufDecoder(EServiceTemplateNameUpdatedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceTemplateVersionSuspended"),
    data: protobufDecoder(EServiceTemplateVersionSuspendedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceTemplateVersionAdded"),
    data: protobufDecoder(EServiceTemplateVersionAddedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceTemplateVersionAttributesUpdated"),
    data: protobufDecoder(EServiceTemplateVersionAttributesUpdatedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceTemplateVersionDocumentAdded"),
    data: protobufDecoder(EServiceTemplateVersionDocumentAddedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceTemplateVersionDocumentDeleted"),
    data: protobufDecoder(EServiceTemplateVersionDocumentDeletedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceTemplateVersionDocumentUpdated"),
    data: protobufDecoder(EServiceTemplateVersionDocumentUpdatedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceTemplateVersionInterfaceAdded"),
    data: protobufDecoder(EServiceTemplateVersionInterfaceAddedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceTemplateVersionInterfaceDeleted"),
    data: protobufDecoder(EServiceTemplateVersionInterfaceDeletedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceTemplateVersionInterfaceUpdated"),
    data: protobufDecoder(EServiceTemplateVersionInterfaceUpdatedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceTemplateVersionPublished"),
    data: protobufDecoder(EServiceTemplateVersionPublishedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceTemplateVersionQuotasUpdated"),
    data: protobufDecoder(EServiceTemplateVersionQuotasUpdatedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("EServiceTemplatePersonalDataFlagUpdatedAfterPublication"),
    data: protobufDecoder(
      EServiceTemplatePersonalDataFlagUpdatedAfterPublicationV2
    ),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
]);

export type EServiceTemplateEventV2 = z.infer<typeof EServiceTemplateEventV2>;
