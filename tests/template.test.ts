import { describe, it, expect } from "vitest";
import {
  encodeOutboundEServiceTemplateEvent,
  decodeOutboundEServiceTemplateEvent,
  EServiceTemplateEvent,
  EServiceTemplateVersionStateV2,
  EServiceModeV2,
  EServiceTechnologyV2,
  AgreementApprovalPolicyV2,
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

  // TODO: Add more tests for other event types
});
