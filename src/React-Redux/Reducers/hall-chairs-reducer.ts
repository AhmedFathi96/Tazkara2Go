import { reducer, on } from "ts-action";
import { IChair} from '../../models';
import { getHallChairsSucceeded} from "../Actions/get-hall-chairs-action";
interface Istate{
    chairs: IChair[];
    
    movie_hall_chairs__is_loading:boolean
}
export const hallChairsReducer = reducer<Istate>( {
    chairs: [],
    
    movie_hall_chairs__is_loading:false
},on(getHallChairsSucceeded,(state,{payload})=>({
    ...state,
    chairs:payload
}))
)