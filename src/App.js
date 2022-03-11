import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import {BrowserRouter} from 'react-router-dom'




function App (){
    return (
        <BrowserRouter>  
            <Header/>
            <Main
                title="Oahu Store"
                year="2022"
            /> 
            <ItemListContainer/>
            <ItemDetailContainer/>
            <Footer/> 
        </BrowserRouter>   
    ); 
}

export default App