import { reducer, on } from "ts-action";
import { loginRequested, loginSucceeded} from "../Actions/login-action"
interface Istate{
   res: string;
    
   login__is_loading:boolean
}
export const loginReducer = reducer<Istate>( {
    res: "",
    
    login__is_loading:false
},on(loginSucceeded,(state,{payload})=>(
  {
    ...state,
    res:payload,
    login__is_loading:false
})),on(loginRequested,(state)=>(
  {
    ...state,
    login__is_loading:true
}))
)