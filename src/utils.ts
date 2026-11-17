import { MessageType } from "@protobuf-ts/runtime";
import { z } from "zod";

export const VersionedEvent = z.discriminatedUnion("event_version", [
  z
    .object({
      event_version: z.literal(1),
    })
    .passthrough(),
  z
    .object({
      event_version: z.literal(2),
    })
    .passthrough(),
]);

export function protobufDecoder<I extends object>(
  decoder: MessageType<I>
): z.ZodType<I> {
  return z.any().transform((v) => decoder.fromBinary(Buffer.from(v, "hex")));
}
