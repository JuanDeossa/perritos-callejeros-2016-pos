"use client";
import { Loader1 } from "@/components/loader1";
import { LoginForm } from "@/components/loginForm";
import { NewProductForm } from "@/components/newProductForm";
import { ProductsList } from "@/components/productsList";
import { ProductsList2 } from "@/components/productsList2";
import { auth } from "@/firebase/client";
import { routes } from "@/routes";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function ProductsPage() {
  const [loading, setLoading] = useState(true);

  const productsToShow = useSelector((state) => state.products.value);
  // console.log(productsToShow);

  useEffect(() => {
    // Agregar un observador para verificar el estado de autenticación del usuario
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // Si el usuario no está autenticado, redirigirlo a la página de inicio
        window.location.href = routes.LOGIN;
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
    loading?<Loader1/>:
    <div className="Home flex min-h-screen gap-6 p-24 text-white">
      <NewProductForm/>
      <ProductsList2/>
    </div>
  );
}