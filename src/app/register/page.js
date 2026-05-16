"use client";

import { authClient } from "@/lib/auth-client";
import { Eye, EyeOff, Lock, Mail, Phone, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = async (userData) => {
    const { data, error } = await authClient.signUp.email({
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      password: userData.password,
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
    <div className="min-h-screen bg-linear-to-br from-cyan-500 via-blue-600 to-indigo-700 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
          {/* Top Section */}
          <div className="text-center pt-10 pb-6 px-6">
            <h1 className="text-4xl font-extrabold text-white">
              Create Account
            </h1>

            <p className="text-white/80 mt-2 text-sm">
              Join HopeFund and start helping people
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="px-6 pb-8 space-y-5"
          >
            {/* Name */}
            <div>
              <label className="text-white text-sm mb-2 block">Full Name</label>

              <div className="relative">
                <User
                  size={18}
                  className="absolute top-1/2 left-4 -translate-y-1/2 text-white/70"
                />

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/15 border border-white/20 text-white placeholder:text-white/60 outline-none focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300 transition"
                  {...register("name", {
                    required: "Name is required",
                  })}
                />
              </div>

              {errors.name && (
                <p className="text-red-200 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="text-white text-sm mb-2 block">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute top-1/2 left-4 -translate-y-1/2 text-white/70"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/15 border border-white/20 text-white placeholder:text-white/60 outline-none focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300 transition"
                  {...register("email", {
                    required: "Email is required",
                  })}
                />
              </div>

              {errors.email && (
                <p className="text-red-200 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="text-white text-sm mb-2 block">
                Phone Number
              </label>

              <div className="relative">
                <Phone
                  size={18}
                  className="absolute top-1/2 left-4 -translate-y-1/2 text-white/70"
                />

                <input
                  type="text"
                  placeholder="Enter phone number"
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/15 border border-white/20 text-white placeholder:text-white/60 outline-none focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300 transition"
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                  })}
                />
              </div>

              {errors.phoneNumber && (
                <p className="text-red-200 text-sm mt-1">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="text-white text-sm mb-2 block">Password</label>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute top-1/2 left-4 -translate-y-1/2 text-white/70"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className="w-full pl-12 pr-12 py-3 rounded-xl bg-white/15 border border-white/20 text-white placeholder:text-white/60 outline-none focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300 transition"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-4 -translate-y-1/2 text-white/70"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {errors.password && (
                <p className="text-red-200 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-white text-blue-700 font-bold text-lg hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-white/30"
            >
              Register Now
            </button>

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

            {/* Login */}
            <p className="text-center text-white/80 text-sm mt-4">
              Already have an account?
              <Link
                href="/login"
                className="font-bold text-white cursor-pointer ml-1 hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
