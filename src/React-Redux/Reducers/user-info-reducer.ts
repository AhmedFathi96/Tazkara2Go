import { reducer, on } from "ts-action";
import { IUserInfo } from "../../models";
import {getUserInfoRequested, getUserInfoSucceeded} from "../Actions/get-user-info-action"
interface Istate{
   info: IUserInfo,
    
    info__is_loading:boolean
}
export const userInfoReducer = reducer<Istate>( {
   info:{UserEmail:"",UserName:" ",UserPhone:" "},
    info__is_loading:false
},on(getUserInfoSucceeded,(state,{payload})=>({
    ...state,
    info:payload,
    info__is_loading:false
})),on(getUserInfoRequested,(state)=>({
    ...state,
    info__is_loading:true
}))
)