import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import Item from "./Item";
import ItemList from "./ItemList";





const ItemListContainer = (props) => {

    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const {category}= useParams()
    console.log(category)

    const products = [{
        id: 1,
        titulo: "Remera Rip Curl",
        precio: 1200,
        img: "https://www.digitalsport.com.ar/files/products/622fd59e7fbfc-580711-500x500.jpg",
        categoria:"remeras"
    },
    {
        id: 2,
        titulo: "Remera Rip Curl",
        precio: 1200,
        img: "https://www.digitalsport.com.ar/files/products/622fd5a653f44-580713-500x500.jpg",
        categoria:"remeras"
    },
    {
        id: 3,
        titulo: "Remera Rip Curl",
        precio: 1200,
        img: "https://www.digitalsport.com.ar/files/products/6220045508db5-582226-500x500.jpg",
        categoria:"remeras"
    },
    {
        id: 4,
        titulo: "Pantalon Rip Curl",
        precio: 2200,
        img: "https://www.digitalsport.com.ar/files/products/622244c909eff-578348-500x500.jpg",
        categoria:"pantalones"
    },
    {
        id: 5,
        titulo: "Gorro Rip Curl",
        precio: 500,
        img: "https://www.digitalsport.com.ar/files/products/618ae0b86b01c-565735-500x500.jpg",
        categoria:"gorros"
        
    }]

        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(products)
            },1000)
        })


    useEffect(()=>{
        promesa
        .then((productos)=>{
            if(category){
                const categorias = productos.filter((products)=> products.categoria === category)
                setProductos(categorias)
                
            }
            else{setProductos(products)}
            
        })
        .catch((errorDeLaApi)=>{
            console.log(errorDeLaApi)
            
        })
        .finally(()=>{
            setLoading(false)
        })
        
    },[category])



    return (
        <div>
            <p>{loading ? "Cargando..." : <ItemList productos={productos}/>}</p>
            
        </div>
            
    
    );
}


export default ItemListContainer