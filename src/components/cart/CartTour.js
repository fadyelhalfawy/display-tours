import classes from "../modules/CartItem.module.css";

const CartTour = ({ name, price, removeTour }) => {
    const priceFixed = `$${price.toFixed(2)}`;

    return(
      <li className={classes['cart-item']}>
          <div>
              <h2>{name}</h2>
              <div className={classes.summary}>
                  <span className={classes.price}>{priceFixed}</span>
              </div>
          </div>
          <div className={classes.actions}>
              <button onClick={removeTour}>−</button>
          </div>
      </li>
    );
}
export default CartTour;