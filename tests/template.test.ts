/* eslint-disable prettier/prettier */
import { describe, it, expect } from "vitest";
import {
  encodeOutboundEServiceTemplateEvent,
  decodeOutboundEServiceTemplateEvent,
  EServiceTemplateEvent,
  EServiceTemplateVersionStateV2,
  EServiceModeV2,
  EServiceTechnologyV2,
  AgreementApprovalPolicyV2,
  AttributeCertifiedDiscreteComparatorV2,
} from "../src/index.js";

describe("eservice-template", () => {
  it("should correctly encode and decode EServiceTemplateAdded event", () => {
    const event: EServiceTemplateEvent = {
      event_version: 2,
      type: "EServiceTemplateAdded",
      data: {
        eserviceTemplate: {
          id: "test-template-id",
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
              state: EServiceTemplateVersionStateV2.DRAFT,
              voucherLifespan: 60,
              dailyCallsPerConsumer: 10,
              dailyCallsTotal: 1000,
              createdAt: 1n,
              agreementApprovalPolicy: AgreementApprovalPolicyV2.AUTOMATIC,
              attributes: {
                certified: [
                  {
                    values: [
                      {
                        id: "attr-id",
                        explicitAttributeVerification: false,
                        discreteConfig: {
                          threshold: 75,
                          comparator:
                            AttributeCertifiedDiscreteComparatorV2.LTE,
                        },
                      },
                    ],
                  },
                ],
                verified: [],
                declared: [],
              },
            },
          ],
        },
      },
      stream_id: "123",
      timestamp: new Date(),
      version: 1,
    };

    const encoded = encodeOutboundEServiceTemplateEvent(event);
    const decoded = decodeOutboundEServiceTemplateEvent(encoded);

    expect(decoded).toEqual(event);
  });

  it("should correctly encode and decode EServiceTemplateVersionAsyncExchangeCallbackInterfaceAdded event with all async exchange fields populated", () => {
    const event: EServiceTemplateEvent = {
      event_version: 2,
      type: "EServiceTemplateVersionAsyncExchangeCallbackInterfaceAdded",
      data: {
        eserviceTemplateVersionId: "version-id",
        documentId: "callback-doc-id",
        eserviceTemplate: {
          id: "template-id",
          creatorId: "creator-123",
          name: "Test Template",
          intendedTarget: "Test Target Audience",
          description: "Test template description",
          technology: EServiceTechnologyV2.REST,
          mode: EServiceModeV2.DELIVER,
          createdAt: 1n,
          asyncExchange: true,
          versions: [
            {
              id: "version-id",
              version: 1n,
              docs: [],
              state: EServiceTemplateVersionStateV2.DRAFT,
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
            },
          ],
        },
      },
      stream_id: "123",
      timestamp: new Date(),
      version: 1,
    };

    const encoded = encodeOutboundEServiceTemplateEvent(event);
    const decoded = decodeOutboundEServiceTemplateEvent(encoded);

    expect(decoded).toEqual(event);
  });

  it("should correctly encode and decode EServiceTemplateVersionAsyncExchangeCallbackInterfaceUpdated event", () => {
    const event: EServiceTemplateEvent = {
      event_version: 2,
      type: "EServiceTemplateVersionAsyncExchangeCallbackInterfaceUpdated",
      data: {
        eserviceTemplateVersionId: "version-id",
        documentId: "callback-doc-id",
        eserviceTemplate: {
          id: "template-id",
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
              state: EServiceTemplateVersionStateV2.DRAFT,
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
        },
      },
      stream_id: "123",
      timestamp: new Date(),
      version: 1,
    };

    const encoded = encodeOutboundEServiceTemplateEvent(event);
    const decoded = decodeOutboundEServiceTemplateEvent(encoded);

    expect(decoded).toEqual(event);
  });

  it("should correctly encode and decode EServiceTemplateVersionAsyncExchangeCallbackInterfaceDeleted event", () => {
    const event: EServiceTemplateEvent = {
      event_version: 2,
      type: "EServiceTemplateVersionAsyncExchangeCallbackInterfaceDeleted",
      data: {
        eserviceTemplateVersionId: "version-id",
        documentId: "callback-doc-id",
        eserviceTemplate: {
          id: "template-id",
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
              state: EServiceTemplateVersionStateV2.DRAFT,
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
        },
      },
      stream_id: "123",
      timestamp: new Date(),
      version: 1,
    };

    const encoded = encodeOutboundEServiceTemplateEvent(event);
    const decoded = decodeOutboundEServiceTemplateEvent(encoded);

    expect(decoded).toEqual(event);
  });

  // TODO: Add more tests for other event types
});
