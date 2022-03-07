
import { useState, useEffect } from "react"
import Item from "./Item";
import ItemList from "./ItemList";





const ItemListContainer = (props) => {

    const [loading, setLoading] = useState(true)
    const [producto, setProductos] = useState([])

    const productos = [{
        id: 1,
        titulo: "Remera",
        precio: 1200
    },
    {
        id: 2,
        titulo: "Pantalon",
        precio: 2200
    },
    {
        id: 3,
        titulo: "Gorro",
        precio: 500
    }]

        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productos)
            },2000)
        })


    useEffect(()=>{

        



        promesa
        .then((respuestaDeLaApi)=>{
            setProductos(productos)
        })
        .catch((errorDeLaApi)=>{
            console.log(errorDeLaApi)
            
        })
        .finally(()=>{
            setLoading(false)
        })
        
        
        

    })



    return (
        <div>
            <p>{loading ? "Cargando..." : <ItemList producto={producto}/>}</p>
            
        </div>
            
    
    );
}


export default ItemListContainer