'use client'
import { supabase } from '@/supabase/client'
import React from 'react'

const page = () => {

  const logOutAction=async()=>{
    const res = await supabase.auth.signOut()
    console.log(res);
  }

  return (
    <div className='w-80'>
      <h1>DashBoardPage</h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <button
        className='button1'
        onClick={logOutAction}
      >Log Out</button>
    </div>
  )
}

export default page