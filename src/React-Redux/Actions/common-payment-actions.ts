import {action , payload} from 'ts-action';
import{ dataAction, dataOrderAction, getData00Action } from './index';
export const getData00Requested =action(getData00Action.requested);
export const getData00Succeeded=action(getData00Action.fulfilled,payload<any>())
export const getData00Failed =action(getData00Action.rejected,payload<Error>());
///////////////////////////////////
export const dataRequested =action(dataAction.requested);
export const dataSucceeded=action(dataAction.fulfilled,payload<any>())
export const dataFailed =action(dataAction.rejected,payload<Error>());
/////////////////////////////////////////////
export const  dataOrderRequested=action(dataOrderAction.requested);
export const  dataOrderSucceedrd=action(dataOrderAction.fulfilled,payload<any>());
export const  dataOrderFailed=action(dataOrderAction.rejected,payload<Error>());
/////////////////////////////
export const  data1Requested=action(dataOrderAction.requested);
export const  data1Succeedrd=action(dataOrderAction.fulfilled,payload<any>());
export const  data1Failed=action(dataOrderAction.rejected,payload<Error>());



