import { match } from "ts-pattern";
import { z } from "zod";
import {
  TenantOnboardedV2,
  TenantOnboardDetailsUpdatedV2,
  TenantCertifiedAttributeAssignedV2,
  TenantCertifiedAttributeRevokedV2,
  TenantDeclaredAttributeAssignedV2,
  TenantDeclaredAttributeRevokedV2,
  TenantVerifiedAttributeAssignedV2,
  TenantVerifiedAttributeRevokedV2,
  TenantVerifiedAttributeExpirationUpdatedV2,
  MaintenanceTenantDeletedV2,
  TenantVerifiedAttributeExtensionUpdatedV2,
  TenantKindUpdatedV2,
  MaintenanceTenantPromotedToCertifierV2,
  TenantDelegatedProducerFeatureAddedV2,
  TenantDelegatedProducerFeatureRemovedV2,
  TenantDelegatedConsumerFeatureAddedV2,
  TenantDelegatedConsumerFeatureRemovedV2,
} from "../gen/v2/tenant/events.js";
import { protobufDecoder } from "../utils.js";

export function tenantEventToBinaryDataV2(event: TenantEventV2): Uint8Array {
  return match(event)
    .with({ type: "TenantOnboarded" }, ({ data }) =>
      TenantOnboardedV2.toBinary(data)
    )
    .with({ type: "TenantOnboardDetailsUpdated" }, ({ data }) =>
      TenantOnboardDetailsUpdatedV2.toBinary(data)
    )
    .with({ type: "TenantCertifiedAttributeAssigned" }, ({ data }) =>
      TenantCertifiedAttributeAssignedV2.toBinary(data)
    )
    .with({ type: "TenantCertifiedAttributeRevoked" }, ({ data }) =>
      TenantCertifiedAttributeRevokedV2.toBinary(data)
    )
    .with({ type: "TenantDeclaredAttributeAssigned" }, ({ data }) =>
      TenantDeclaredAttributeAssignedV2.toBinary(data)
    )
    .with({ type: "TenantDeclaredAttributeRevoked" }, ({ data }) =>
      TenantDeclaredAttributeRevokedV2.toBinary(data)
    )
    .with({ type: "TenantVerifiedAttributeAssigned" }, ({ data }) =>
      TenantVerifiedAttributeAssignedV2.toBinary(data)
    )
    .with({ type: "TenantVerifiedAttributeRevoked" }, ({ data }) =>
      TenantVerifiedAttributeRevokedV2.toBinary(data)
    )
    .with({ type: "TenantVerifiedAttributeExpirationUpdated" }, ({ data }) =>
      TenantVerifiedAttributeExpirationUpdatedV2.toBinary(data)
    )
    .with({ type: "TenantVerifiedAttributeExtensionUpdated" }, ({ data }) =>
      TenantVerifiedAttributeExtensionUpdatedV2.toBinary(data)
    )
    .with({ type: "MaintenanceTenantDeleted" }, ({ data }) =>
      MaintenanceTenantDeletedV2.toBinary(data)
    )
    .with({ type: "TenantKindUpdated" }, ({ data }) =>
      TenantKindUpdatedV2.toBinary(data)
    )
    .with({ type: "MaintenanceTenantPromotedToCertifier" }, ({ data }) =>
      MaintenanceTenantPromotedToCertifierV2.toBinary(data)
    )
    .with({ type: "TenantDelegatedProducerFeatureAdded" }, ({ data }) =>
      TenantDelegatedProducerFeatureAddedV2.toBinary(data)
    )
    .with({ type: "TenantDelegatedProducerFeatureRemoved" }, ({ data }) =>
      TenantDelegatedProducerFeatureRemovedV2.toBinary(data)
    )
    .with({ type: "TenantDelegatedConsumerFeatureAdded" }, ({ data }) =>
      TenantDelegatedConsumerFeatureAddedV2.toBinary(data)
    )
    .with({ type: "TenantDelegatedConsumerFeatureRemoved" }, ({ data }) =>
      TenantDelegatedConsumerFeatureRemovedV2.toBinary(data)
    )
    .exhaustive();
}

export const TenantEventV2 = z.discriminatedUnion("type", [
  z.object({
    event_version: z.literal(2),
    type: z.literal("TenantOnboarded"),
    data: protobufDecoder(TenantOnboardedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("TenantOnboardDetailsUpdated"),
    data: protobufDecoder(TenantOnboardDetailsUpdatedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("TenantCertifiedAttributeAssigned"),
    data: protobufDecoder(TenantCertifiedAttributeAssignedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("TenantCertifiedAttributeRevoked"),
    data: protobufDecoder(TenantCertifiedAttributeRevokedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("TenantDeclaredAttributeAssigned"),
    data: protobufDecoder(TenantDeclaredAttributeAssignedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("TenantDeclaredAttributeRevoked"),
    data: protobufDecoder(TenantDeclaredAttributeRevokedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("TenantVerifiedAttributeAssigned"),
    data: protobufDecoder(TenantVerifiedAttributeAssignedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("TenantVerifiedAttributeRevoked"),
    data: protobufDecoder(TenantVerifiedAttributeRevokedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("TenantVerifiedAttributeExpirationUpdated"),
    data: protobufDecoder(TenantVerifiedAttributeExpirationUpdatedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("TenantVerifiedAttributeExtensionUpdated"),
    data: protobufDecoder(TenantVerifiedAttributeExtensionUpdatedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("MaintenanceTenantDeleted"),
    data: protobufDecoder(MaintenanceTenantDeletedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("TenantKindUpdated"),
    data: protobufDecoder(TenantKindUpdatedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("MaintenanceTenantPromotedToCertifier"),
    data: protobufDecoder(MaintenanceTenantPromotedToCertifierV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("TenantDelegatedProducerFeatureAdded"),
    data: protobufDecoder(TenantDelegatedProducerFeatureAddedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("TenantDelegatedProducerFeatureRemoved"),
    data: protobufDecoder(TenantDelegatedProducerFeatureRemovedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("TenantDelegatedConsumerFeatureAdded"),
    data: protobufDecoder(TenantDelegatedConsumerFeatureAddedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("TenantDelegatedConsumerFeatureRemoved"),
    data: protobufDecoder(TenantDelegatedConsumerFeatureRemovedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
]);

export type TenantEventV2 = z.infer<typeof TenantEventV2>;
