import { useState, useEffect } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './layout/Main';

const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY)

function App() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        handleSubmit('matrix')
    }, []);
    
    function handleSubmit(param, type = 'all') {
        setLoading(true);
        setTimeout(() => {
            fetch(
                `https://www.omdbapi.com/?apikey=${API_KEY}&s=${param}${type !== 'all' ? `&type=${type}` : ''}`
            )
            .then((res) => res.json())
            .then((data) => {
                setLoading(false);
                setMovies(data.Search);
                console.log(data.Search);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
        }, 2000);
    }

    return (
        <>
            <Header onSubmitForm={handleSubmit} />
            <Main movies={movies} loading={loading} />
            <Footer/>
        </>

    );
}

export default App;
