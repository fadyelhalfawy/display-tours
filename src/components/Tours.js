import Tour from "./Tour";
import CartButton from "./cart/CartButton";

const Tours = ({ tours, removeItem }) => {
    return(
        <section>
            <div className={'title'}>
                <header>
                    <h1>Our Tours</h1>
                    <div className={'underline'}></div>
                    <CartButton />
                </header>
            </div>

            <div>
                {tours.map(tour => {
                    return <Tour key={tour.id} removeItem={removeItem} {...tour}/>
                })}
            </div>
        </section>
    );
}

export default Tours;
