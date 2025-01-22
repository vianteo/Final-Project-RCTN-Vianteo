import React from "react";
import { Link } from "react-router-dom";

export default function CardComponent({ id, original_title, popularity, overview, release_date, poster_path }) {
    return (
        <div className="card m-3" style={{ width: "18rem" }}>
            <img
                src={`http://image.tmdb.org/t/p/w500/${poster_path}`}
                className="card-img-top"
                alt={original_title}
            />
            <div className="card-body">
                <h5 className="card-title">{original_title}</h5>
                <p className="card-text overview-text">{overview}</p>
                <h6>Popularity: {popularity}</h6>
                <h6>Release Date: {release_date}</h6>
                <Link to={`/movie/${id}`} className="btn btn-primary">View Details</Link>
            </div>
        </div>
    );
}
