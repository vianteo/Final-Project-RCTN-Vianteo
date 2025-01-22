import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { apiGetMovieDetail } from "../store/Action";

export default function DetailPage() {
    const { id } = useParams(); 
    const dispatch = useDispatch();
    const detailMovies = useSelector((state) => state.detailMovies);

    useEffect(() => {
        if (id) {
            dispatch(apiGetMovieDetail(id)); 
        }
    }, [id, dispatch]);

    return (
        <div>
            <h1>Baca Sinopsis Lengkap Siapa Tau Tertarik</h1>
            {detailMovies ? (
                <div className="card">
                    <img
                        src={`http://image.tmdb.org/t/p/w500/${detailMovies.backdrop_path}`}
                        className="card-img-top"
                        alt={detailMovies.original_title}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{detailMovies.original_title}</h5>
                        <p className="card-text">{detailMovies.overview}</p>
                        <h6>Release Date: {detailMovies.release_date}</h6>
                        <h6>Popularity: {detailMovies.popularity}</h6>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
