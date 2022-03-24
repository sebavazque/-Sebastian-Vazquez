import {createContext , useState, useContext} from "react";


const AppContext = createContext([]);

export const useAppContext = () => useContext(AppContext)

export default function AppContextProvider({children}) {
    const [cart, setCart] = useState([]);

    function addToCart(item) {
        let list = [...cart]
        if(list.some(e => e.item.id === item.item.id)){
            list.find(e => e.item.id === item.item.id).quantity += item.quantity
            setCart(list)
        } else{
            setCart([...cart, item])
    }
    
}
    return(
        <AppContext.Provider value={{cart, addToCart}}>
            {children}
        </AppContext.Provider>
        
    )
}
