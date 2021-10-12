import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { movieContext } from '../../App';

export default function MoviesDetails() {
    const { id } = useParams()
    console.log(id)

    const [movies, setMovies] = useState(movieContext);
  
    useEffect(() => {
        if (movies.length) {
            const singleMovie = movies.find(mb => mb?.id === id)
            console.log(singleMovie)
        }
        console.log(movies)
    }, [id])

    // const [details, setDetails] = useState([])

    // console.log(details)

    // useEffect(() => {
    //     const url = `https://api.tvmaze.com/search/shows?q=${id}`
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setDetails(data))
    // }, [])


    return (
        <div className="container mt-4 pt-4 ">
            <div className="card justify-content-center align-items-center" style={{ width: '15rem' }}>
                <div className="card-body">
                    <h5 className="card-title text-success">Name: { }</h5>
                    <p className="card-text text-success">Type: { }</p>
                    <Link to="/details" className="btn btn-danger">Book now</Link>
                </div>
            </div>

        </div>
    )
}
