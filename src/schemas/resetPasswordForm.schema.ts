import { z } from "zod";

import { passwordSchema } from "./password.schema";

export const resetPasswordFormSchema = z.object({
  newPassword: passwordSchema,
  confirmPassword: passwordSchema,
});
