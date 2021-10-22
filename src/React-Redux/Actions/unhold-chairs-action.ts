import {action , payload} from 'ts-action';
import { IChair } from '../../models';
import{unholdChairsAction } from './index';

export const unholdChairsRequested =action(unholdChairsAction.requested,payload<{ CinemaIpAdress:string,ShowTimeCod:string,hallId:string,ShowDate:string,bookcode:string}>());
export const unholdChairsSucceeded=action(unholdChairsAction.fulfilled,payload<IChair[]>())
export const unholdChairsFailed =action(unholdChairsAction.rejected,payload<Error>());