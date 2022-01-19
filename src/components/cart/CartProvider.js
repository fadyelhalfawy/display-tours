import {useReducer} from "react";
import CartContext from "./CartContext";

const defaultCartState = {
    tours: [],
    amount: 0,
    image: ""
};

const cartReducer = (state, action) => {
    if (action.type === "Remove") {
        const updateTours = state.tours.concat(action.tour);
        const updateAmount = state.amount + 1;
        const updateImage = action.tour.image;

        const newTours = action.tours.filter(t => t.id !== action.tour.id);
        action.setTours(newTours);

        return { tours: updateTours, amount: updateAmount, image: updateImage };
    }

    if (action.type === "RemoveItem") {
        const getTourRemoved = state.tours.filter(tour => tour.id === action.id);
        const newToursCart = state.tours.filter(tour => tour.id !== action.id);
        const updateAmount = state.amount - 1;

        const newTours = action.tours.concat(getTourRemoved);
        action.setTours(newTours);

        return { tours: newToursCart, amount: updateAmount }
    }
    return state;
};

const CartProvider = props => {
    const {setTour} = props;
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const removeTourHandler = (tours, tour) => dispatchCartAction({type: "Remove", setTours: setTour, tours: tours, tour: tour});

    const removeItemHandler = (id, tours) => dispatchCartAction({type: "RemoveItem", setTours: setTour, tours: tours, id: id});

    const cartContext = {
        tours: cartState.tours,
        amount: cartState.amount,
        image: cartState.image,
        removeTour: removeTourHandler,
        removeItem: removeItemHandler
    };

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;