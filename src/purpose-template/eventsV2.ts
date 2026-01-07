import { z } from "zod";
import { match } from "ts-pattern";
import {
  PurposeTemplateAddedV2,
  PurposeTemplateAnnotationDocumentAddedV2,
  PurposeTemplateAnnotationDocumentDeletedV2,
  PurposeTemplateAnnotationDocumentUpdatedV2,
  PurposeTemplateArchivedV2,
  PurposeTemplateDraftDeletedV2,
  PurposeTemplateDraftUpdatedV2,
  PurposeTemplateEServiceLinkedV2,
  PurposeTemplateEServiceUnlinkedV2,
  PurposeTemplatePublishedV2,
  PurposeTemplateSuspendedV2,
  PurposeTemplateUnsuspendedV2,
  RiskAnalysisTemplateDocumentGeneratedV2,
  RiskAnalysisTemplateSignedDocumentGeneratedV2,
} from "../gen/v2/purpose-template/events.js";
import { protobufDecoder } from "../utils.js";

export function purposeTemplateEventToBinaryDataV2(
  event: PurposeTemplateEventV2
): Uint8Array {
  return match(event)
    .with({ type: "PurposeTemplateAdded" }, ({ data }) =>
      PurposeTemplateAddedV2.toBinary(data)
    )
    .with({ type: "PurposeTemplateEServiceLinked" }, ({ data }) =>
      PurposeTemplateEServiceLinkedV2.toBinary(data)
    )
    .with({ type: "PurposeTemplateEServiceUnlinked" }, ({ data }) =>
      PurposeTemplateEServiceUnlinkedV2.toBinary(data)
    )
    .with({ type: "PurposeTemplateDraftUpdated" }, ({ data }) =>
      PurposeTemplateDraftUpdatedV2.toBinary(data)
    )
    .with({ type: "PurposeTemplateDraftDeleted" }, ({ data }) =>
      PurposeTemplateDraftDeletedV2.toBinary(data)
    )
    .with({ type: "PurposeTemplatePublished" }, ({ data }) =>
      PurposeTemplatePublishedV2.toBinary(data)
    )
    .with({ type: "PurposeTemplateUnsuspended" }, ({ data }) =>
      PurposeTemplateUnsuspendedV2.toBinary(data)
    )
    .with({ type: "PurposeTemplateSuspended" }, ({ data }) =>
      PurposeTemplateSuspendedV2.toBinary(data)
    )
    .with({ type: "PurposeTemplateArchived" }, ({ data }) =>
      PurposeTemplateArchivedV2.toBinary(data)
    )
    .with({ type: "PurposeTemplateAnnotationDocumentAdded" }, ({ data }) =>
      PurposeTemplateAnnotationDocumentAddedV2.toBinary(data)
    )
    .with({ type: "PurposeTemplateAnnotationDocumentDeleted" }, ({ data }) =>
      PurposeTemplateAnnotationDocumentDeletedV2.toBinary(data)
    )
    .with({ type: "PurposeTemplateAnnotationDocumentUpdated" }, ({ data }) =>
      PurposeTemplateAnnotationDocumentUpdatedV2.toBinary(data)
    )
    .with({ type: "RiskAnalysisTemplateDocumentGenerated" }, ({ data }) =>
      RiskAnalysisTemplateDocumentGeneratedV2.toBinary(data)
    )
    .with({ type: "RiskAnalysisTemplateSignedDocumentGenerated" }, ({ data }) =>
      RiskAnalysisTemplateSignedDocumentGeneratedV2.toBinary(data)
    )
    .exhaustive();
}

export const PurposeTemplateEventV2 = z.discriminatedUnion("type", [
  z.object({
    event_version: z.literal(2),
    type: z.literal("PurposeTemplateAdded"),
    data: protobufDecoder(PurposeTemplateAddedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.string(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("PurposeTemplateEServiceLinked"),
    data: protobufDecoder(PurposeTemplateEServiceLinkedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.string(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("PurposeTemplateEServiceUnlinked"),
    data: protobufDecoder(PurposeTemplateEServiceUnlinkedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.string(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("PurposeTemplateDraftUpdated"),
    data: protobufDecoder(PurposeTemplateDraftUpdatedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.string(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("PurposeTemplateDraftDeleted"),
    data: protobufDecoder(PurposeTemplateDraftDeletedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.string(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("PurposeTemplatePublished"),
    data: protobufDecoder(PurposeTemplatePublishedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.string(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("PurposeTemplateUnsuspended"),
    data: protobufDecoder(PurposeTemplateUnsuspendedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.string(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("PurposeTemplateSuspended"),
    data: protobufDecoder(PurposeTemplateSuspendedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.string(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("PurposeTemplateArchived"),
    data: protobufDecoder(PurposeTemplateArchivedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.string(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("PurposeTemplateAnnotationDocumentAdded"),
    data: protobufDecoder(PurposeTemplateAnnotationDocumentAddedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.string(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("PurposeTemplateAnnotationDocumentDeleted"),
    data: protobufDecoder(PurposeTemplateAnnotationDocumentDeletedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.string(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("PurposeTemplateAnnotationDocumentUpdated"),
    data: protobufDecoder(PurposeTemplateAnnotationDocumentUpdatedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.string(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("RiskAnalysisTemplateDocumentGenerated"),
    data: protobufDecoder(RiskAnalysisTemplateDocumentGeneratedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.string(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("RiskAnalysisTemplateSignedDocumentGenerated"),
    data: protobufDecoder(RiskAnalysisTemplateSignedDocumentGeneratedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.string(),
  }),
]);

export type PurposeTemplateEventV2 = z.infer<typeof PurposeTemplateEventV2>;
