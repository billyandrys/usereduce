import type from "../type"

export const initialProducts = {
    products:[
        {id:1, title:'Products # 1'},
        {id:2, title:'Products # 2'}
    ],
    cart:[
        {id:1, title:'Products # 1', quantity:1}
    ],
    activeProducts:{id:2, title:'Products # 2'}
}

const product =(state, action)=>{
    switch(action.type){
        case type.productShow:
            return {
                ...state,
                activeProducts:action.payload 
            }
        case type.productsAddToCart:{
            const newProduct = action.payload
            
            const cartContainProduct = state.cart.find(product=> product.id === newProduct.id)
              console.log(cartContainProduct) 
            
            
            return cartContainProduct ?
             { ...state,
                cart: state.cart.map(product=>
                    product.id === newProduct.id
                     ? {...product, quantity: product.quantity+1}
                    :product
                )
            } :{
                ...state,
                cart:[
                    ...state.cart,
                    {...action.payload, quantity: 1}
                ]
            } 
        
        
        }
        case type.productsRemoveFromCart:
            return{
                ...state,
                cart:state.cart.filter((product)=>product.id !== action.payload)
            }
        case type.productsRemoveOneCart:{
            const productDelete = state.cart.find(product=>product.id === action.payload)

            return productDelete.quantity > 1
             ? {
                ...state,
                cart:state.cart.map(product=>
                product.id === action.payload
                ?{...product, quantity: product.quantity -1}
                :product
                )
            }:{
                ...state,
                cart: state.cart.filter(product=>product.id !== action.payload)
            }
        }
        default:
            return state
    }
}

export default product