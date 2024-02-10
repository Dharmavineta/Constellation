import * as z from "zod";

export const boardSchema = z.object({
  title: z.string().min(1, { message: "title is required" }),
});

export type boardSchemaType = z.infer<typeof boardSchema>;
