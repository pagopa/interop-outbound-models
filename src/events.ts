/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { z } from "zod";

export const EventEnvelope = <TEventZodType extends z.ZodType>(
  event: TEventZodType
) =>
  z.intersection(
    z.object({
      sequence_num: z.number(),
      stream_id: z.string().uuid(),
      version: z.number(),
      correlation_id: z.string().nullish(),
      log_date: z.coerce.date(),
    }),
    event
  );
export type EventEnvelope<TEvent> = z.infer<
  ReturnType<typeof EventEnvelope<z.ZodType<TEvent>>>
>;

export const eventV1 = z
  .object({
    event_version: z.literal(1),
  })
  .passthrough();

export const eventV2 = z
  .object({
    event_version: z.literal(2),
  })
  .passthrough();
