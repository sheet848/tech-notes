import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Products = () => {

    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    
    const addToCart = (product) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: product
        })
    }
  return (
    <>
    <h2>Products</h2>
    <ul>
        {
            products.map((product) => (
                <li key={product.id}>
                    {product.name} - ₹{product.price}{' '}
                    <button onClick={() => addToCart(product)}>Add to product</button>
                </li>
            ))
        }
    </ul>
    </>
  )
}

export default Products