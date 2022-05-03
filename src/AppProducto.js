import React, {useReducer} from 'react'
import product, { initialProducts } from './reducers/productsReducer'
import type from './type'

const AppProducto = () => {
    const [stateProducts, dispatch] = useReducer(product, initialProducts)

    const { cart } = stateProducts
    const { activeProducts } = stateProducts
    const { products } = stateProducts

    return (
    <div>
        <h1>Productos</h1>
        <ul>
            {products.map(product=>(
                <li key={product.id}>
                {product.title}
                <button onClick={()=>dispatch({
                    type:type.productShow,
                    payload:product
                })}>
                    Show
                </button>
                <button onClick={()=>{dispatch({
                    type: type.productsAddToCart,
                    payload:product
                })}}>
                    Add to card
                </button>
                
            </li>
            ))}

        </ul>
        <h1>Card</h1>
        <ul>
            { cart.map(product=>(
                <li key={product.id}>
                {product.title} - quantity {product.quantity}
                <button onClick={()=>dispatch({
                    type: type.productsRemoveFromCart,
                    payload: product.id
                })}>
                    Remove from card
                </button>
                <button onClick={()=>{dispatch({
                    type: type.productsRemoveOneCart,
                    payload:product.id
                })}}>
                    Remove one
                </button>
            </li>
            ))}
        </ul>
        <h2>Preview</h2>
        <p>{activeProducts.title}</p>

    </div>
    )
}
export default AppProducto