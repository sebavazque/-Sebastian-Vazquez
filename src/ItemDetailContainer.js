
import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom';
import Item from "./Item";







const ItemDetailContainer = (props) => {

    const [loading, setLoading] = useState(true)
    const [producto, setProductos] = useState([])
    const {category} = useParams()
    
    const productos = [{
        id: 1,
        titulo: "REMERA  RIP CURL",
        precio: 1200,
        img: "https://www.digitalsport.com.ar/files/products/622fd59e7fbfc-580711-500x500.jpg",
        origen:"NACIONAL",
        genero: "Hombre",
        material: "Algodón",
        categoria: "remeras"  
    },
    {
        id: 2,
        titulo: "REMERA  RIP CURL",
        precio: 1200,
        img: "https://www.digitalsport.com.ar/files/products/622fd5a653f44-580713-500x500.jpg",
        origen:"NACIONAL",
        genero: "Hombre",
        material: "Algodón",
        categoria: "remeras"  
    },
    {
        id: 3,
        titulo: "REMERA RIP CURL",
        precio: 1200,
        img: "https://www.digitalsport.com.ar/files/products/6220045508db5-582226-500x500.jpg",
        origen:"NACIONAL",
        genero: "Hombre",
        material: "Algodón",
        categoria: "remeras"  
    },
    {
        id: 4,
        titulo: "PANTALON JEAN PINS RIP CURL",
        precio: 2200,
        img: "https://www.digitalsport.com.ar/files/products/622244c909eff-578348-500x500.jpg",
        origen:"NACIONAL",
        genero: "Mujer",
        material: "Jean",
        categoria: "pantalones"
    },
    {
        id: 5,
        titulo: "Gorro Rip Curl",
        precio: 500,
        img: "https://www.digitalsport.com.ar/files/products/618ae0b86b01c-565735-500x500.jpg",
        origen:"NACIONAL",
        genero: "Unisex",
        material: "Algodon",
        categoria: "gorros"
    }
]
        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                
                res(productos)
            },2000)
        })


    useEffect(()=>{
        promesa
        .then((productos)=>{
            setProductos(productos)})

        .catch(err => console.log(err))
        
        .finally(()=> setLoading(false)) 
    },[category])

    const onAdd = (itemSeleccionado) =>{
        console.log("agregar")
    }

    return (
        <div>
            <p>{loading ? "Cargando..." : ""}</p>
            {producto.map((producto)=>{
                        return <ItemDetail producto={producto} key ={producto.id}/>
                    })}
        </div>
    );
}


export default  ItemDetailContainer