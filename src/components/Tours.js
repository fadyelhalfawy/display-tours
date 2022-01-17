import Tour from "./Tour";

const Tours = ({ tours, removeItem }) => {



    return(
        <section>
            <div className={'title'}>
                <h1>Our Tours</h1>
                <div className={'underline'}></div>
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
