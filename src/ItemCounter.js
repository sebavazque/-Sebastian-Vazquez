import { useState } from 'react';
import shirt from './images/shirt.jpg';


const ItemCounter = (props) => {

    const [numero , setNumero] = useState(1)



    const sumar = () => {

        setNumero(numero + 1)

    }

    const restar = () => {
        setNumero(numero - 1)

    }

    const miOnAdd = () => {}

    return (
        <div>
            <div className="contenedor2">
                <div>

                    <div className='textos'>
                        <h4> Cantidad: {numero} </h4>
                    </div>

                    <div className='content'>
                <button onClick={sumar} >+</button>
                        
                <button onClick={restar}>-</button>

                <div className='addCart'>
                <button onClick={miOnAdd}>Agregar al carrito</button>    
                </div>
                    </div>
                </div>    
                
            </div>
        </div>
    )
}

export default ItemCounter