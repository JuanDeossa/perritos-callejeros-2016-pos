"use client";
// import { getAllProducts } from "@/firebase/client";
// import { updateDoc } from "firebase/firestore";
// import { useRouter } from "next/navigation";
// import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";


export const LoginForm = () => {
  // const [products, setProducts] = useState()

  // const updateAllProducts=async()=>{
  //   setProducts(await getAllProducts())
  // }

  // const router=useRouter()

  const submitAction = async () => {
    console.log("submitAction");
  };

  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      email: process.env.NEXT_PUBLIC_USER,
      password: process.env.NEXT_PUBLIC_PASSWORD,
    },
  });

  // useEffect(()=>{
  //   updateAllProducts()
  // },[])

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
      {/* <pre className="text-white">{JSON.stringify(products, null, 2)}</pre> */}
    </form>
  );
};
