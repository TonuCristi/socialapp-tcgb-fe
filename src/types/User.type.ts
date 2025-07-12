import type z from "zod";
import type { loginFormSchema } from "../schemas/loginForm.schema";
import type { registerFormSchema } from "../schemas/registerForm.schema";

export type LoginForm = z.infer<typeof loginFormSchema>;

export type RegisterForm = z.infer<typeof registerFormSchema>;
