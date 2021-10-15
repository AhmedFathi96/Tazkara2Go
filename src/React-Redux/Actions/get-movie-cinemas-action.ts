import {action , payload} from 'ts-action';
import{getMovieCinemasAction } from './index';
import{ ICinema} from '../../models/index'
export const getMovieCinemasRequested =action(getMovieCinemasAction.requested,payload<{ id: string}>());
//()=>({type:getMoviesAction.requested});
export const getMovieCinemasSucceeded=action(getMovieCinemasAction.fulfilled,payload<ICinema[]>())
export const getMovieCinemasFailed =action(getMovieCinemasAction.rejected,payload<Error>());