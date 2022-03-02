import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";



function App (){
    return (
        <>  
            <Header/>
            <Main
                title="Oahu Store"
                year="2022"
                inicio={1}
                precio="2000"
                stock="x"
                
            /> 
            
            <Footer/> 
        </>    
    ); 
}

export default App