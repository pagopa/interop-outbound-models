import { describe, it, expect } from "vitest";
import {
  encodeOutboundDelegationEvent,
  decodeOutboundDelegationEvent,
  DelegationEvent,
} from "../src/index.js";

describe("delegation", () => {
  it("should correctly encode and decode DelegationApproved event", () => {
    const event: DelegationEvent = {
      event_version: 2,
      type: "DelegationApproved",
      data: {
        delegation: undefined,
      },
      stream_id: "123",
      timestamp: new Date(),
      version: 1,
    };

    const encoded = encodeOutboundDelegationEvent(event);
    const decoded = decodeOutboundDelegationEvent(encoded);

    expect(decoded).toEqual(event);
  });
});
