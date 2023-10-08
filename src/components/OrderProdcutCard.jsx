import React from 'react'

// import { ReactComponent as AddIcon} from '../assets/icons/add_icon.svg'
import AddIcon from '../assets/icons/add_icon.svg'
import { QuantityButton } from './subPages/newOrder/QuantityButton'

export const OrderProdcutCard = ({prod}) => {
  return (
    <div className='flex bg-slate-600 rounded-lg px-3 py justify-between items-center'>
      <div className="flex flex-col flex-wrap ">
        <span className='text-3xl opacity-100'>{prod?.name}</span>
        <span className='text-lg opacity-100 leading-5'>valor: ${prod?.price}</span>
        <span className='text-lg opacity-100 leading-5'>cantidad: {prod?.units}</span>
      </div>
      <div className='flex gap-2'>
        <QuantityButton id={prod?.id} add={false}/>
        <QuantityButton id={prod?.id}/>
      </div>
    </div>
  )
}