'use client'
import { getAllProducts } from '@/firebase/client'
import React, { useEffect, useState } from 'react'
import { ProductCard } from './ProductCard'

export const ProductsList = () => {
  const [products, setProducts] = useState()

  const updateAllProducts=async()=>{
    setProducts(await getAllProducts())
  }
  useEffect(()=>{
    updateAllProducts()
  })
  return (
    <div className='flex flex-col gap-5 my-8 mx-auto w-full items-center'>
      {products?.map(product=>(<ProductCard key={product?.id} product={product}/>))}
    </div>
  )
}
