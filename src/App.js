import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import ItemListContainer from './ItemListContainer';




function App (){
    return (
        <>  
            <Header/>
            <Main
                title="Oahu Store"
                year="2022"
            /> 
            <ItemListContainer/>
            <Footer/> 
        </>    
    ); 
}

export default App