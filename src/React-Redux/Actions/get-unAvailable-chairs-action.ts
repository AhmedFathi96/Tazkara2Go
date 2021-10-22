import {action , payload} from 'ts-action';
import{getUnAvialableChairsAction} from './index';
import{ IChair} from '../../models/index'
export const getUnAvialableChairsRequested =action(getUnAvialableChairsAction.requested,payload<{ CinemaIpAdress:string,hallId:string,ShowDate:string,ShowTimeCod:string,ShowName:string}>());
//()=>({type:getMoviesAction.requested});
export const getUnAvialableChairsSucceeded=action(getUnAvialableChairsAction.fulfilled,payload<IChair[]>())
export const getUnAvialableChairsFailed =action(getUnAvialableChairsAction.rejected,payload<Error>());