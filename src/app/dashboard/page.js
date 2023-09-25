'use client'
import { ProductsList } from '@/components/ProductsList'
import React from 'react'

const page = () => {

  const logOutAction=async()=>{
  }

  return (
    <div className='w-80'>
      <h1 className='white-title'>DashBoardPage</h1>
      <ProductsList/>
      <button
        className='button1'
        onClick={logOutAction}
      >Log Out</button>
    </div>
  )
}

export default page