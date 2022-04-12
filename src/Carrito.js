import React from 'react'
import { useAppContext } from './CartContext'
import { Link } from 'react-router-dom';
import OrdenDetail from './OrdenDetail';




const Carrito = () => {

    const {cart, removeItem, cleanCart, totalPedido, sendOrder} = useAppContext() 


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
                <h2>Total del pedido: ${ totalPedido }</h2>
                <button className='clean' onClick={cleanCart}>Vaciar carrito</button>  
            <Link to="/orden" > <button onClick={sendOrder} className="finish"  >finish </button> </Link>
                
        </div>
            
        )
    
}

export default Carrito