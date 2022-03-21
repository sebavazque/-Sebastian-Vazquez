import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import ItemListContainer from './ItemListContainer';
import CartWidget from "./CartWidget";
import {BrowserRouter} from 'react-router-dom'
import { Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";
import Carrito from './Carrito';






function App (){
    return (
        <BrowserRouter>  
            <Header/>
            <Main
                title="Oahu Store"
                year="2022"
            /> 
            <Routes>
                <Route path="/item/:category" element={<ItemListContainer/>}/>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/carrito" element={<Carrito/>}/>
                <Route path="/:categoria/:itemId" element={<ItemDetailContainer/>}/>
            </Routes>
            
            <Footer/> 
        </BrowserRouter>   
    ); 
}

export default App