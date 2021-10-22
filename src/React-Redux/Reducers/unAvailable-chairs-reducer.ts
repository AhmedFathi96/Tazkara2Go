import { reducer, on } from "ts-action";
import { IChair} from '../../models';
import { getUnAvialableChairsSucceeded} from "../Actions/get-unAvailable-chairs-action";
interface Istate{
    chairs: IChair[];
    
    movie_unAvailable_chairs__is_loading:boolean
}
export const unAvailableChairsReducer = reducer<Istate>( {
    chairs: [],
    
    movie_unAvailable_chairs__is_loading:false
},on(getUnAvialableChairsSucceeded,(state,{payload})=>({
    ...state,
    chairs:payload
}))
)