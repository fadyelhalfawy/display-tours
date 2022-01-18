import React from "react";

const CartContext = React.createContext({
    tours: [],
    amount: 0,
    removeTour: tour => {}
});

export default CartContext;