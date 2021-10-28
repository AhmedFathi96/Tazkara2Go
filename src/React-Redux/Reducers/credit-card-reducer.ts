import { reducer, on } from "ts-action";
import { getData00Succeeded } from "../Actions/common-payment-actions";
import { finalDataCardRequested, finalDataCardSucceeded } from "../Actions/payByCard-action";
interface IState{
   res:any,
   is_aman_payment_loading:boolean
}
export const cardReducer = reducer<IState>( {
    res:{},

  is_aman_payment_loading:false
    
  
},on(finalDataCardSucceeded,(state,{payload})=>({
    ...state,
    res:payload,
    is_aman_payment_loading:false

   
})),on(finalDataCardRequested,(state)=>({
  ...state,
  is_aman_payment_loading:true

 
}))
)