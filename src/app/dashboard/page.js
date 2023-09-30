"use client";
import LoadingPage1, { Loader1 } from "@/components/loader1";
import { Modal1 } from "@/components/modal1";
import { OrderLayout } from "@/components/orderLayout";
import { ProductsList } from "@/components/productsList";
import { auth } from "@/firebase/client";
import { logoutAction } from "@/firebase/auth";
import { routes } from "@/routes";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const DashBoardPage = () => {
  const [loading, setLoading] = useState(true);
  // const [showModal, setShowModal] = useState(true);

  const modalStates = useSelector((state) => state.modalStates.value);
  // console.log(modalStates);

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
    <div id="DashBoardPage" className="p-10">
      {loading ? (
        <Loader1 />
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
      <Modal1 />
    </div>
  );
};

export default DashBoardPage;
