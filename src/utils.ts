import { MessageType } from "@protobuf-ts/runtime";
import { ZodAny, ZodTransformer, z } from "zod";

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
): ZodTransformer<ZodAny, I> {
  return z
    .any()
    .transform((v) =>
      decoder.fromBinary(Buffer.from(Object.values(v) as never, "hex"))
    );
}
