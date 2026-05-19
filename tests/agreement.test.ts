import { describe, it, expect } from "vitest";
import {
  encodeOutboundAgreementEvent,
  decodeOutboundAgreementEvent,
  AgreementEvent,
} from "../src/index.js";

describe("agreement", () => {
  it("should correctly encode and decode AgreementDeleted event", () => {
    const event: AgreementEvent = {
      event_version: 1,
      type: "AgreementDeleted",
      data: {
        agreementId: "123",
      },
      stream_id: "123",
      timestamp: new Date(),
      version: 1,
    };

    const encoded = encodeOutboundAgreementEvent(event);
    const decoded = decodeOutboundAgreementEvent(encoded);

    expect(decoded).toEqual(event);
  });

  it("should correctly encode and decode AgreementAdded V1 event with certified discrete attributes", () => {
    const event: AgreementEvent = {
      event_version: 1,
      type: "AgreementAdded",
      data: {
        agreement: {
          id: "agreement-id",
          eserviceId: "eservice-id",
          descriptorId: "descriptor-id",
          producerId: "producer-id",
          consumerId: "consumer-id",
          state: 1,
          verifiedAttributes: [],
          certifiedAttributes: [{ id: "certified-id" }],
          declaredAttributes: [],
          consumerDocuments: [],
          createdAt: 1n,
          certifiedDiscreteAttributes: [{ id: "certified-discrete-id" }],
        },
      },
      stream_id: "agreement-stream",
      timestamp: new Date(),
      version: 1,
    };

    const encoded = encodeOutboundAgreementEvent(event);
    const decoded = decodeOutboundAgreementEvent(encoded);

    expect(decoded).toEqual(event);
  });

  it("should correctly encode and decode AgreementAdded V2 event with certified discrete attributes", () => {
    const event: AgreementEvent = {
      event_version: 2,
      type: "AgreementAdded",
      data: {
        agreement: {
          id: "agreement-id",
          eserviceId: "eservice-id",
          descriptorId: "descriptor-id",
          producerId: "producer-id",
          consumerId: "consumer-id",
          state: 1,
          verifiedAttributes: [],
          certifiedAttributes: [{ id: "certified-id" }],
          declaredAttributes: [],
          consumerDocuments: [],
          createdAt: 1n,
          certifiedDiscreteAttributes: [{ id: "certified-discrete-id" }],
        },
      },
      stream_id: "agreement-stream",
      timestamp: new Date(),
      version: 1,
    };

    const encoded = encodeOutboundAgreementEvent(event);
    const decoded = decodeOutboundAgreementEvent(encoded);

    expect(decoded).toEqual(event);
  });
});
