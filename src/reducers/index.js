import { ADD_FAVOURITES } from "../actions";
import {ADD_MOVIES} from "../actions";
import {REMOVE_FROM_FAVOURITES} from "../actions";


const initialMoviesState = {
    list:[],
    favourites: []
}

export default function movies(state = initialMoviesState, action){
    // if(action.type === ADD_MOVIES)
    // {
    //     return {
    //         ...state,
    //         list: action.movies
    //     }
    // }
    // return state;

    switch(action.type){
        case ADD_MOVIES:
            return {
                        ...state,
                        list: action.movies
                    }
        case ADD_FAVOURITES:
            return{
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        case REMOVE_FROM_FAVOURITES:
            return{
                ...state,
                favourites: state.favourites.filter(
                    movie => movie.Title !== action.movie.Title
                )
            }
        default:
            return state;
    }
}