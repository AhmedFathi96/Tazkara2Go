import { reducer, on } from "ts-action";
import { IChair} from '../../models';
import { holdChairRequested, holdChairSucceeded} from "../Actions/hold-chair-action";
interface Istate{
    chairs: IChair[];
    
    movie_hold_chair__is_loading:boolean
}
export const holdChairReducer = reducer<Istate>( {
    chairs: [],
    
    movie_hold_chair__is_loading:false
},on(holdChairSucceeded,(state,{payload})=>({
    ...state,
    chairs:[...state.chairs,payload],
    movie_hold_chair__is_loading:false
})),on(holdChairRequested,(state)=>({
    ...state,
    movie_hold_chair__is_loading:true
})),
)