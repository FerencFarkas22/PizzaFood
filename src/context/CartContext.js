import React from "react";

export const CartContextDefault = {
    value: [],
    setValue: () => {}
}

export const CartContext = React.createContext(CartContextDefault);