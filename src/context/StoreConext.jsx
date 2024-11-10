import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext()

const StoreContextProvider = ({children}) => {

    const [isCartEmpty,setIsCartEmpty] = useState(true)
    const [showCart,setShowCart] = useState(false)
    const [cartItems,setCartItems] = useState([])
    const [cartTotal,setCartTotal] = useState(0)

    return (<StoreContext.Provider value={{isCartEmpty, setIsCartEmpty, cartItems, setCartItems,showCart,setShowCart,cartTotal,setCartTotal}}>
        {children}
    </StoreContext.Provider>)
}

export default StoreContextProvider