import React from 'react'

export const LayoutTypeA = ({children}) => {
  return (
    <div className='w-full min-h-screen bg-emerald-600'>
      <header className='w-full h-20 fixed bg-indigo-500'></header>
      <div>
        <aside className='w-56 fixed bg-amber-800 min-h-screen'></aside>
        {children}
      </div>
    </div>
  )
}