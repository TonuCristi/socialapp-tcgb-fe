import type z from "zod";

import type { loginFormSchema } from "../schemas/loginForm.schema";
import type { registerFormSchema } from "../schemas/registerForm.schema";
import type { forgotPasswordFormSchema } from "../schemas/forgotPasswordForm.schema";
import type { resetPasswordFormSchema } from "../schemas/resetPasswordForm.schema";

export type LoginForm = z.infer<typeof loginFormSchema>;

export type RegisterForm = z.infer<typeof registerFormSchema>;

export type ForgotPasswordForm = z.infer<typeof forgotPasswordFormSchema>;

export type ResetPasswordForm = z.infer<typeof resetPasswordFormSchema>;

export type UserResponse = {
  _id: string;
  username: string;
  email: string;
};

export type User = {
  id: string;
  username: string;
  email: string;
};
