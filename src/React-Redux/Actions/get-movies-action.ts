import {action , payload} from 'ts-action';
import{ getMoviesAction } from './index';
import{IMovie} from '../../models/index'
export const getMoviesRequested =action(getMoviesAction.requested);
//()=>({type:getMoviesAction.requested});
export const getMoviesSucceeded=action(getMoviesAction.fulfilled,payload<IMovie[]>())
export const getMoviesFailed =action(getMoviesAction.rejected,payload<Error>());



