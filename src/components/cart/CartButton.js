import classes from "../modules/HeaderCartButton.module.css";
import CartIcon from "./CartIcon";
import {useContext, useEffect, useState} from "react";
import CartContext from "../cart/CartContext";

const CartButton = ({ onShow }) => {
    const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);
    // const { items } = useContext(CartContext);
    const btnClasses = `${classes.badge} ${ btnIsHighLighted ? classes.bump : ""}`;
    // const numberOfCartItems = items.tours.reduce((a, b) => a + b, 0);

    // useEffect(() => {
    //     if (items.tours.length === 0) return;
    //
    //     setBtnIsHighLighted(true);
    //
    //     const timer = setTimeout( () => {
    //         setBtnIsHighLighted(false);
    //     }, 300);
    //
    //     return () => {
    //         clearTimeout(timer);
    //     };
    // }, [items.tours]);

    return (

      <button className={classes.button} onClick={onShow}>

      <span className={classes.icon}>
          <CartIcon />
      </span>

       <span>
          Your Cart
      </span>

      <span className={btnClasses}>
          {0}
      </span>

        </button>
    );
};
export default CartButton;