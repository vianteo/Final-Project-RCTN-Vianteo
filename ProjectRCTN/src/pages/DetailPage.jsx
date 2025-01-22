import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { apiGetMoviesNowPlaying } from "../store/Action";
import CardComponent from "../components/CardComponent";

export default function HomePage() {
    const dataCoba = useSelector (state => state.dataCoba)
    const dataMovies = useSelector (state => state.dataMovies)
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(apiGetMoviesNowPlaying())
         }, [])
    return(
        <>
        <h1>This is Homepage {dataCoba}</h1>

        <div className="row">
        {
            dataMovies.map(el =>(
            <>
              <CardComponent original_title={el.original_title} popularity={el.popularity} overview={el.overview} release_date={el.release_date} poster_path={el.poster_path}/>
            </>

            ))
        }
        </div>
       
        {JSON.stringify(dataMovies)}
        </>
    )
}