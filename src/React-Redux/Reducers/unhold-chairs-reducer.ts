import { reducer, on } from "ts-action";
import { IChair} from '../../models';
import { unholdChairsSucceeded} from "../Actions/unhold-chairs-action";
interface Istate{
    chairs: IChair[];
    
    movie_unhold_chairs__is_loading:boolean
}
export const holdChairsReducer = reducer<Istate>( {
    chairs: [],
    
    movie_unhold_chairs__is_loading:false
},on(unholdChairsSucceeded,(state,{payload})=>({
    ...state,
    chairs:payload,
    movie_unhold_chairs__is_loading:true
}))
)