import { match } from "ts-pattern";
import { z } from "zod";
import { protobufDecoder } from "../utils.js";
import {
  DelegationApprovedV2,
  DelegationRejectedV2,
  DelegationRevokedV2,
  DelegationSubmittedV2,
} from "../gen/v2/delegation/events.js";

export function delegationEventToBinaryDataV2(
  event: DelegationEventV2
): Uint8Array {
  return match(event)
    .with({ type: "DelegationSubmitted" }, ({ data }) =>
      DelegationSubmittedV2.toBinary(data)
    )
    .with({ type: "DelegationApproved" }, ({ data }) =>
      DelegationApprovedV2.toBinary(data)
    )
    .with({ type: "DelegationRejected" }, ({ data }) =>
      DelegationRejectedV2.toBinary(data)
    )
    .with({ type: "DelegationRevoked" }, ({ data }) =>
      DelegationRevokedV2.toBinary(data)
    )
    .exhaustive();
}

export const DelegationEventV2 = z.discriminatedUnion("type", [
  z.object({
    event_version: z.literal(2),
    type: z.literal("DelegationSubmitted"),
    data: protobufDecoder(DelegationSubmittedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("DelegationApproved"),
    data: protobufDecoder(DelegationApprovedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("DelegationRejected"),
    data: protobufDecoder(DelegationRejectedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
  z.object({
    event_version: z.literal(2),
    type: z.literal("DelegationRevoked"),
    data: protobufDecoder(DelegationRevokedV2),
    stream_id: z.string(),
    version: z.number(),
    timestamp: z.coerce.date(),
  }),
]);
export type DelegationEventV2 = z.infer<typeof DelegationEventV2>;
