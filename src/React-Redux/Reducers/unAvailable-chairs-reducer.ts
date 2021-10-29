import { reducer, on } from "ts-action";
import { IChair} from '../../models';
import { getUnAvialableChairsRequested, getUnAvialableChairsSucceeded} from "../Actions/get-unAvailable-chairs-action";
interface Istate{
    unavailableChairs: IChair[];
    
    movie_unAvailable_chairs__is_loading:boolean
}
export const unAvailableChairsReducer = reducer<Istate>( {
    unavailableChairs: [],
    
    movie_unAvailable_chairs__is_loading:false
},on(getUnAvialableChairsSucceeded,(state,{payload})=>({
    ...state,
    unavailableChairs:payload,
    movie_unAvailable_chairs__is_loading:false
})),on(getUnAvialableChairsRequested,(state)=>({
    ...state,
    movie_unAvailable_chairs__is_loading:true
}))
)