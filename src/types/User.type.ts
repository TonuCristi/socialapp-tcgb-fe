import type z from "zod";

import type { loginFormSchema } from "../schemas/loginForm.schema";
import type { registerFormSchema } from "../schemas/registerForm.schema";
import type { forgotPasswordFormSchema } from "../schemas/forgotPasswordForm.schema";
import type { resetPasswordFormSchema } from "../schemas/resetPasswordForm.schema";
import type { editProfileFormSchema } from "../schemas/editProfileForm.schema";
import type { changePasswordFormSchema } from "../schemas/changePasswordForm.schema";
import type { editUserBioFormSchema } from "../schemas/editUserBioForm.schema";

export type LoginForm = z.infer<typeof loginFormSchema>;

export type RegisterForm = z.infer<typeof registerFormSchema>;

export type ForgotPasswordForm = z.infer<typeof forgotPasswordFormSchema>;

export type ResetPasswordForm = z.infer<typeof resetPasswordFormSchema>;

export type EditProfileForm = z.infer<typeof editProfileFormSchema>;

export type ChangePasswordForm = z.infer<typeof changePasswordFormSchema>;

export type EditUserBioForm = z.infer<typeof editUserBioFormSchema>;

export type UserResponse = {
  _id: string;
  username: string;
  email: string;
  birthDate: string;
  bio: string;
  phoneNumber: string;
  avatar: string;
};

export type User = {
  id: string;
  username: string;
  email: string;
  birthDate: string;
  bio: string;
  phoneNumber: string;
  avatar: string;
};
