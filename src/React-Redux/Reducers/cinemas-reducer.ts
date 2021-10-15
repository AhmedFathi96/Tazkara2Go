import { reducer, on } from "ts-action";
import { ICinema } from '../../models';
import { getCinemasSucceeded } from "../Actions/cinema-action";
interface Istate{
    cinemas: ICinema[];
    cinemas_is_loading:boolean
}
export const cinemasReducer = reducer<Istate>( {
    cinemas: [],
    cinemas_is_loading:false
},on(getCinemasSucceeded, (state, { payload }) => ({
    
    ...state,
    cinemas: payload,
    cinemas_is_loading: true
}))
)