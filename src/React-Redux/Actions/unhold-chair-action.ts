import {action , payload} from 'ts-action';
import { IChair } from '../../models';
import{unholdChairAction } from './index';

export const unholdChairRequested =action(unholdChairAction.requested,payload<{ CinemaIpAdress:string,ShowTimeCod:string,hallId:string,ShowDate:string,ChairId:string,bookcode:string}>());
//()=>({type:getMoviesAction.requested});
export const unholdChairSucceeded=action(unholdChairAction.fulfilled,payload<IChair>())
export const unholdChairFailed =action(unholdChairAction.rejected,payload<Error>());