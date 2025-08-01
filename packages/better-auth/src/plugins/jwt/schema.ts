import type { AuthPluginSchema } from "../../types";
import * as z from "zod/v4";

export const schema = {
	jwks: {
		fields: {
			publicKey: {
				type: "string",
				required: true,
			},
			privateKey: {
				type: "string",
				required: true,
			},
			createdAt: {
				type: "date",
				required: true,
			},
		},
	},
} satisfies AuthPluginSchema;

export const jwk = z.object({
	id: z.string(),
	publicKey: z.string(),
	privateKey: z.string(),
	createdAt: z.date(),
});

export type Jwk = z.infer<typeof jwk>;
