import {useEffect, useState} from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";
import CartProvider from "./components/cart/CartProvider";
import Cart from "./components/cart/Cart";

const URL = 'https://course-api.com/react-tours-project';

const App = () => {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => setCartIsShown(true);

    const hideCartHandler = () => setCartIsShown(false);

    const getTours = async () => {
        setLoading(true);
        try{
            const response = await fetch(URL);
            const tours = await response.json();
            setLoading(false);
            setTours(tours);
        }
        catch (ex) {
            setLoading(true);
            console.log(ex);
        }
    };

    useEffect(() => {
            getTours()
    }, []);

    if (loading) {
        return (
            <main>
                <Loading />
            </main>
        )
    }

    if (tours.length === 0) {
        return (
            <main>
                <div className='title'>
                    <h2>no tours left</h2>
                    <button className='btn' onClick={getTours}>
                        Refresh Page!
                    </button>
                </div>
            </main>
        )
    }

    return (
        <CartProvider setTour={setTours}>
            {cartIsShown && < Cart onClose={hideCartHandler}/>}
            <main>
                <Tours tours={tours} onShow={showCartHandler}/>
            </main>
        </CartProvider>

    );
}
export default App;
