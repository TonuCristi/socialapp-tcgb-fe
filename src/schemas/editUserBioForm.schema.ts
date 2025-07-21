import { z } from "zod";

export const editUserBioFormSchema = z.object({
  bio: z
    .string()
    .min(1, { message: "This field should't be empty!" })
    .max(150, { message: "The bio should't be longer than 150 characters!" }),
});
