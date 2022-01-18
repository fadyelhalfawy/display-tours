import Tour from "./Tour";
import CartButton from "./cart/CartButton";

const Tours = ({ tours, onShow, removeItem }) => {
    return(
        <section>
            <div className={'title container'}>
                    <div>
                        <h1>Our Tours</h1>
                        <div className={'underline'}></div>
                    </div>

                    <div><CartButton onShow={onShow}/></div>
            </div>

            <div>
                {tours.map(tour => {
                    return <Tour key={tour.id} tour={tour} removeItem={removeItem} {...tour}/>
                })}
            </div>
        </section>
    );
}

export default Tours;
