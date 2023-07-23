import React from 'react'
import { useSelector } from 'react-redux'
import CartView from '../components/CartView'
import './Cart.css'

function Cart() {

  const cart = useSelector(state=>state.cart)

  if(cart.length === 0){
    return <h1 className='text-center'>Nothing to display :(</h1>
  }
  return (
    <div className='cart-items'>{
      cart.map(item=>{
        return <ul class="list-group" key={item.id}><CartView productId={item.id} productName={item.title} productImage={item.image} productPrice={item.price}/></ul>
      })
      }</div>
  )
}

export default Cart