import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { movieContext } from '../../App';
import Movies from '../Movies/Movies';

function App() {
    const [movies, setMovies] = useState(movieContext);
    console.log(movies);
    // const [items, allItems] = useState([])
    //   console.log(items[0].show.name)
    useEffect(() => {
        const url = `https://api.tvmaze.com/search/shows?q=all`
        fetch(url)
            .then(response => response.json())
            .then(data => setMovies(data))
    }, [])

    return (
        <section className="App">
            <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
                <div class="container-fluid">
                    <Link to="/" class="navbar-brand fw-bold text-success">Moview Hub</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <Link to="/" class="nav-link active fw-bold" aria-current="page" href="#">Home</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <h2 className="text-center text-success">here is the movies length{movies.length}</h2>
            <div className="container">
                <div className="row">
                    {
                        movies.length && 
                        movies?.map(item => <Movies item={item} />)
                    }
                </div>
            </div>

        </section>
    );
}

export default App;
