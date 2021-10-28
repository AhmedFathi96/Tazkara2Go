import { reducer, on } from "ts-action";
import { ISanf } from "../../models";

import { getSanfByStockCodeRequested, getSanfByStockCodeSucceeded } from "../Actions/get-sanf-by-stockcode-action";
interface Istate{
    data: ISanf[],
    
    data__is_loading:boolean
}
export const sanfByStockcodeReducer = reducer<Istate>( {
    data: [],
    
    data__is_loading:false
},on(getSanfByStockCodeSucceeded, (state, { payload }) => ({
    
    ...state,
    data: payload,
    
    data__is_loading: false
})),on(getSanfByStockCodeRequested, (state) => ({
    
    ...state,
    data__is_loading: true
})),
)