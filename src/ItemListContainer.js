import shirt from './images/shirt.jpg';
import { useState } from 'react';







const ItemListContainer = (props) => {

    const [numero , setNumero] = useState(0)

    const sumar = () => {
        setNumero(numero + 1)

    }

    const restar = () => {
        setNumero(numero - 1)

    }


    return (
        <main>
            <h2 className="title">Bienvenidos a {props.title} </h2>
            <p className="text">Somos una empresa de indumentaria fundada en {props.year} </p>

            <div className="contenedor">
                <div className='card'>
                    <img src={shirt} alt="" />
                    <div className='content'>
                        <button onClick={sumar} >+</button>
                        <p> {numero} </p>
                        <button onClick={restar}>-</button>
                    </div>
                </div>    
            </div>
        </main>
    )
}

export default ItemListContainer