import React from 'react'
import Loader from './Loader'


const OrdenDetail = ({order}) => {
    const {items, totalpedido, fecha, info} = order

    return (

        <div>
            <h1>Detalle de la orden</h1>
            <h2>Total: ${order.totalpedido}</h2>
            <h3>Fecha:{order.fecha}</h3>
            <h4>Nombre{order.info}</h4>
            <h4>Id: {order.id} </h4> 
        </div>
    )

}

export default OrdenDetail