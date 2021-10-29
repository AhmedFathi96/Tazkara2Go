import { reducer, on } from "ts-action";
import { IWorker } from '../../models';
import { getMovieWorkersRequested, getMovieWorkersSucceeded } from "../Actions/get-movie-workers-action";
interface Istate{
    workers: IWorker[];
    crew:IWorker[];
    cast:IWorker[];
    movie_workers__is_loading:boolean
}
export const movieWorkersReducer = reducer<Istate>( {
    workers: [],
    crew:[],
    cast:[],
    movie_workers__is_loading:false
},on(getMovieWorkersSucceeded, (state, { payload }) => ({
    
    ...state,
    workers: payload,
    cast:payload.filter(item =>item.workerRole.includes("Actor") || item.workerRole.includes("Voice")),
    crew:payload.filter (item=> !(item.workerRole.includes("Actor") ||item.workerRole.includes("Voice"))),
    movie_workers__is_loading: false
})),on(getMovieWorkersRequested ,(state) => ({
    
    ...state,
    movie_workers__is_loading: true
}))
)