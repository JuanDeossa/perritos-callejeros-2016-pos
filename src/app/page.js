"use client";
import { MainLoader } from "@/components/mainLoader";
import { LoginForm } from "@/components/loginForm";
import { auth } from "@/firebase/client";
import { pages, routes } from "@/routes";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import img from "@/assets/images/perritos1.png";
import Image from "next/image";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Agregar un observador para verificar el estado de autenticación del usuario
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Si el usuario no está autenticado, redirigirlo a la página de inicio
        window.location.href = pages.DASHBOARD;
      } else {
        setLoading(false);
      }
    });
    // Asegúrate de detener el observador cuando se desmonte el componente
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div id="HomePage">
      {loading ? (
        <MainLoader />
      ) : (
        <div className="bg-cs_gray1 w-screen h-screen flex items-center justify-center gap-3 p-12">
          <Image width={500} src={img} alt="logo" className="rounded-2xl" />
          <div className="mb-36">
            <LoginForm />
          </div>
        </div>
      )}
    </div>
  );
}