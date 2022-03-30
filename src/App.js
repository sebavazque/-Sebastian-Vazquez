import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import ItemListContainer from './ItemListContainer';
import {BrowserRouter} from 'react-router-dom'
import { Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";
import Carrito from './Carrito';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartContext from './CartContext';
import Categorias from './Categorias';



function App (){
    return (
        <CartContext> 
            <BrowserRouter>  
                <Header/>
                <Main
                    title="Oahu Store"
                    year="2022"
                /> 
                <Categorias/>
                <Routes>
                    <Route path="/item/:category" element={<ItemListContainer/>} ></Route>
                    <Route path="/categorias" element={<ItemListContainer/>}/>
                    <Route path="/inicio" element={<ItemListContainer/>}/>
                    <Route path="/" element={<ItemListContainer/>}/>
                    <Route path="/cart" element={<Carrito/>}/>
                    <Route path="/:categoria/:itemId" element={<ItemDetailContainer/>}/>
                </Routes>
                
                
                <ToastContainer/>
            </BrowserRouter>   
        </CartContext>
    )
}

export default App