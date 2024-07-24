import { describe, it, expect } from "vitest";
import {
  encodeOutboundEServiceEvent,
  decodeOutboundEServiceEvent,
  EServiceEvent,
} from "../src/index.js";

describe("eservice", () => {
  it("should correctly encode and decode EServiceDeleted event", () => {
    const event: EServiceEvent = {
      event_version: 1,
      type: "EServiceDeleted",
      data: {
        eserviceId: "123",
      },
      stream_id: "123",
      timestamp: new Date(),
      version: 1,
    };

    const encoded = encodeOutboundEServiceEvent(event);
    const decoded = decodeOutboundEServiceEvent(encoded);

    expect(decoded).toEqual(event);
  });

  // TODO: Add more tests for other event types
});
