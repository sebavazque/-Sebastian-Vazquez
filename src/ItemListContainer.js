import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";





const ItemListContainer = (props) => {

    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const {category}= useParams()
    

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
        titulo: "Pantalon Volcom",
        precio: 2200,
        img: "https://www.digitalsport.com.ar/files/products/61f9c846642f1-578386-500x500.jpg",
        categoria:"pantalones"
    },
    {
        id: 6,
        titulo: "Pantalon Vans",
        precio: 2200,
        img: "https://www.digitalsport.com.ar/files/products/6219433270a39-578559-500x500.jpg",
        categoria:"pantalones"
    },
    {
        id: 7,
        titulo: "Gorro Rip Curl",
        precio: 500,
        img: "https://www.digitalsport.com.ar/files/products/618ae0b86b01c-565735-500x500.jpg",
        categoria:"gorros"
        
    },
    {
        id: 8,
        titulo: "Gorra Billaboing",
        precio: 500,
        img: "https://www.digitalsport.com.ar/files/products/62227bbb536f4-577651-500x500.jpg",
        categoria:"gorros"
        
    },
    {
        id: 9,
        titulo: "Piluso Maui Water",
        precio: 500,
        img: "https://www.digitalsport.com.ar/files/products/622a2d2704c35-582187-500x500.jpg",
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