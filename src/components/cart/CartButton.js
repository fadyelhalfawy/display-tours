import classes from "../modules/HeaderCartButton.module.css";
import CartIcon from "./CartIcon";
import {useContext, useEffect, useState} from "react";
import CartContext from "../cart/CartContext";

const CartButton = ({ onShow }) => {
    const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);
    const { tours, amount } = useContext(CartContext);
    console.log(tours);
    const btnClasses = `${classes.badge} ${ btnIsHighLighted ? classes.bump : ""}`;
    const numberOfCartItems = amount;
    console.log(numberOfCartItems);

    useEffect(() => {
        if (tours.length === 0) return;

        setBtnIsHighLighted(true);

        const timer = setTimeout( () => {
            setBtnIsHighLighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [tours]);

    return (

      <button className={classes.button} onClick={onShow}>

      <span className={classes.icon}>
          <CartIcon />
      </span>

       <span>
          Your Cart
      </span>

      <span className={btnClasses}>
          {numberOfCartItems}
      </span>

        </button>
    );
};
export default CartButton;