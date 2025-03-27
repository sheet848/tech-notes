import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const removeFromCart = (product) => {
        dispatch({ 
            type: 'REMOVE_FROM_CART',
            payload: product
        });
    }
  return (
    <>
    <h2>Shopping Cart</h2>
    <ul>
        {
            cart.map((item) => (
                <li key={item.id}>
                    {item.name} - ₹{item.price}{' '}
                    <button onClick={() => removeFromCart(item)}>Remove</button>
                </li>
            ))      
        }
    </ul>
    </>
  )
}

export default Cart