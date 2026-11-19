/* eslint-disable prettier/prettier */
import { describe, it, expect } from "vitest";
import { BinaryWriter, WireType } from "@protobuf-ts/runtime";
import {
  encodeOutboundEServiceEvent,
  decodeOutboundEServiceEvent,
  EServiceEvent,
  EServiceModeV2,
  EServiceTechnologyV2,
  EServiceDescriptorStateV2,
  AgreementApprovalPolicyV2,
  AttributeCertifiedDiscreteComparatorV2,
  GracePeriodDaysV2,
  EServiceTemplateVersionRefV2,
  EServiceV2,
  TemplateInstanceInterfaceMetadataV2,
} from "../src/index.js";

const buildTemplateInstanceEService = (
  templateVersionRef: EServiceTemplateVersionRefV2
): EServiceV2 => ({
  id: "eservice-id",
  createdAt: 1n,
  producerId: "producer-id",
  mode: EServiceModeV2.DELIVER,
  description: "eservice description",
  name: "eservice name",
  technology: EServiceTechnologyV2.REST,
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
      publishedAt: 2n,
      serverUrls: ["pagopa.it"],
      agreementApprovalPolicy: AgreementApprovalPolicyV2.AUTOMATIC,
      attributes: {
        certified: [],
        verified: [],
        declared: [],
      },
      rejectionReasons: [],
      templateVersionRef,
      delegatedArchivingRequest: [],
    },
  ],
  delegatedArchivingRequest: [],
});

