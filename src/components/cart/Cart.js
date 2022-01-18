import classes from "../modules/Cart.module.css";
import {useContext} from "react";
import CartContext from "./CartContext";
import Modal from "../UI/Modal";
import CartTour from "./CartTour";

const Cart = ({ onClose }) => {
    const cartContext = useContext(CartContext);

    const amount = `${cartContext.amount}`;
    const hasItems = cartContext.tours.length > 0;

    const cartTourRemove = id => cartContext.removeTour(id);

    const cartItems = (
      <ul>
          { cartContext.tours.map(tour => (
              <CartTour
                key={tour.id}
                name={tour.name}
                price={tour.price}
                removeTour={cartTourRemove.bind(null, tour.id)}
              />
          )) }
      </ul>
    );

    return(
        <Modal onClose={onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Amount</span>
                <span>{amount}</span>
            </div>

            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={onClose}>Close</button>
                { hasItems && <button className={classes.button}>Done</button> }
            </div>
        </Modal>
    );
}

export default Cart;