import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { movieContext } from '../../App';

export default function Movies({item:{show}}) {
    const {id, name, type, thetvdb } = show;

    const [movies, setMovies] = useState(movieContext);
    console.log(movies)

    // const [items, allItems] = useState([])
    // //   console.log(items[0].show.name)
    // useEffect(() => {
    //     const url = `https://api.tvmaze.com/search/shows?q=all`
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(data => allItems(data))
    // }, [])
 

    return (
        <section className="col my-2 w-100">
            <div className="card justify-content-center align-items-center" style={{ width: '15rem' }}>
                <div className="card-body">
                    <h5 className="card-title text-success">Name: {name}</h5>
                    <p className="card-text text-success">Type: {type}</p>
                    <Link to={`details/${id}`} className="btn btn-success">Read more</Link>
                </div>
            </div>
        </section>
    )
}
