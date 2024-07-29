import { describe, it, expect } from "vitest";
import {
  encodeOutboundTenantEvent,
  decodeOutboundTenantEvent,
  TenantEvent,
} from "../src/index.js";

describe("tenant", () => {
  it("should correctly encode and decode TenantDeleted event", () => {
    const event: TenantEvent = {
      event_version: 1,
      type: "TenantDeleted",
      data: {
        tenantId: "123",
      },
      stream_id: "123",
      timestamp: new Date(),
      version: 1,
    };

    const encoded = encodeOutboundTenantEvent(event);
    const decoded = decodeOutboundTenantEvent(encoded);

    expect(decoded).toEqual(event);
  });

  // TODO: Add more tests for other event types
});