describe("eservice", () => {
  it("should correctly encode and decode EServiceDescriptorArchived event", () => {
    const event: EServiceEvent = {
      event_version: 2,
      type: "EServiceDescriptorArchived",
      data: {
        descriptorId: "testtea",
        eservice: {
          id: "test",
          createdAt: 1n,
          producerId: "test",
          mode: EServiceModeV2.DELIVER,
          description: "testtest",
          name: "test",
          technology: EServiceTechnologyV2.REST,
          descriptors: [
            {
              id: "id",
              version: 1n,
              docs: [],
              state: EServiceDescriptorStateV2.DRAFT,
              audience: [],
              voucherLifespan: 60,
              dailyCallsPerConsumer: 10,
              dailyCallsTotal: 1000,
              createdAt: 1n,
              serverUrls: ["pagopa.it"],
              agreementApprovalPolicy: AgreementApprovalPolicyV2.AUTOMATIC,
              attributes: {
                certified: [
                  {
                    values: [
                      {
                        id: "test",
                        explicitAttributeVerification: true,
                        dailyCallsPerConsumer: 10,
                        discreteConfig: {
                          threshold: 50,
                          comparator:
                            AttributeCertifiedDiscreteComparatorV2.GTE,
                        },
                      },
                    ],
                  },
                ],
                verified: [],
                declared: [],
              },
              rejectionReasons: [],
              delegatedArchivingRequest: []
            },
          ],
          delegatedArchivingRequest: []
        },
      },
      stream_id: "123",
      timestamp: new Date(),
      version: 1,
    };

    const encoded = encodeOutboundEServiceEvent(event);
    const decoded = decodeOutboundEServiceEvent(encoded);

    expect(decoded).toEqual(event);
  });

  it("should correctly encode and decode EServiceDescriptorAsyncExchangeCallbackInterfaceAdded event with all async exchange fields populated", () => {
    const event: EServiceEvent = {
      event_version: 2,
      type: "EServiceDescriptorAsyncExchangeCallbackInterfaceAdded",
      data: {
        descriptorId: "descriptor-id",
        documentId: "callback-doc-id",
        eservice: {
          id: "eservice-id",
          createdAt: 1n,
          producerId: "producer-id",
          mode: EServiceModeV2.DELIVER,
          description: "eservice description",
          name: "eservice name",
          technology: EServiceTechnologyV2.REST,
          asyncExchange: true,
          descriptors: [
            {
              id: "descriptor-id",
              version: 1n,
              docs: [],
              state: EServiceDescriptorStateV2.DRAFT,
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
              asyncExchangeCallbackInterface: {
                id: "callback-doc-id",
                name: "callback.yaml",
                contentType: "application/yaml",
                checksum: "abc123",
                uploadDate: "2025-01-01T00:00:00Z",
                prettyName: "Callback Interface",
              },
              asyncExchangeProperties: {
                responseTime: 5000,
                resourceAvailableTime: 60000,
                confirmation: true,
                bulk: false,
                maxResultSet: 100,
              },
              delegatedArchivingRequest: []
            },
          ],
          delegatedArchivingRequest: []
        },
      },
      stream_id: "123",
      timestamp: new Date(),
      version: 1,
    };

    const encoded = encodeOutboundEServiceEvent(event);
    const decoded = decodeOutboundEServiceEvent(encoded);

    expect(decoded).toEqual(event);
  });

  it("should correctly encode and decode EServiceDescriptorAsyncExchangeCallbackInterfaceUpdated event", () => {
    const event: EServiceEvent = {
      event_version: 2,
      type: "EServiceDescriptorAsyncExchangeCallbackInterfaceUpdated",
      data: {
        descriptorId: "descriptor-id",
        documentId: "callback-doc-id",
        eservice: {
          id: "eservice-id",
          createdAt: 1n,
          producerId: "producer-id",
          mode: EServiceModeV2.DELIVER,
          description: "eservice description",
          name: "eservice name",
          technology: EServiceTechnologyV2.REST,
          descriptors: [
            {
              id: "descriptor-id",
              version: 1n,
              docs: [],
              state: EServiceDescriptorStateV2.DRAFT,
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
              delegatedArchivingRequest: []
            },
          ],
          delegatedArchivingRequest: []
        },
      },
      stream_id: "123",
      timestamp: new Date(),
      version: 1,
    };

    const encoded = encodeOutboundEServiceEvent(event);
    const decoded = decodeOutboundEServiceEvent(encoded);

    expect(decoded).toEqual(event);
  });

  it("should correctly encode and decode EServiceDescriptorAsyncExchangeCallbackInterfaceDeleted event", () => {
    const event: EServiceEvent = {
      event_version: 2,
      type: "EServiceDescriptorAsyncExchangeCallbackInterfaceDeleted",
      data: {
        descriptorId: "descriptor-id",
        documentId: "callback-doc-id",
        eservice: {
          id: "eservice-id",
          createdAt: 1n,
          producerId: "producer-id",
          mode: EServiceModeV2.DELIVER,
          description: "eservice description",
          name: "eservice name",
          technology: EServiceTechnologyV2.REST,
          descriptors: [
            {
              id: "descriptor-id",
              version: 1n,
              docs: [],
              state: EServiceDescriptorStateV2.DRAFT,
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
              delegatedArchivingRequest: []
            },
          ],
          delegatedArchivingRequest: []
        },
      },
      stream_id: "123",
      timestamp: new Date(),
      version: 1,
    };

    const encoded = encodeOutboundEServiceEvent(event);
    const decoded = decodeOutboundEServiceEvent(encoded);

    expect(decoded).toEqual(event);
  });

  it("should correctly round-trip EServiceDescriptorAttributeDailyCallsPerConsumerUpdated event with dailyCallsPerConsumer", () => {
    const event: EServiceEvent = {
      event_version: 2,
      type: "EServiceDescriptorAttributeDailyCallsPerConsumerUpdated",
      data: {
        descriptorId: "descriptor-id",
        attributeId: "attribute-id",
        dailyCallsPerConsumer: 25,
        eservice: {
          id: "eservice-id",
          createdAt: 1n,
          producerId: "producer-id",
          mode: EServiceModeV2.DELIVER,
          description: "test description",
          name: "test eservice",
          technology: EServiceTechnologyV2.REST,
          descriptors: [
            {
              id: "descriptor-id",
              version: 1n,
              docs: [],
              state: EServiceDescriptorStateV2.DRAFT,
              audience: [],
              voucherLifespan: 60,
              dailyCallsPerConsumer: 10,
              dailyCallsTotal: 1000,
              createdAt: 1n,
              serverUrls: ["pagopa.it"],
              agreementApprovalPolicy: AgreementApprovalPolicyV2.AUTOMATIC,
              attributes: {
                certified: [
                  {
                    values: [
                      {
                        id: "attribute-id",
                        explicitAttributeVerification: true,
                        dailyCallsPerConsumer: 25,
                      },
                    ],
                  },
                ],
                verified: [],
                declared: [],
              },
              rejectionReasons: [],
              delegatedArchivingRequest: []
            },
          ],
          delegatedArchivingRequest: []
        },
      },
      stream_id: "stream-id",
      timestamp: new Date(),
      version: 2,
    };

    const encoded = encodeOutboundEServiceEvent(event);
    const decoded = decodeOutboundEServiceEvent(encoded);

    expect(decoded).toEqual(event);
  });

  it("should correctly encode and decode EServiceArchivingRequestedByDelegate event", () => {
    const event: EServiceEvent = {
      event_version: 2,
      type: "EServiceArchivingRequestedByDelegate",
      data: {
        eservice: {
          id: "test",
          createdAt: 1n,
          producerId: "test",
          mode: EServiceModeV2.DELIVER,
          description: "testtest",
          name: "test",
          technology: EServiceTechnologyV2.REST,
          descriptors: [
            {
              id: "id",
              version: 1n,
              docs: [],
              state: EServiceDescriptorStateV2.DRAFT,
              audience: [],
              voucherLifespan: 60,
              dailyCallsPerConsumer: 10,
              dailyCallsTotal: 1000,
              createdAt: 1n,
              serverUrls: ["pagopa.it"],
              agreementApprovalPolicy: AgreementApprovalPolicyV2.AUTOMATIC,
              attributes: {
                certified: [
                  {
                    values: [
                      {
                        id: "test",
                        explicitAttributeVerification: true,
                        dailyCallsPerConsumer: 10,
                        discreteConfig: {
                          threshold: 50,
                          comparator:
                            AttributeCertifiedDiscreteComparatorV2.GTE,
                        },
                      },
                    ],
                  },
                ],
                verified: [],
                declared: [],
              },
              rejectionReasons: [],
              delegatedArchivingRequest: []
            },
          ],
          delegatedArchivingRequest: [{
            requestedAt: 0n,
            requesterId: "",
            gracePeriodDays: GracePeriodDaysV2.GRACE_PERIOD_90_DAYS,
            archivingReason: "Archiving reason",
          }]
        },
      },
      stream_id: "123",
      timestamp: new Date(),
      version: 1,
    };

    const encoded = encodeOutboundEServiceEvent(event);
    const decoded = decodeOutboundEServiceEvent(encoded);

    expect(decoded).toEqual(event);
  });

   it("should correctly encode and decode EServiceDescriptorArchivingRequestedByDelegate event", () => {
    const event: EServiceEvent = {
      event_version: 2,
      type: "EServiceDescriptorArchivingRequestedByDelegate",
      data: {
        descriptorId: "descriptor-id",
        eservice: {
          id: "test",
          createdAt: 1n,
          producerId: "test",
          mode: EServiceModeV2.DELIVER,
          description: "testtest",
          name: "test",
          technology: EServiceTechnologyV2.REST,
          descriptors: [
            {
              id: "id",
              version: 1n,
              docs: [],
              state: EServiceDescriptorStateV2.DRAFT,
              audience: [],
              voucherLifespan: 60,
              dailyCallsPerConsumer: 10,
              dailyCallsTotal: 1000,
              createdAt: 1n,
              serverUrls: ["pagopa.it"],
              agreementApprovalPolicy: AgreementApprovalPolicyV2.AUTOMATIC,
              attributes: {
                certified: [
                  {
                    values: [
                      {
                        id: "test",
                        explicitAttributeVerification: true,
                        dailyCallsPerConsumer: 10,
                        discreteConfig: {
                          threshold: 50,
                          comparator:
                            AttributeCertifiedDiscreteComparatorV2.GTE,
                        },
                      },
                    ],
                  },
                ],
                verified: [],
                declared: [],
              },
              rejectionReasons: [],
              delegatedArchivingRequest: [{
            requestedAt: 0n,
            requesterId: "",
            gracePeriodDays: GracePeriodDaysV2.GRACE_PERIOD_90_DAYS,
          }]
            },
          ],
          delegatedArchivingRequest: []
        },
      },
      stream_id: "123",
      timestamp: new Date(),
      version: 1,
    };

    const encoded = encodeOutboundEServiceEvent(event);
    const decoded = decodeOutboundEServiceEvent(encoded);

    expect(decoded).toEqual(event);
  });

  it("should correctly encode and decode EServiceArchivingRequestCanceledByRevokedDelegation event", () => {
    const event: EServiceEvent = {
      event_version: 2,
      type: "EServiceArchivingRequestCanceledByRevokedDelegation",
      data: {
        eservice: {
          id: "test",
          createdAt: 1n,
          producerId: "test",
          mode: EServiceModeV2.DELIVER,
          description: "testtest",
          name: "test",
          technology: EServiceTechnologyV2.REST,
          descriptors: [
            {
              id: "id",
              version: 1n,
              docs: [],
              state: EServiceDescriptorStateV2.DRAFT,
              audience: [],
              voucherLifespan: 60,
              dailyCallsPerConsumer: 10,
              dailyCallsTotal: 1000,
              createdAt: 1n,
              serverUrls: ["pagopa.it"],
              agreementApprovalPolicy: AgreementApprovalPolicyV2.AUTOMATIC,
              attributes: {
                certified: [
                  {
                    values: [
                      {
                        id: "test",
                        explicitAttributeVerification: true,
                        dailyCallsPerConsumer: 10,
                        discreteConfig: {
                          threshold: 50,
                          comparator:
                            AttributeCertifiedDiscreteComparatorV2.GTE,
                        },
                      },
                    ],
                  },
                ],
                verified: [],
                declared: [],
              },
              rejectionReasons: [],
              delegatedArchivingRequest: []
            },
          ],
          delegatedArchivingRequest: []
        },
      },
      stream_id: "123",
      timestamp: new Date(),
      version: 1,
    };

    const encoded = encodeOutboundEServiceEvent(event);
    const decoded = decodeOutboundEServiceEvent(encoded);

    expect(decoded).toEqual(event);
  });

  it("should correctly encode and decode EServiceDescriptorArchivingRequestCanceledByRevokedDelegation event", () => {
    const event: EServiceEvent = {
      event_version: 2,
      type: "EServiceDescriptorArchivingRequestCanceledByRevokedDelegation",
      data: {
        descriptorId: "descriptor-id",
        eservice: {
          id: "test",
          createdAt: 1n,
          producerId: "test",
          mode: EServiceModeV2.DELIVER,
          description: "testtest",
          name: "test",
          technology: EServiceTechnologyV2.REST,
          descriptors: [
            {
              id: "id",
              version: 1n,
              docs: [],
              state: EServiceDescriptorStateV2.DRAFT,
              audience: [],
              voucherLifespan: 60,
              dailyCallsPerConsumer: 10,
              dailyCallsTotal: 1000,
              createdAt: 1n,
              serverUrls: ["pagopa.it"],
              agreementApprovalPolicy: AgreementApprovalPolicyV2.AUTOMATIC,
              attributes: {
                certified: [
                  {
                    values: [
                      {
                        id: "test",
                        explicitAttributeVerification: true,
                        dailyCallsPerConsumer: 10,
                        discreteConfig: {
                          threshold: 50,
                          comparator:
                            AttributeCertifiedDiscreteComparatorV2.GTE,
                        },
                      },
                    ],
                  },
                ],
                verified: [],
                declared: [],
              },
              rejectionReasons: [],
              delegatedArchivingRequest: []
            },
          ],
          delegatedArchivingRequest: []
        },
      },
      stream_id: "123",
      timestamp: new Date(),
      version: 1,
    };

    const encoded = encodeOutboundEServiceEvent(event);
    const decoded = decodeOutboundEServiceEvent(encoded);

    expect(decoded).toEqual(event);
  });

  it("should correctly encode and decode EServiceDescriptorPublished event with template interface metadata", () => {
    const event: EServiceEvent = {
      event_version: 2,
      type: "EServiceDescriptorPublished",
      data: {
        descriptorId: "descriptor-id",
        eservice: buildTemplateInstanceEService({
          id: "eservice-template-version-id",
          interfaceMetadata: {
            contactUrl: "https://contact.example.com",
            termsAndConditionsUrl: "https://terms.example.com",
          },
        }),
      },
      stream_id: "123",
      timestamp: new Date(),
      version: 1,
    };

    const encoded = encodeOutboundEServiceEvent(event);
    const decoded = decodeOutboundEServiceEvent(encoded);

    expect(decoded).toEqual(event);
  });

  it("should correctly encode and decode EServiceDescriptorPublished event with template version ref without interface metadata", () => {
    const event: EServiceEvent = {
      event_version: 2,
      type: "EServiceDescriptorPublished",
      data: {
        descriptorId: "descriptor-id",
        eservice: buildTemplateInstanceEService({
          id: "eservice-template-version-id",
        }),
      },
      stream_id: "123",
      timestamp: new Date(),
      version: 1,
    };

    const encoded = encodeOutboundEServiceEvent(event);
    const decoded = decodeOutboundEServiceEvent(encoded);

    expect(decoded).toEqual(event);
  });

  it("should decode template interface metadata written with the legacy contact fields keeping only the remaining fields", () => {
    const legacyBytes = new BinaryWriter()
      .tag(1, WireType.LengthDelimited)
      .string("Legacy contact name")
      .tag(2, WireType.LengthDelimited)
      .string("legacy.contact@example.com")
      .tag(3, WireType.LengthDelimited)
      .string("https://contact.example.com")
      .tag(4, WireType.LengthDelimited)
      .string("https://terms.example.com")
      .finish();

    const decoded = TemplateInstanceInterfaceMetadataV2.fromBinary(legacyBytes);

    expect(decoded.contactUrl).toBe("https://contact.example.com");
    expect(decoded.termsAndConditionsUrl).toBe("https://terms.example.com");
    expect(decoded).not.toHaveProperty("contactName");
    expect(decoded).not.toHaveProperty("contactEmail");
  });

  // TODO: Add more tests for other event types
});
