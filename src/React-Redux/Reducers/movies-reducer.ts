import { reducer, on } from "ts-action";
import { IMovie } from '../../models';
import { getMoviesRequested, getMoviesSucceeded } from "../Actions/get-movies-action";
import { getCinemaMoviesRequested, getCinemaMoviesSucceeded } from "../Actions/get-cinema-movies-action";

interface Istate{
    movies: IMovie[];
    nowshowing:IMovie[];
    comingsoon:IMovie[];
    movies_is_loading:boolean
}
export const moviesReducer = reducer<Istate>( {
    movies: [],
    nowshowing:[],
    comingsoon:[],
    movies_is_loading:true
},on(getMoviesSucceeded, (state, { payload }) => ({
    
    ...state,
    movies: payload,
    nowshowing:payload.filter(a=>+a.IsCurrent === 1),
    comingsoon:payload.filter(a=>+a.IsCurrent === 0),
    movies_is_loading: false
})),on(getCinemaMoviesSucceeded , (state,{payload}) =>({
    ...state,
    movies: payload,
    movies_is_loading: false
})),on(getCinemaMoviesRequested , (state) =>({
    ...state,
    movies_is_loading: true
})),on(getMoviesRequested, (state) =>({
    ...state,
    movies_is_loading:true
}))
)