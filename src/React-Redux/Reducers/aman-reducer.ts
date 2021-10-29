import { reducer, on } from "ts-action";
import { getData00Succeeded } from "../Actions/common-payment-actions";
import { finalDataAmanSucceeded } from "../Actions/payByAman-action";
interface IState{
   res:any,
   is_aman_payment_loading:boolean
}
export const amanReducer = reducer<IState>( {
    res:{},

  is_aman_payment_loading:false
    
  
},on(finalDataAmanSucceeded,(state,{payload})=>({
    ...state,
    res:payload,
    is_aman_payment_loading:true

   
}))
)