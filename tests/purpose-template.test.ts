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
  EServiceDescriptorStateV2,
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

const templateInstanceEService = {
  id: "eservice-id",
  producerId: "producer-123",
  name: "Test EService",
  description: "Test eservice description",
  technology: EServiceTechnologyV2.REST,
  mode: EServiceModeV2.DELIVER,
  createdAt: 1n,
  templateId: "eservice-template-id",
  descriptors: [
    {
      id: "descriptor-id",
      version: 1n,
      docs: [],
      state: EServiceDescriptorStateV2.PUBLISHED,
      audience: [],
      voucherLifespan: 60,
      dailyCallsPerConsumer: 10,
      dailyCallsTotal: 1000,
      createdAt: 1n,
      serverUrls: ["pagopa.it"],
      agreementApprovalPolicy: AgreementApprovalPolicyV2.AUTOMATIC,
      attributes: {
        certified: [],
        verified: [],
        declared: [],
      },
      rejectionReasons: [],
      templateVersionRef: {
        id: "version-id",
        interfaceMetadata: {
          contactUrl: "https://contact.example.com",
          termsAndConditionsUrl: "https://terms.example.com",
        },
      },
      delegatedArchivingRequest: [],
    },
  ],
  delegatedArchivingRequest: [],
};

describe("purpose-template", () => {
  it("should correctly encode and decode PurposeTemplateEServiceLinked event with template interface metadata", () => {
    const event: PurposeTemplateEvent = {
      event_version: 2,
      type: "PurposeTemplateEServiceLinked",
      data: {
        purposeTemplate,
        eservice: templateInstanceEService,
        descriptorId: "descriptor-id",
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

  it("should correctly encode and decode PurposeTemplatePurposeTitleUpdated event", () => {
    const event: PurposeTemplateEvent = {
      event_version: 2,
      type: "PurposeTemplatePurposeTitleUpdated",
      data: {
        purposeTemplate: {
          ...purposeTemplate,
          purposeTitle: "Updated purpose title",
          updatedAt: 2n,
        },
      },
      stream_id: "123",
      timestamp: "2026-05-20T12:00:00.000Z",
      version: 1,
    };

    const encoded = encodeOutboundPurposeTemplateEvent(event);
    const decoded = decodeOutboundPurposeTemplateEvent(encoded);

    expect(decoded).toEqual(event);
  });

  it("should correctly encode and decode PurposeTemplatePurposeDescriptionUpdated event", () => {
    const event: PurposeTemplateEvent = {
      event_version: 2,
      type: "PurposeTemplatePurposeDescriptionUpdated",
      data: {
        purposeTemplate: {
          ...purposeTemplate,
          purposeDescription: "Updated purpose description",
          updatedAt: 2n,
        },
      },
      stream_id: "123",
      timestamp: "2026-05-20T12:00:00.000Z",
      version: 1,
    };

    const encoded = encodeOutboundPurposeTemplateEvent(event);
    const decoded = decodeOutboundPurposeTemplateEvent(encoded);

    expect(decoded).toEqual(event);
  });

  it("should correctly encode and decode PurposeTemplateTargetDescriptionUpdated event", () => {
    const event: PurposeTemplateEvent = {
      event_version: 2,
      type: "PurposeTemplateTargetDescriptionUpdated",
      data: {
        purposeTemplate: {
          ...purposeTemplate,
          targetDescription: "Updated target description",
          updatedAt: 2n,
        },
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
