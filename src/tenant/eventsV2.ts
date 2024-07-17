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
} from "../gen/v2/tenant/events.js";
import { protobufDecoder } from "../protobuf.js";

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
    .exhaustive();
}

export const TenantEventV2 = z.discriminatedUnion("type", [
  z.object({
    event_version: z.literal(2),
    type: z.literal("TenantOnboarded"),
    data: protobufDecoder(TenantOnboardedV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("TenantOnboardDetailsUpdated"),
    data: protobufDecoder(TenantOnboardDetailsUpdatedV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("TenantCertifiedAttributeAssigned"),
    data: protobufDecoder(TenantCertifiedAttributeAssignedV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("TenantCertifiedAttributeRevoked"),
    data: protobufDecoder(TenantCertifiedAttributeRevokedV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("TenantDeclaredAttributeAssigned"),
    data: protobufDecoder(TenantDeclaredAttributeAssignedV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("TenantDeclaredAttributeRevoked"),
    data: protobufDecoder(TenantDeclaredAttributeRevokedV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("TenantVerifiedAttributeAssigned"),
    data: protobufDecoder(TenantVerifiedAttributeAssignedV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("TenantVerifiedAttributeRevoked"),
    data: protobufDecoder(TenantVerifiedAttributeRevokedV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("TenantVerifiedAttributeExpirationUpdated"),
    data: protobufDecoder(TenantVerifiedAttributeExpirationUpdatedV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("TenantVerifiedAttributeExtensionUpdated"),
    data: protobufDecoder(TenantVerifiedAttributeExtensionUpdatedV2),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("MaintenanceTenantDeleted"),
    data: protobufDecoder(MaintenanceTenantDeletedV2),
  }),
]);

export type TenantEventV2 = z.infer<typeof TenantEventV2>;
