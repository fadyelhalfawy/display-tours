import Loading from "./components/Loading";
import Tours from "./components/Tours";
import {Fragment, useEffect, useState} from "react";
const URL = 'https://course-api.com/react-tours-project';

const App = () => {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

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

    const removeItem = id => {
        const newTours = tours.filter(tour => tour.id !== id);
        setTours(newTours);
    };

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
        <Fragment>
            <main>
                <Tours tours={tours} removeItem={removeItem}/>
            </main>
        </Fragment>

    );
}
export default App;
