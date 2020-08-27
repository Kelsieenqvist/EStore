import React, { useState, useEffect } from "react"

export const CartContext = React.createContext();

export const CartProvider = (props) => {

    const initialCount = localStorage.getItem('cart') == null ? 0 : JSON.parse(localStorage.getItem('cart')).length
    const [cart, setCart] = useState(initialCount)

    useEffect(() => {
        setCart(initialCount)
    })

    return (
        <CartContext.Provider value={[cart, setCart]}>
            {props.children}
        </CartContext.Provider>
    )
}