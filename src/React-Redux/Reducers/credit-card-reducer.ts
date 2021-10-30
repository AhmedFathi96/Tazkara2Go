import { reducer, on } from "ts-action";
import { getData00Succeeded } from "../Actions/common-payment-actions";
import { finalDataCardRequested, finalDataCardSucceeded } from "../Actions/payByCard-action";
interface IState{
    credit_card_key:any,
    is_aman_payment_loading:boolean
}
export const cardReducer = reducer<IState>( {
  credit_card_key:"",

  is_aman_payment_loading:false
    
  
},on(finalDataCardSucceeded,(state,{payload})=>({
    ...state,
    credit_card_key:payload,
    is_aman_payment_loading:false

   
})),on(finalDataCardRequested,(state)=>({
  ...state,
  is_aman_payment_loading:true

 
}))
)