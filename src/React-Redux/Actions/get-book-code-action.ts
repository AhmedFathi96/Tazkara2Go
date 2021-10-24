import {action , payload} from 'ts-action';
import{ getBookCodeAction } from './index';
export const getBookCodeRequested =action(getBookCodeAction.requested);
//()=>({type:getBookCodeAction.requested});
export const getBookCodeSucceeded=action(getBookCodeAction.fulfilled,payload<string>())
export const getBookCodeFailed =action(getBookCodeAction.rejected,payload<Error>());



