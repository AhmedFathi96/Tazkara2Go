import { reducer, on } from "ts-action";
import {registerSucceeded} from "../Actions/register-action"
interface Istate{
   res: string;
    
    register__is_loading:boolean
}
export const registerReducer = reducer<Istate>( {
    res: "",
    
    register__is_loading:false
},on(registerSucceeded,(state,{payload})=>({
    ...state,
    res:payload,
    register__is_loading:true
}))
)