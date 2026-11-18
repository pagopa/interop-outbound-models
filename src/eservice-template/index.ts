import { match } from "ts-pattern";
import { z } from "zod";
import { VersionedEvent } from "../utils.js";
import {
  EServiceTemplateEventV2,
  eserviceTemplateEventToBinaryDataV2,
} from "./eventsV2.js";

function eserviceTemplateEventToBinaryData(
  event: EServiceTemplateEvent
): Uint8Array {
  return match(event)
    .with({ event_version: 2 }, eserviceTemplateEventToBinaryDataV2)
    .exhaustive();
}

export function encodeOutboundEServiceTemplateEvent(
  event: EServiceTemplateEvent
): string {
  return JSON.stringify({
    event_version: event.event_version,
    type: event.type,
    data: Buffer.from(eserviceTemplateEventToBinaryData(event)).toString("hex"),
    stream_id: event.stream_id,
    version: event.version,
    timestamp: event.timestamp,
  });
}

export function decodeOutboundEServiceTemplateEvent(
  encodedEvent: string
): EServiceTemplateEvent {
  return EServiceTemplateEvent.parse(JSON.parse(encodedEvent));
}

export const EServiceTemplateEvent = z.preprocess((obj) => {
  if (VersionedEvent.safeParse(obj).data?.event_version === 1) {
    throw new Error("Unsupported event version");
  }
  return obj;
}, EServiceTemplateEventV2);

export type EServiceTemplateEventType = EServiceTemplateEvent["type"];
export type EServiceTemplateEvent = z.infer<typeof EServiceTemplateEvent>;
export { EServiceTemplateEventV2 };
