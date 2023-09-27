"use client";
import LoadingPage1 from "@/components/LoadingPage1";
import { OrderLayout } from "@/components/OrderLayout";
import { ProductsList } from "@/components/ProductsList";
import { auth, logoutAction } from "@/firebase/client";
import { routes } from "@/routes";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";

const DashBoardPage = () => {
  const [loading, setLoading] = useState(true);

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
    <div className="DashBoardPage w-full h-screen p-8">
      {loading ? (
        <div className="w-full h-full place-content-start">
          <LoadingPage1 />
        </div>
      ) : (
        <div className="  w-full h-full flex gap-6 justify-between">
          <div className="border border-white p-6">
            <h1 className="white-title">Productos</h1>
            <ProductsList />
            <button className="button2" onClick={logoutAction}>
              Log Out
            </button>
          </div>
          <OrderLayout />
        </div>
      )}
    </div>
  );
};

export default DashBoardPage;
