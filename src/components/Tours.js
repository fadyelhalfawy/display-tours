import Tour from "./Tour";
import CartButton from "./cart/CartButton";

const Tours = ({ tours, onShow }) => {
    return(
        <section>
            <div className={'title container'}>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <h1>Our Tours</h1>
                                <div className={'underline'}></div>
                            </li>
                        </ul>
                        <div><CartButton onShow={onShow}/></div>
                    </div>
                </nav>
            </div>

            <div>
                {tours.map(tour => {
                    return <Tour key={tour.id} tour={tour} tours={tours} {...tour}/>
                })}
            </div>
        </section>
    );
}

export default Tours;
