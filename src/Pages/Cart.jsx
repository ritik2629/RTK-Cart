import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart,removeToCart } from '../redux/features/cartSlice'

const Cart = () => {
  const dispatch=useDispatch()
  const state=useSelector(state=>state.cart.cart)
  console.log(state)
  return (
    <div>
      <h1>Your cart Item</h1>
      {state.length>0 ? (state.map((item)=>{
        const {id,price,title,image} =item
        return(
          <aside key={id}>
          <h2>{title}</h2>
          <button onClick={()=>dispatch(addToCart(item))}>+</button>
          <p>{item.length}</p>
          <button>-</button>
          <button onClick={()=>dispatch(removeToCart(id))}>Remove</button>
        </aside>
        )
      })) : <h2>No item present in your cart</h2>}

    </div>
  )
}

export default Cart