import { reducer, on } from "ts-action";
import { IChair} from '../../models';
import { unholdChairSucceeded} from "../Actions/unhold-chair-action";
interface Istate{
    chairs: IChair[];
    
    movie_unhold_chair__is_loading:boolean
}
export const unholdChairReducer = reducer<Istate>( {
    chairs: [],
    
    movie_unhold_chair__is_loading:false
},on(unholdChairSucceeded,(state,{payload})=>({
    ...state,
    chairs:[...state.chairs,payload],
    movie_unhold_chair__is_loading:true
}))
)