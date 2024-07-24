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

  // TODO: Add more tests for other event types
});
