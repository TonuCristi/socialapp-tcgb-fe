import { z } from "zod";

import { emailSchema } from "./email.schema";
import { usernameSchema } from "./username.schema";

export const editProfileFormSchema = z.object({
  username: usernameSchema,
  email: emailSchema,
  birthDate: z.string().min(1, { message: "This field should't be empty!" }),
  phoneNumber: z.string().min(1, { message: "This field should't be empty!" }),
});
