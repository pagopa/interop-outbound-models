import { describe, it, expect } from "vitest";
import {
  encodeOutboundPurposeTemplateEvent,
  decodeOutboundPurposeTemplateEvent,
  PurposeTemplateEvent,
  PurposeTemplateStateV2,
  TargetTenantKindV2,
  EServiceTemplateVersionStateV2,
  EServiceModeV2,
  EServiceTechnologyV2,
  AgreementApprovalPolicyV2,
} from "../src/index.js";

const purposeTemplate = {
  id: "purpose-template-id",
  targetDescription: "Target description",
  targetTenantKind: TargetTenantKindV2.PA,
  creatorId: "creator-123",
  state: PurposeTemplateStateV2.PUBLISHED,
  createdAt: 1n,
  purposeTitle: "Purpose title",
  purposeDescription: "Purpose description",
  purposeIsFreeOfCharge: true,
  handlesPersonalData: false,
};

const eserviceTemplate = {
  id: "eservice-template-id",
  creatorId: "creator-123",
  name: "Test Template",
  intendedTarget: "Test Target Audience",
  description: "Test template description",
  technology: EServiceTechnologyV2.REST,
  mode: EServiceModeV2.DELIVER,
  createdAt: 1n,
  versions: [
    {
      id: "version-id",
      version: 1n,
      docs: [],
      state: EServiceTemplateVersionStateV2.PUBLISHED,
      voucherLifespan: 60,
      dailyCallsPerConsumer: 10,
      dailyCallsTotal: 1000,
      createdAt: 1n,
      agreementApprovalPolicy: AgreementApprovalPolicyV2.AUTOMATIC,
      attributes: {
        certified: [],
        verified: [],
        declared: [],
      },
    },
  ],
};

describe("purpose-template", () => {
  it("should correctly encode and decode PurposeTemplateEServiceTemplateLinked event", () => {
    const event: PurposeTemplateEvent = {
      event_version: 2,
      type: "PurposeTemplateEServiceTemplateLinked",
      data: {
        purposeTemplate,
        eserviceTemplate,
        eserviceTemplateVersionId: "version-id",
        createdAt: 1n,
      },
      stream_id: "123",
      timestamp: "2026-05-20T12:00:00.000Z",
      version: 1,
    };

    const encoded = encodeOutboundPurposeTemplateEvent(event);
    const decoded = decodeOutboundPurposeTemplateEvent(encoded);

    expect(decoded).toEqual(event);
  });

  it("should correctly encode and decode PurposeTemplateEServiceTemplateUnlinked event", () => {
    const event: PurposeTemplateEvent = {
      event_version: 2,
      type: "PurposeTemplateEServiceTemplateUnlinked",
      data: {
        purposeTemplate,
        eserviceTemplate,
        eserviceTemplateVersionId: "version-id",
      },
      stream_id: "123",
      timestamp: "2026-05-20T12:00:00.000Z",
      version: 1,
    };

    const encoded = encodeOutboundPurposeTemplateEvent(event);
    const decoded = decodeOutboundPurposeTemplateEvent(encoded);

    expect(decoded).toEqual(event);
  });
});
