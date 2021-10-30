import { reducer, on } from "ts-action";
import { finalDataAmanRequested, finalDataAmanSucceeded } from "../Actions/payByAman-action";
interface IState{
  amanData:any,
  is_aman_payment_loading:boolean
}
export const amanReducer = reducer<IState>( {
  amanData:{},

  is_aman_payment_loading:false
    
  
},on(finalDataAmanRequested,(state)=>({
    ...state,
    is_aman_payment_loading:true

  
})),on(finalDataAmanSucceeded,(state,{payload})=>({
  ...state,
  amanData:payload,
  is_aman_payment_loading:false


}))
)