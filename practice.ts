import * as z from "zod";

const humanSchema = z.object({
  age: z.number(),
});

type Human = z.infer<typeof humanSchema>;

const sanju: Human = {
  age: "23",
};

const validatedResult = humanSchema.safeParse(sanju);

console.log(validatedResult);
