import {useContext, useState} from "react";
import CartContext from "./cart/CartContext";

const Tour = ({ tours, tour, name, price, info, image }) => {
    const [readMore, setReadMore] = useState(false);
    const {removeTour} = useContext(CartContext);

    return(
        <article className={'single-tour'}>
            <img src={image} alt={name} />
            <footer>
                <div className={'tour-info'}>
                    <h4>{name}</h4>
                    <h4 className={'tour-price'}>${price}</h4>
                </div>

                <p>{readMore ? info : `${info.substring(0, 200)}...`}
                    <button
                        onClick={() => setReadMore(!readMore)}>

                        {readMore ? 'Show less' : 'Read more'}

                    </button>
                </p>

                <button
                    className={'delete-btn'}
                    onClick={() => removeTour(tours, tour)}>
                    Not Interested
                </button>
            </footer>
        </article>
    );
}
export default Tour;