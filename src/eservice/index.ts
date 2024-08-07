import { match } from "ts-pattern";
import { z } from "zod";
import { VersionedEvent } from "../utils.js";
import { EServiceEventV1, eServiceEventToBinaryDataV1 } from "./eventsV1.js";
import { EServiceEventV2, eServiceEventToBinaryDataV2 } from "./eventsV2.js";

function eServiceEventToBinaryData(event: EServiceEvent): Uint8Array {
  return match(event)
    .with({ event_version: 1 }, eServiceEventToBinaryDataV1)
    .with({ event_version: 2 }, eServiceEventToBinaryDataV2)
    .exhaustive();
}

export function encodeOutboundEServiceEvent(event: EServiceEvent): string {
  return JSON.stringify({
    event_version: event.event_version,
    type: event.type,
    data: Buffer.from(eServiceEventToBinaryData(event)).toString("hex"),
    stream_id: event.stream_id,
    version: event.version,
    timestamp: event.timestamp,
  });
}

export function decodeOutboundEServiceEvent(
  encodedEvent: string
): EServiceEvent {
  return EServiceEvent.parse(JSON.parse(encodedEvent));
}

export const EServiceEvent = VersionedEvent.transform((obj, ctx) => {
  const res = match(obj)
    .with({ event_version: 1 }, () => EServiceEventV1.safeParse(obj))
    .with({ event_version: 2 }, () => EServiceEventV2.safeParse(obj))
    .exhaustive();

  if (!res.success) {
    res.error.issues.forEach(ctx.addIssue);
    return z.NEVER;
  }
  return res.data;
});

export type EServiceEventType = EServiceEvent["type"];
export type EServiceEvent = z.infer<typeof EServiceEvent>;
export { EServiceEventV1, EServiceEventV2 };
