import React from 'react'

export const LayoutTypeB = ({children}) => {
  return (
    <div className='w-full min-h-screen bg-emerald-600 flex'>
      <aside className='w-56 fixed bg-amber-800 min-h-screen'></aside>
      <div>
        <header className='w-full h-20 fixed bg-indigo-500'></header>
        {children}
      </div>
    </div>
  )
}