import classes from "../modules/CartItem.module.css";
import {useContext} from "react";
import CartContext from "./CartContext";

const CartTour = ({ name, price, image }) => {
    const {removeItem} = useContext(CartContext);

    return(
      <li className={classes['cart-item']}>
          <article className={"single-tour"}>
              <img src={image} alt={name} />
              <div className={'tour-info'}>
                  <h2>{name}</h2>
                  <div className={classes.summary}>
                      <span className={'tour-price'}>${price}</span>
                  </div>
              </div>
          </article>
          <div className={classes.actions}>
              <button onClick={removeItem}>−</button>
          </div>
      </li>
    );
}
export default CartTour;