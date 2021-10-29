import { reducer, on } from "ts-action";
import { getCurrentDateTimeRequested, getCurrentDateTimeSucceeded } from "../Actions/get-current-date-time";
interface Istate{
    currentDateTime:string,
    currentDateTime_is_loading:boolean
}
export const currentDateTimeReducer = reducer<Istate>( {
   currentDateTime:'',
   currentDateTime_is_loading:false
},on(getCurrentDateTimeRequested, (state) => ({
    
    ...state,
    currentDateTime_is_loading: true
})),on(getCurrentDateTimeSucceeded,(state,{payload}) => ({
    
    ...state,
    currentDateTime:payload,
    currentDateTime_is_loading: false
}))
)