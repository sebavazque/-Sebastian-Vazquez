
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
        titulo: "REMERA STD CALIFORNIA RIP CURL",
        precio: 1200,
        img: "https://www.digitalsport.com.ar/files/products/61faefe9b79c0-580681-500x500.jpg",
        origen:"NACIONAL",
        genero: "Hombre",
        material: "Algodón",
        categoria: "remeras"  
    },
    {
        id: 2,
        titulo: "PANTALON JEAN PINS RIP CURL",
        precio: 2200,
        img: "https://www.digitalsport.com.ar/files/products/622244c909eff-578348-500x500.jpg",
        origen:"NACIONAL",
        genero: "Mujer",
        material: "Jean",
        categoria: "pantalones"
    },
    {
        id: 3,
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
            
            
                setProductos(productos) 
            })
        .catch(err => console.log(err))
        
        .finally(()=> setLoading(false)) 
    },[category])

    const onAdd = (itemSeleccionado) =>{
        console.loh("agregar")
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