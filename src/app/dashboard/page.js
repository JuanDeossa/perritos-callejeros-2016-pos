'use client'
import { ProductsList } from '@/components/ProductsList'
import { auth, logoutAction } from '@/firebase/client'
import { routes } from '@/routes'
import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'

const DashBoardPage = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Agregar un observador para verificar el estado de autenticación del usuario
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // Si el usuario no está autenticado, redirigirlo a la página de inicio
        window.location.href=routes.HOME
      }else{
        setLoading(false)
      }
    });
    // Asegúrate de detener el observador cuando se desmonte el componente
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className='w-80'>
      {!loading&&
      <>
        <h1 className='white-title'>DashboardPage</h1>
        <ProductsList />
        <button className='button1' onClick={logoutAction}>
          Log Out
        </button>
      </>}
    </div>
  );
}

export default DashBoardPage