import shirt from './images/shirt.jpg';
import { useState } from 'react';






const Main = (props) => {

    
    const [numero , setNumero] = useState(props.inicio)



        const sumar = () => {

            setNumero(numero + 1)

        }

        const restar = () => {
            setNumero(numero - 1)

        }

        const miOnAdd = () => {}
    

    return (
        <main>
            <h2 className="title">Bienvenidos a {props.title} </h2>
            <p className="text">Somos una empresa de indumentaria fundada en {props.year} </p>
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
                    </div>
                    <div className='addCart'>
                        <button onClick={miOnAdd}>Agregar al carrito</button>    
                    </div>
                </div>    
            </div>
        </main>
    );
}

export default Main;
