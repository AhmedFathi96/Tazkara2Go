import { reducer, on } from "ts-action";
import { getBookCodeSucceeded} from "../Actions/get-book-code-action";
interface IState{
    bookCode: string;
    
    bookCode_is_loading:boolean
}
export const bookCodeReducer = reducer<IState>( {
    bookCode: "",
    
    bookCode_is_loading:false
},on(getBookCodeSucceeded,(state,{payload})=>({
    ...state,
    bookCode:payload
}))
)