
import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom';
import Item from "./Item";







const ItemDetailContainer = (props) => {

    const [loading, setLoading] = useState(true)
    const [producto, setProductos] = useState([])
    const {itemId} = useParams()
    
    const productos = [{
        id: 1,
        titulo: "REMERA  RIP CURL",
        precio: 1200,
        image: "https://www.digitalsport.com.ar/files/products/622fd59e7fbfc-580711-500x500.jpg",
        origen:"NACIONAL",
        genero: "Hombre",
        material: "Algodón",
        categoria: "remeras"  
    },
    {
        id: 2,
        titulo: "REMERA  RIP CURL",
        precio: 1200,
        image: "https://www.digitalsport.com.ar/files/products/622fd5a653f44-580713-500x500.jpg",
        origen:"NACIONAL",
        genero: "Hombre",
        material: "Algodón",
        categoria: "remeras"  
    },
    {
        id: 3,
        titulo: "REMERA RIP CURL",
        precio: 1200,
        image: "https://www.digitalsport.com.ar/files/products/6220045508db5-582226-500x500.jpg",
        origen:"NACIONAL",
        genero: "Hombre",
        material: "Algodón",
        categoria: "remeras"  
    },
    {
        id: 4,
        titulo: "PANTALON JEAN PINS RIP CURL",
        precio: 2200,
        image: "https://www.digitalsport.com.ar/files/products/622244c909eff-578348-500x500.jpg",
        origen:"NACIONAL",
        genero: "Mujer",
        material: "Jean",
        categoria: "pantalones"
    },
    {
        id: 5,
        titulo: "PANTALON VOLCOM",
        precio: 2200,
        image: "https://www.digitalsport.com.ar/files/products/61f9c846642f1-578386-500x500.jpg",
        origen:"NACIONAL",
        genero: "Mujer",
        material: "Jean",
        categoria: "pantalones"
    },
    {
        id: 6,
        titulo: "PANTALON VANS",
        precio: 2200,
        image: "https://www.digitalsport.com.ar/files/products/6219433270a39-578559-500x500.jpg",
        origen:"NACIONAL",
        genero: "Mujer",
        material: "Jean",
        categoria: "pantalones"
    },
    {
        id: 7,
        titulo: "Gorro Rip Curl",
        precio: 500,
        image: "https://www.digitalsport.com.ar/files/products/618ae0b86b01c-565735-500x500.jpg",
        origen:"NACIONAL",
        genero: "Unisex",
        material: "Algodon",
        categoria: "gorros"
    }
    ,
    {
        id: 8,
        titulo: "GORRA BILLABOING",
        precio: 500,
        image: "https://www.digitalsport.com.ar/files/products/62227bbb536f4-577651-500x500.jpg",
        origen:"NACIONAL",
        genero: "Unisex",
        material: "Algodon",
        categoria: "gorros"
    },
    {
        id: 9,
        titulo: "PILUSO MAUI WATER",
        precio: 500,
        image: "https://www.digitalsport.com.ar/files/products/622a2d2704c35-582187-500x500.jpg",
        origen:"NACIONAL",
        genero: "Unisex",
        material: "Algodon",
        categoria: "gorros"
    }
]

        
    
    useEffect(()=>{   
        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                const getItems = productos.find((items) => items.id == itemId);
                res(getItems);
            },1000)
        })
        .then((res)=>{
            setProductos(res)})

        .catch(err => console.log(err))
        
        .finally(()=> setLoading(false)) 
    },[itemId])

    return  loading ? "Cargando..." : <ItemDetail {...producto}/>
            
    
}


export default  ItemDetailContainer