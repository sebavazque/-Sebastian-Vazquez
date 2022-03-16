import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import ItemListContainer from './ItemListContainer';
//import ItemDetailContainer from './ItemDetailContainer';
import CartWidget from "./CartWidget";
import {BrowserRouter} from 'react-router-dom'
import { Route, Routes } from "react-router-dom";





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
                <Route path="/carrito" element={<CartWidget/>}/>
                
            </Routes>
            
            <Footer/> 
        </BrowserRouter>   
    ); 
}

export default App