import {applyMiddleware, createStore} from "redux"
import {thunk} from "redux-thunk"
 
const initialState = {
    dataMovies: [],
    detailMovies: {},

    dataCoba:"Untuk Nonton Gratis"
}
 
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_DATA_MOVIES":
            return{...state, dataMovies: action.payload}
       
        case "CHANGE_DETAIL_MOVIES":
            return{...state, detailMovies: action.payload}
 
        default:
            return state;
    }
}
 
let store = createStore(reducer, applyMiddleware(thunk))
 
export default store