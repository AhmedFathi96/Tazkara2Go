import {action , payload} from 'ts-action';
import { IChair } from '../../models';
import{holdChairAction } from './index';

export const holdChairRequested =action(holdChairAction.requested,payload<{ CinemaIpAdress:string,ShowTimeCod:string,hallId:string,ShowDate:string,ChairId:string,ChairPrice:string,bookcode:string,holdWaitingMinutes:string,ShowName:string,timein:string}>());
//()=>({type:getMoviesAction.requested});
export const holdChairSucceeded=action(holdChairAction.fulfilled,payload<IChair>())
export const holdChairFailed =action(holdChairAction.rejected,payload<Error>());