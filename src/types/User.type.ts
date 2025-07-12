import type z from "zod";
import type { loginFormSchema } from "../schemas/loginForm.schema";

export type LoginForm = z.infer<typeof loginFormSchema>;
