import { reducer, on } from "ts-action";
import { ICinema} from '../../models';
import { getMovieCinemasSucceeded } from "../Actions/get-movie-cinemas-action";
interface Istate{
    cinemas: ICinema[];
    
    movie_cinemas__is_loading:boolean
}
export const movieCinemasReducer = reducer<Istate>( {
    cinemas: [],
    
    movie_cinemas__is_loading:false
},on(getMovieCinemasSucceeded,(state,{payload})=>({
    ...state,
    cinemas:payload
}))
)