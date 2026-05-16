"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (userData) => {
    // console.log("Login Data:", data);
    const { data, error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
      rememberMe: true,
      callbackUrl: "/",
    });
  };

  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  const handleGithubSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 px-4">
      <div className="w-full max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-white mb-2">
          Welcome Back 👋
        </h1>
        <p className="text-center text-gray-300 mb-6">
          Login to continue your journey
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}

          <div>
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 text-white border-white/20"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <Input
              type="password"
              placeholder="Enter your password"
              className="bg-white/10 text-white border-white/20"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Min 6 characters" },
              })}
            />
            {errors.password && (
              <p className="text-red-400 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Button */}
          <Button className="w-full bg-linear-to-r from-cyan-500 to-blue-600 hover:scale-[1.02] transition">
            Login
          </Button>
          {/* Divider */}
          <div className="flex items-center gap-3 py-2">
            <div className="flex-1 h-px bg-white/20"></div>
            <p className="text-white/70 text-sm">OR</p>
            <div className="flex-1 h-px bg-white/20"></div>
          </div>

          {/* Google Button */}
          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="w-full py-3 rounded-xl border border-white/20 bg-white/10 text-white font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3"
          >
            <FcGoogle size={26} />
            Continue with Google
          </button>

          {/* Github Button */}
          <button
            onClick={handleGithubSignIn}
            type="button"
            className="w-full py-3 rounded-xl border border-white/20 bg-white/10 text-white font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3"
          >
            <BsGithub size={26} />
            Continue with Github
          </button>

          {/* Footer */}
          <p className="text-center text-gray-400 text-sm mt-6">
            Don’t have an account?{" "}
            <Link
              href="/register"
              className="text-cyan-400 cursor-pointer hover:underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
