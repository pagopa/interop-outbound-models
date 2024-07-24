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

  // TODO: Add more tests for other event types
});
