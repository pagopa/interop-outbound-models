import { match } from "ts-pattern";
import { z } from "zod";
import {
  ClonedEServiceAddedV1,
  EServiceAddedV1,
  EServiceDeletedV1,
  EServiceDescriptorAddedV1,
  EServiceDescriptorUpdatedV1,
  EServiceDocumentAddedV1,
  EServiceDocumentDeletedV1,
  EServiceDocumentUpdatedV1,
  EServiceRiskAnalysisAddedV1,
  EServiceRiskAnalysisDeletedV1,
  EServiceRiskAnalysisUpdatedV1,
  EServiceUpdatedV1,
  EServiceWithDescriptorsDeletedV1,
  MovedAttributesFromEserviceToDescriptorsV1,
} from "../gen/v1/eservice/events.js";
import { protobufDecoder } from "../protobuf.js";

export function eServiceEventToBinaryDataV1(
  event: EServiceEventV1
): Uint8Array {
  return match(event)
    .with({ type: "EServiceAdded" }, ({ data }) =>
      EServiceAddedV1.toBinary(data)
    )
    .with({ type: "ClonedEServiceAdded" }, ({ data }) =>
      ClonedEServiceAddedV1.toBinary(data)
    )
    .with({ type: "EServiceUpdated" }, ({ data }) =>
      EServiceUpdatedV1.toBinary(data)
    )
    .with({ type: "EServiceWithDescriptorsDeleted" }, ({ data }) =>
      EServiceWithDescriptorsDeletedV1.toBinary(data)
    )
    .with({ type: "EServiceDocumentUpdated" }, ({ data }) =>
      EServiceDocumentUpdatedV1.toBinary(data)
    )
    .with({ type: "EServiceDeleted" }, ({ data }) =>
      EServiceDeletedV1.toBinary(data)
    )
    .with({ type: "EServiceDocumentAdded" }, ({ data }) =>
      EServiceDocumentAddedV1.toBinary(data)
    )
    .with({ type: "EServiceDocumentDeleted" }, ({ data }) =>
      EServiceDocumentDeletedV1.toBinary(data)
    )
    .with({ type: "EServiceDescriptorAdded" }, ({ data }) =>
      EServiceDescriptorAddedV1.toBinary(data)
    )
    .with({ type: "EServiceDescriptorUpdated" }, ({ data }) =>
      EServiceDescriptorUpdatedV1.toBinary(data)
    )
    .with({ type: "MovedAttributesFromEserviceToDescriptors" }, ({ data }) =>
      MovedAttributesFromEserviceToDescriptorsV1.toBinary(data)
    )
    .with({ type: "EServiceRiskAnalysisAdded" }, ({ data }) =>
      EServiceRiskAnalysisAddedV1.toBinary(data)
    )
    .with({ type: "EServiceRiskAnalysisUpdated" }, ({ data }) =>
      EServiceRiskAnalysisUpdatedV1.toBinary(data)
    )
    .with({ type: "EServiceRiskAnalysisDeleted" }, ({ data }) =>
      EServiceRiskAnalysisDeletedV1.toBinary(data)
    )
    .exhaustive();
}

export const EServiceEventV1 = z.discriminatedUnion("type", [
  z.object({
    event_version: z.literal(1),
    type: z.literal("EServiceAdded"),
    data: protobufDecoder(EServiceAddedV1),
  }),
  z.object({
    event_version: z.literal(1),
    type: z.literal("ClonedEServiceAdded"),
    data: protobufDecoder(ClonedEServiceAddedV1),
  }),
  z.object({
    event_version: z.literal(1),
    type: z.literal("EServiceUpdated"),
    data: protobufDecoder(EServiceUpdatedV1),
  }),
  z.object({
    event_version: z.literal(1),
    type: z.literal("EServiceWithDescriptorsDeleted"),
    data: protobufDecoder(EServiceWithDescriptorsDeletedV1),
  }),
  z.object({
    event_version: z.literal(1),
    type: z.literal("EServiceDocumentUpdated"),
    data: protobufDecoder(EServiceDocumentUpdatedV1),
  }),
  z.object({
    event_version: z.literal(1),
    type: z.literal("EServiceDeleted"),
    data: protobufDecoder(EServiceDeletedV1),
  }),
  z.object({
    event_version: z.literal(1),
    type: z.literal("EServiceDocumentAdded"),
    data: protobufDecoder(EServiceDocumentAddedV1),
  }),
  z.object({
    event_version: z.literal(1),
    type: z.literal("EServiceDocumentDeleted"),
    data: protobufDecoder(EServiceDocumentDeletedV1),
  }),
  z.object({
    event_version: z.literal(1),
    type: z.literal("EServiceDescriptorAdded"),
    data: protobufDecoder(EServiceDescriptorAddedV1),
  }),
  z.object({
    event_version: z.literal(1),
    type: z.literal("EServiceDescriptorUpdated"),
    data: protobufDecoder(EServiceDescriptorUpdatedV1),
  }),
  z.object({
    event_version: z.literal(1),
    type: z.literal("MovedAttributesFromEserviceToDescriptors"),
    data: protobufDecoder(MovedAttributesFromEserviceToDescriptorsV1),
  }),
  z.object({
    event_version: z.literal(1),
    type: z.literal("EServiceRiskAnalysisAdded"),
    data: protobufDecoder(EServiceRiskAnalysisAddedV1),
  }),
  z.object({
    event_version: z.literal(1),
    type: z.literal("EServiceRiskAnalysisUpdated"),
    data: protobufDecoder(EServiceRiskAnalysisUpdatedV1),
  }),
  z.object({
    event_version: z.literal(1),
    type: z.literal("EServiceRiskAnalysisDeleted"),
    data: protobufDecoder(EServiceRiskAnalysisDeletedV1),
  }),
]);

export type EServiceEventV1 = z.infer<typeof EServiceEventV1>;
