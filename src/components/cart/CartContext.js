import React from "react";

const CartContext = React.createContext({
    tours: [],
    amount: 0,
    image: "",
    removeTour: (tours, tour) => {},
    removeItem: id => {}
});

export default CartContext;