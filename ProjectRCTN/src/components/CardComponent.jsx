import React from "react";

export default function CardComponent({original_title, popularity, overview, release_date, poster_path}){

    return (
        <>
        <div className="card m-3" style={{width: "18rem"}}>
        <img src={`http://image.tmdb.org/t/p/w500/${poster_path}`} class="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{original_title}</h5>
        <p className="card-text">{overview}</p>
        <h6>{popularity}</h6>
        <h6>{release_date}</h6>
        <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </>
    )
}