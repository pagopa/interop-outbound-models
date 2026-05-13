import { describe, it, expect } from "vitest";
import {
  encodeOutboundTenantEvent,
  decodeOutboundTenantEvent,
  TenantEvent,
  TenantKindV2,
} from "../src/index.js";

describe("tenant", () => {
  it("should correctly encode and decode TenantDeleted event", () => {
    const event: TenantEvent = {
      event_version: 1,
      type: "TenantDeleted",
      data: {
        tenantId: "123",
      },
      stream_id: "123",
      timestamp: new Date(),
      version: 1,
    };

    const encoded = encodeOutboundTenantEvent(event);
    const decoded = decodeOutboundTenantEvent(encoded);

    expect(decoded).toEqual(event);
  });

  it("should correctly encode and decode TenantOnboarded event with remote ids and certified discrete attributes", () => {
    const event: TenantEvent = {
      event_version: 2,
      type: "TenantOnboarded",
      data: {
        tenant: {
          id: "tenant-id",
          selfcareId: "selfcare-id",
          externalId: {
            origin: "IPA",
            value: "tenant-code",
          },
          features: [],
          attributes: [
            {
              sealedValue: {
                oneofKind: "certifiedDiscreteAttribute",
                certifiedDiscreteAttribute: {
                  id: "attribute-id",
                  assignmentTimestamp: 1n,
                  discreteValue: 42,
                },
              },
            },
          ],
          createdAt: 1n,
          name: "Tenant name",
          kind: TenantKindV2.PA,
          onboardedAt: 1n,
          remoteIds: [
            {
              origin: "ANAC",
              value: "remote-code",
              assignmentTimestamp: 1n,
            },
          ],
        },
      },
      stream_id: "tenant-stream",
      timestamp: new Date(),
      version: 1,
    };

    const encoded = encodeOutboundTenantEvent(event);
    const decoded = decodeOutboundTenantEvent(encoded);

    expect(decoded).toEqual(event);
  });
});
