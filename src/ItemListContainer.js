
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import Item from "./Item";
import ItemList from "./ItemList";





const ItemListContainer = (props) => {

    const [loading, setLoading] = useState(true)
    const [producto, setProductos] = useState([])
    const {id}= useParams()

    const productos = [{
        id: 1,
        titulo: "Remera Rip Curl",
        precio: 1200,
        img: "https://www.digitalsport.com.ar/files/products/61faefe9b79c0-580681-500x500.jpg",
        categoria:"Remeras"
    },
    {
        id: 2,
        titulo: "Pantalon Rip Curl",
        precio: 2200,
        img: "https://www.digitalsport.com.ar/files/products/622244c909eff-578348-500x500.jpg",
        categoria:"Pantalon"
    },
    {
        id: 3,
        titulo: "Gorro Rip Curl",
        precio: 500,
        img: "https://www.digitalsport.com.ar/files/products/618ae0b86b01c-565735-500x500.jpg",
        categoria:"Gorros"
        
    }]

        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{

                res(productos)
            },2000)
        })


    useEffect(()=>{
        promesa
        .then((respuestaDeLaApi)=>{
            if(id){
                const categorias = productos.filter((product)=> product.id === id)
                    setProductos(categorias)
            }
            else{setProductos(productos)}
            
        })
        .catch((errorDeLaApi)=>{
            console.log(errorDeLaApi)
            
        })
        .finally(()=>{
            setLoading(false)
        })
        
    },[id])



    return (
        <div>
            <p>{loading ? "Cargando..." : <ItemList producto={producto}/>}</p>
            
        </div>
            
    
    );
}


export default ItemListContainer