import { reducer, on, payload } from "ts-action";
import { loginSucceeded} from "../Actions/login-action"
interface Istate{
   res: string;
    
   login__is_loading:boolean
}
export const loginReducer = reducer<Istate>( {
    res: "",
    
    login__is_loading:false
},on(loginSucceeded,(state,{payload})=>(
  {
    
    res:payload,
    login__is_loading:true
}))
)