import { z } from "zod";

import { passwordSchema } from "./password.schema";

export const changePasswordFormSchema = z.object({
  newPassword: passwordSchema,
  confirmPassword: passwordSchema,
  oldPassword: passwordSchema,
});
