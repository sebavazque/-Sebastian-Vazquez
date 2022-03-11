
import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"







const ItemDetailContainer = (props) => {

    const [loading, setLoading] = useState(true)
    const [producto, setProductos] = useState([])

    const productos = [{
        id: 1,
        titulo: "REMERA STD CALIFORNIA RIP CURL",
        precio: 1200,
        img: "https://www.digitalsport.com.ar/files/products/61faefe9b79c0-580681-500x500.jpg",
        origen:"NACIONAL",
        genero: "Hombre",
        material: "Algodón",
        cuello: "Redondo"

        
    }
]

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
            <p>{loading ? "Cargando..." : ""}</p>
            {producto.map((producto)=>{
                        return <ItemDetail producto={producto} key ={producto.id}/>
                    })}
        </div>
    );
}


export default  ItemDetailContainer