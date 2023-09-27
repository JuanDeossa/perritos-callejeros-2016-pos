'use client'
import { auth, getAllProducts } from '@/firebase/client'
import React, { useEffect, useState } from 'react'
import { ProductCard } from './ProductCard'

import { useDispatch } from 'react-redux'
import { decrement, increment } from '@/redux/counterSlice'

export const ProductsList = () => {
  const [products, setProducts] = useState()

  const dispatch = useDispatch()

  const updateAllProducts=async()=>{
    setProducts(await getAllProducts())
  }
  useEffect(()=>{
    // const userIsLogged = auth.currentUser
    // if (userIsLogged) {
    //   console.log("Yes");
    // }
    updateAllProducts()
  },[])
  return (
    <div className='flex flex-col gap-5 my-8'>
      {products?.map(product=>(<ProductCard key={product?.id} product={product}/>))}
      <button className='button2' onClick={() => dispatch(increment())}>REDUX +</button>
      <button className='button2' onClick={() => dispatch(decrement())}>REDUX -</button>
    </div>
  )
}
