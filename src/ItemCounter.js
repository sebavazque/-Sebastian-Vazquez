import { useState } from 'react';
import shirt from './images/shirt.jpg';


const ItemCounter = (props) => {

    const [numero , setNumero] = useState(props.inicio)



    const sumar = () => {

        setNumero(numero + 1)

    }

    const restar = () => {
        setNumero(numero - 1)

    }

    const miOnAdd = () => {}

    return (
        <div>
            <div className="contenedor">
                <div className='card'>
                    <img src={shirt} alt="" />

                    <div className='textos'>
                        <h2>Remera Volcom</h2>
                        <h3>Precio ${props.precio} </h3>
                        <p> Cantidad: {numero} </p>
                        <p>Stock: {props.stock} </p>
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