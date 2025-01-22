import axios from 'axios';
const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';

export const apiGetMoviesNowPlaying =(selectMovie = "now_playing") => {
    
    console.log(selectMovie, "aku terpanggil di action");
  
  return async (dispatch) => {
    try {
        const data = await axios({
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/${selectMovie}?language=en-US&page=1`,
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDM3MzE2OTIxZjk0MjI3ZTVjNjEwYzZkMjY3OTgyZSIsIm5iZiI6MTczNjk5MzcxMy43NTcsInN1YiI6IjY3ODg2YmIxYTY0ZmViMTZjOTFkMzBmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9wyaW4Fv7lb2bJr4BdQmEckq2JBfSK9iBVEAfyYgO30'
            } 
    })  
    console.log(data);
    dispatch ({
    type: "CHANGE_DATA_MOVIES",
    payload: data.data.results
    })

    }catch (error) {
        console.log(error);
        
    }
    }
   }

   export const apiGetMoviesSearch = (query) => {
    console.log(query, "aku terpanggil di action untuk search");

  
  return async (dispatch) => {
    try {
        const data = await axios({
            method: 'GET',
            url: `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=1`,
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDM3MzE2OTIxZjk0MjI3ZTVjNjEwYzZkMjY3OTgyZSIsIm5iZiI6MTczNjk5MzcxMy43NTcsInN1YiI6IjY3ODg2YmIxYTY0ZmViMTZjOTFkMzBmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9wyaW4Fv7lb2bJr4BdQmEckq2JBfSK9iBVEAfyYgO30'
            } 
    })  
    console.log(data);
    dispatch ({
    type: "CHANGE_DATA_MOVIES",
    payload: data.data.results
    })

    }catch (error) {
        console.log(error);
        
    }
    }
   }

   export const apiGetMovieDetail = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
                {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDM3MzE2OTIxZjk0MjI3ZTVjNjEwYzZkMjY3OTgyZSIsIm5iZiI6MTczNjk5MzcxMy43NTcsInN1YiI6IjY3ODg2YmIxYTY0ZmViMTZjOTFkMzBmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9wyaW4Fv7lb2bJr4BdQmEckq2JBfSK9iBVEAfyYgO30',
                    },
                }
            );
            dispatch({
                type: "CHANGE_DETAIL_MOVIES",
                payload: response.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};