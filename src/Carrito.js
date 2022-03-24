import React from 'react'
import { useAppContext } from './CartContext'

const Carrito = () => {

    const {cart} = useAppContext()

    console.log(cart)
    
    return(

        <div>
            {cart.map(item => 
            <div> <h1> {item.item.precio} </h1> </div>
            )}

        </div>
                
    )

}

export default Carrito