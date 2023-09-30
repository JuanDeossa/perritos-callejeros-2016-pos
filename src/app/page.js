'use client'
import LoadingPage1 from "@/components/loader1";
import { LoginForm } from "@/components/loginForm";
import { auth, getAllProducts } from "@/firebase/client";
import { routes } from "@/routes";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import img from '@/assets/images/perritos1.png'
import Image from "next/image";
import Link from "next/link";


export default function HomePage() {
  return <div id="HomePage" className="bg-cs_orange1 w-screen h-screen flex items-center gap-3 p-12">
    <Image src={img} alt="logo" className="rounded-2xl"/>
    <Link className="button3" href={routes.LOGIN}>Ingresa 🐱‍🏍</Link>
  </div>
}