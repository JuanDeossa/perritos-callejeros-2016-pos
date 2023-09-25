"use client";
import { supabase } from "@/supabase/client";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

export const LoginForm = () => {
  const router=useRouter()
  const submitAction = async (data) => {
    try {
      const res = await supabase.auth.signInWithPassword({
        email: data?.email,
        password: data?.password,
      });
      // console.log(res);
      const { session, user } = res?.data;
      if (session) {
        await sessionStorage.setItem("token", session?.access_token);
        await sessionStorage.setItem("user", user?.id);
        router.push('./dashboard')
      }
    } catch (error) {
      console.error(error);
    }
  };

  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      email: process.env.NEXT_PUBLIC_USER,
      password: process.env.NEXT_PUBLIC_PASSWORD,
    },
  });

  return (
    <form
      className="mx-auto mt-8 max-w-[500px] px-10"
      onSubmit={handleSubmit(submitAction)}
    >
      <div className="mb-6">
        <input
          type="email"
          className="w-full px-8 py-3 rounded-full border border-gray-400 placeholder-gray-400 focus:outline-none focus:border-blue-500 text-gray-700 font-bold"
          placeholder="Email"
          {...register("email")}
        />
      </div>
      <div className="mb-6">
        <input
          type="password"
          className="w-full px-8 py-3 rounded-full border border-gray-400 placeholder-gray-400 focus:outline-none focus:border-blue-500 text-gray-700 font-bold"
          placeholder="Password"
          {...register("password")}
        />
      </div>
      <button
        type="submit"
        className="button1"
      >
        Log in
      </button>
      <pre className="text-white">{JSON.stringify(watch(), null, 2)}</pre>
    </form>
  );
};
