import {action , payload} from 'ts-action';
import{getMovieCinemaTimesAction } from './index';
import{ ITime} from '../../models/index'
export const getMovieCinemaTimesRequested =action(getMovieCinemaTimesAction.requested,payload<{ ip: string,showName:string}>());
//()=>({type:getMoviesAction.requested});
export const getMovieCinemaTimesSucceeded=action(getMovieCinemaTimesAction.fulfilled,payload<ITime[]>())
export const getMovieCinemaTimesFailed =action(getMovieCinemaTimesAction.rejected,payload<Error>());