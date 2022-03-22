import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import MiProvider from './CartContext';

const ItemCounter = ({ producto,stock,initial,}) => {


    const [numero , setNumero] = useState(initial)

    const {addItem}= useContext(MiProvider)
    const sumar = () => {
        if(numero < stock){
            setNumero(numero + 1)
        }

    }

    const restar = () => {
        if(numero > initial){
            setNumero(numero - 1)
        }

    }

    

    return (
        <div>
            <div className="contenedor2">
                <div>

                    <div className='textos'>
                        <h3> Cantidad: {numero} </h3>
                        <h4> Stock: {stock} </h4>
                    </div>

                    <div className='content'>
                <button onClick={sumar} >+</button>
                        
                <button onClick={restar}>-</button>

                <div className='addCart'>
                    <button onClick={addItem}>
                        Agregar al carrito!
                    </button>    
                </div>
                    </div>
                </div>    
                
            </div>
        </div>
    )
}

export default ItemCounter