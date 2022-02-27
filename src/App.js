import Header from "./Header";
import Footer from "./Footer";
import ItemListContainer from "./ItemListContainer";

function App (){
    return (
        <>  
            <Header/>
            <ItemListContainer
                title="Waimea Store"
                year="2022"
            /> 
            <Footer/> 
        </>    
    ); 
}

export default App