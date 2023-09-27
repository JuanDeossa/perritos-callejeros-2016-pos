'use client'
import LoadingPage1 from "@/components/LoadingPage1";
import { LoginForm } from "@/components/LoginForm";
import { auth, getAllProducts } from "@/firebase/client";
import { routes } from "@/routes";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Agregar un observador para verificar el estado de autenticación del usuario
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Si el usuario no está autenticado, redirigirlo a la página de inicio
        window.location.href = routes.DASHBOARD;
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
    <main className="Home flex min-h-screen flex-col items-center justify-between p-24">
      <>{!loading && <LoginForm />}</>
    </main>
  );
}
