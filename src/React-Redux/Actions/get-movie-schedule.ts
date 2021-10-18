import {action , payload} from 'ts-action';
import{getMovieScheduleAction } from './index';
export const getMovieScheduleRequested =action(getMovieScheduleAction.requested,payload<{showName:string}>());
export const getMovieScheduleSucceeded=action(getMovieScheduleAction.fulfilled,payload<any[]>())
export const getMovieScheduleFailed =action(getMovieScheduleAction.rejected,payload<Error>());
