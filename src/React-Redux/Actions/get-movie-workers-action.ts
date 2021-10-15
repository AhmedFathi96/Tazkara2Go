import {action , payload} from 'ts-action';
import{getMovieWorkersAction } from './index';
import{ IWorker} from '../../models/index'
export const getMovieWorkersRequested =action(getMovieWorkersAction.requested,payload<{ id: string}>());
//()=>({type:getMoviesAction.requested});
export const getMovieWorkersSucceeded=action(getMovieWorkersAction.fulfilled,payload<IWorker[]>())
export const getMovieWorkersFailed =action(getMovieWorkersAction.rejected,payload<Error>());