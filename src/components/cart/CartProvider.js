import CartContext from "./CartContext";
import {useReducer} from "react";

const defaultCartState = {
    tours: [],
    amount: 0
};

const cartReducer = (state, action) => {
  const updateTours = state.tours.concat(action.tour);
  const updateAmount = state.amount + 1;
  return { tours: updateTours, amount: updateAmount };
};

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const removeTourHandler = tour => {
        console.log(tour);
        dispatchCartAction({tour: tour});
    };

    const cartContext = {
        tours: cartState.tours,
        amount: cartState.amount,
        removeTour: removeTourHandler
    };

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;