import React from 'react'
import { useAppContext } from './CartContext'
import { useState } from 'react'


const Carrito = () => {

    const {cart, removeItem, cleanCart, totalpedido} = useAppContext() 



        return  (
            
        <div>
                <h2>Tu Carrito!</h2>
                

                {cart.map((item) => 
                    <div key={item.id}>
                        <div className='superCartContainter'>
                            <div className='cartContainer'>
                                <img src={item.img} alt="" />
                                <div className='allCart'>
                                    <div className='columna'>
                                        <h3>{item.titulo}</h3>
                                        <h3> Precio: ${item.precio} </h3>
                                        <h3> Cantidad: {item.quantity} </h3>
                                        <h3>SubTotal: ${item.precio * item.quantity} </h3>
                                        
                                    </div>

                                    <div className='columna'>
                                        <button onClick={() => removeItem(item.id)}>
                                            Borrar Item
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <h2>Total del pedido: ${ totalpedido }</h2>
                <button className='clean' onClick={cleanCart}>Vaciar carrito</button>  
                <button className='finish'>Finalizar compra</button>
        </div>
            
        )
    

    
}

export default Carrito