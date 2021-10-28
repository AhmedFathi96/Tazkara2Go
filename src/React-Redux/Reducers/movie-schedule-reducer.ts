import { reducer, on } from "ts-action";
import { getMovieScheduleRequested, getMovieScheduleSucceeded} from "../Actions/get-movie-schedule";
interface IState{
    movieSchedule: any[];
    
    movieSchedule_is_loading:boolean
}
export const movieScheduleReducer = reducer<IState>( {
    movieSchedule: [],
    movieSchedule_is_loading:false
},on(getMovieScheduleSucceeded,(state,{payload})=>({
    ...state,
    movieSchedule:payload,
    movieSchedule_is_loading:false
})),on(getMovieScheduleRequested,(state)=>({
    ...state,
    movieSchedule_is_loading:true
}))
)