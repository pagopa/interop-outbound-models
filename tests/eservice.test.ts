import { describe, it, expect } from "vitest";
import {
  encodeOutboundEServiceEvent,
  decodeOutboundEServiceEvent,
  EServiceModeV2,
  EServiceTechnologyV2,
  EServiceDescriptorStateV2,
  AgreementApprovalPolicyV2,
} from "../src/index.js";
import type { EServiceEvent } from "../src/index.js";

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
                      },
                    ],
                  },
                ],
                verified: [],
                declared: [],
              },
              rejectionReasons: [],
            },
          ],
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
            },
          ],
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

  // TODO: Add more tests for other event types
});
