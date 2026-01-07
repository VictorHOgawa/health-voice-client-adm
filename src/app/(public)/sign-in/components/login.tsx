"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Loader2, LockIcon, Mail } from "lucide-react";
import { useRouter } from "next/navigation"; // Correct import for App Router
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { SignInProps } from "../types";
import Field from "./field";
import { Form, FormField, FormItem, FormMessage } from "./form";

const FormSchema = z.object({
  email: z.string().email({ message: "Email Inválido" }),
  password: z.string().min(6, "Senha inválida"),
});

type FormData = z.infer<typeof FormSchema>;

const SignIn = ({ onClick }: SignInProps) => {
  const router = useRouter();
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async (data: FormData) => {
    setIsLoggingIn(true);
    try {
      console.log("Tentativa de login com:", data);

      // Simulação de login
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Login efetuado com sucesso!");
      router.push("/");
    } catch (error) {
      console.error(error);
      toast.error("Erro ao efetuar login.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      form.handleSubmit(handleLogin)();
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleLogin)}
        className="flex flex-col gap-4"
        onKeyDown={handleKeyPress}
        noValidate
      >
        <FormField
          key="email"
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <FormItem>
              <Field
                placeholder="nome@exemplo.com"
                label="Email"
                Svg={<Mail size={20} />}
                {...field}
                required
                invalid={!!fieldState.error}
              />
              <FormMessage className="text-xs text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          key="password"
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <FormItem>
              <div className="relative">
                <Field
                  placeholder="*********"
                  label="Senha"
                  Svg={<LockIcon size={20} />}
                  type={showPassword ? "text" : "password"}
                  {...field}
                  required
                  invalid={!!fieldState.error}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 bottom-3 text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <FormMessage className="text-xs text-red-500" />
            </FormItem>
          )}
        />

        <div className="flex justify-end">
          <span
            className="hover:text-primary cursor-pointer text-sm text-gray-500 transition hover:underline"
            onClick={onClick}
          >
            Esqueceu a senha?
          </span>
        </div>

        <button
          type="submit"
          disabled={isLoggingIn}
          className="bg-primary flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isLoggingIn ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              <span>Entrando...</span>
            </>
          ) : (
            "Entrar na conta"
          )}
        </button>
      </form>
    </Form>
  );
};

export default SignIn;
