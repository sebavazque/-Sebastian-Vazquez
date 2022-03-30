import React from 'react'
import { Link } from 'react-router-dom'

const Categorias = () => {
    return (

        <div className='row'>
            <div className='catContainer1'>
                <button className='catSlider'>  
                    <div >
                        <Link className='boton' to="/item/remeras">Remeras</Link>
                    </div>
                </button> 
            </div>
            <div className='catContainer2'>
                <button className='catSlider'>  
                    <div >
                        <Link className='boton' to="/item/pantalones">Pantalones</Link>
                    </div>
                </button> 
            </div>

            <div className='catContainer3'>
            <button className='catSlider'>  
                    <div >
                        <Link className='boton' to="/item/buzos">Buzos</Link>
                    </div>
                </button> 
            </div>
        </div>





    )
}

export default Categorias