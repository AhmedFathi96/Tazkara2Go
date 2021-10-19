import {action , payload} from 'ts-action';
import{getHallChairsAction } from './index';
import{ IChair} from '../../models/index'
export const getHallChairsRequested =action(getHallChairsAction.requested,payload<{ CinemaIpAdress:string,ShowTimeCod:string,hallid:string}>());
//()=>({type:getMoviesAction.requested});
export const getHallChairsSucceeded=action(getHallChairsAction.fulfilled,payload<IChair[]>())
export const getHallChairsFailed =action(getHallChairsAction.rejected,payload<Error>());