import {action , payload} from 'ts-action';
import{getCinemaMoviesAction } from './index';
import{ IMovie} from '../../models/index'
export const getCinemaMoviesRequested =action(getCinemaMoviesAction.requested,payload<{ id: string}>());
//()=>({type:getMoviesAction.requested});
export const getCinemaMoviesSucceeded=action(getCinemaMoviesAction.fulfilled,payload<IMovie[]>())
export const getCinemaMoviesFailed =action(getCinemaMoviesAction.rejected,payload<Error>());