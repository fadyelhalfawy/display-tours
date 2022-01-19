import classes from "../modules/CartItem.module.css";
import {useContext} from "react";
import CartContext from "./CartContext";

const CartTour = ({ id, name, price, image, tours }) => {
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
              <button onClick={() => removeItem(id, tours)}>−</button>
          </div>
      </li>
    );
}
export default CartTour;