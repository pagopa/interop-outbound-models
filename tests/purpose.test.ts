import { describe, it, expect } from "vitest";
import {
  encodeOutboundPurposeEvent,
  decodeOutboundPurposeEvent,
  PurposeEvent,
} from "../src/index.js";

describe("purpose", () => {
  it("should correctly encode and decode PurposeDeleted event", () => {
    const event: PurposeEvent = {
      event_version: 1,
      type: "PurposeDeleted",
      data: {
        purposeId: "123",
      },
      stream_id: "123",
      timestamp: new Date(),
      version: 1,
    };

    const encoded = encodeOutboundPurposeEvent(event);
    const decoded = decodeOutboundPurposeEvent(encoded);

    expect(decoded).toEqual(event);
  });

  it("should correctly encode and decode PurposeTitleUpdated event", () => {
    const event: PurposeEvent = {
      event_version: 2,
      type: "PurposeTitleUpdated",
      data: {
        purpose: {
          id: "purpose-id",
          eserviceId: "eservice-id",
          consumerId: "consumer-id",
          versions: [],
          title: "Updated purpose title",
          description: "Purpose description",
          createdAt: 1n,
          updatedAt: 2n,
          isFreeOfCharge: true,
        },
      },
      stream_id: "purpose-id",
      timestamp: new Date(),
      version: 1,
    };

    const encoded = encodeOutboundPurposeEvent(event);
    const decoded = decodeOutboundPurposeEvent(encoded);

    expect(decoded).toEqual(event);
  });

  it("should correctly encode and decode PurposeDescriptionUpdated event", () => {
    const event: PurposeEvent = {
      event_version: 2,
      type: "PurposeDescriptionUpdated",
      data: {
        purpose: {
          id: "purpose-id",
          eserviceId: "eservice-id",
          consumerId: "consumer-id",
          versions: [],
          title: "Purpose title",
          description: "Updated purpose description",
          createdAt: 1n,
          updatedAt: 2n,
          isFreeOfCharge: true,
        },
      },
      stream_id: "purpose-id",
      timestamp: new Date(),
      version: 1,
    };

    const encoded = encodeOutboundPurposeEvent(event);
    const decoded = decodeOutboundPurposeEvent(encoded);

    expect(decoded).toEqual(event);
  });
});
