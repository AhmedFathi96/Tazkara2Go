import { reducer, on } from "ts-action";
import { ITime} from '../../models';
import { getMovieCinemaTimesRequested, getMovieCinemaTimesSucceeded} from "../Actions/get-movie-cinema-times-action";
interface Istate{
    times: ITime[];
    
    movie_cinema_times__is_loading:boolean
}
export const movieCinemaTimesReducer = reducer<Istate>( {
    times: [],
    
    movie_cinema_times__is_loading:false
},on(getMovieCinemaTimesSucceeded,(state,{payload})=>({
    ...state,
    times:payload,
    movie_cinema_times__is_loading:false
})),on(getMovieCinemaTimesRequested,(state)=>({
    ...state,
    movie_cinema_times__is_loading:true
}))
)