import { z } from "zod";
import { match } from "ts-pattern";
import {
  ProducerDelegationSubmittedV2,
  ProducerDelegationApprovedV2,
  ProducerDelegationRejectedV2,
  ProducerDelegationRevokedV2,
} from "../gen/v2/delegation/events.js";
import { protobufDecoder } from "../utils.js";

export function delegationEventToBinaryDataV2(
  event: DelegationEventV2
): Uint8Array {
  return match(event)
    .with({ type: "ProducerDelegationSubmitted" }, ({ data }) =>
      ProducerDelegationSubmittedV2.toBinary(data)
    )
    .with({ type: "ProducerDelegationApproved" }, ({ data }) =>
      ProducerDelegationApprovedV2.toBinary(data)
    )
    .with({ type: "ProducerDelegationRejected" }, ({ data }) =>
      ProducerDelegationRejectedV2.toBinary(data)
    )
    .with({ type: "ProducerDelegationRevoked" }, ({ data }) =>
      ProducerDelegationRevokedV2.toBinary(data)
    )
    .exhaustive();
}

export const DelegationEventV2 = z.discriminatedUnion("type", [
  z.object({
    event_version: z.literal(2),
    type: z.literal("ProducerDelegationSubmitted"),
    data: protobufDecoder(ProducerDelegationSubmittedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("ProducerDelegationApproved"),
    data: protobufDecoder(ProducerDelegationApprovedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("ProducerDelegationRejected"),
    data: protobufDecoder(ProducerDelegationRejectedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("ProducerDelegationRevoked"),
    data: protobufDecoder(ProducerDelegationRevokedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
]);

export type DelegationEventV2 = z.infer<typeof DelegationEventV2>;
