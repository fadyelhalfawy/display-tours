import {Fragment, useContext, useState} from "react";
import Modal from "../UI/Modal";
import classes from "../modules/Cart.module.css";
import CartContext from "./CartContext";
import CartTour from "./CartTour";

const doneButtonHandler = <p className={classes.total}>Successfully Done with all elements</p>;

const Cart = ({ tours: items, onClose }) => {
    const [didSubmit, setDidSubmit] = useState(false);

    const submitHandler = () => setDidSubmit(true);

    const cartContext = useContext(CartContext);

    const {tours, amount} = cartContext;

    const hasItems = tours.length > 0;

    const {removeTour} = cartContext;

    const cartItems = (
      <ul className={classes['cart-items']}>
          { cartContext.tours.map(tour => (
              <CartTour
                key={tour.id}
                id={tour.id}
                name={tour.name}
                price={tour.price}
                image={tour.image}
                tours={items}
                removeTour={removeTour.bind(null, tour.id)}
              />
          )) }
      </ul>
    );

    const cartItemsModal = (
        <Fragment>
            {cartItems}
            <div className={classes.total}>
                <span>Amount</span>
                <span>{amount}</span>
            </div>

            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={onClose}>Close</button>
                { hasItems && <button className={classes.button} onClick={submitHandler}>Done</button> }
            </div>
        </Fragment>
    )

    return(
        <Modal onClose={onClose}>
            {!didSubmit && cartItemsModal}
            {didSubmit && doneButtonHandler}
        </Modal>
    );
}

export default Cart;