import React from "react";

const CartContext = React.createContext({
    tours: [],
    amount: 0,
    removeTour: id => {}
});

export default CartContext;