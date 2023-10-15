"use client"
import { routes } from "@/utils/routes";
import React, { useEffect, useState } from "react";
import { AppHeader } from "./appHeader";
import { SideBar } from "./sideBar";
import { MainLoader } from "./mainLoader";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/client";

export const AppLayout = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    // Agregar un observador para verificar el estado de autenticación del usuario
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // Si el usuario no está autenticado, redirigirlo a la página de inicio
        window.location.href = routes.HOME;
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
    <div className="AppLayout w-full min-h-screen bg-gray-700">
      {loading ? (
        <MainLoader/>
      ) : (
        <div className="">
          <AppHeader/>
          <div className={`flex pt-16`}>
            <SideBar open={open} setOpen={setOpen}/>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};