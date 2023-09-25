import React from 'react'

export const ProductCard = ({product}) => {
  return (
    <div className='flex flex-col gap-2'>
      <p className='text-white'>{product.id||"YES"}</p>
      <p className='text-white'>{product.name}</p>
      <p className='text-white'>{product.price}</p>
    </div>
  )
}
