import {combineReducers} from 'redux';
import { moviesReducer } from './movies-reducer';
import { cinemasReducer } from './cinemas-reducer';
import { movieWorkersReducer } from './movie-workers-reducer';
import { movieCinemaTimesReducer } from './movie-cinema-times-reducer';
import { movieCinemasReducer } from './movie-cinemas-reducer';
import { movieScheduleReducer } from './movie-schedule-reducer';

import { hallChairsReducer } from './hall-chairs-reducer';
export const rootReducer = combineReducers({
    moviesReducer,
    movieWorkersReducer,
    movieCinemasReducer,
    movieCinemaTimesReducer,
    cinemasReducer,
    movieScheduleReducer,
    hallChairsReducer
});
type rootReducer = typeof rootReducer;

type returnTypeInferrer<T> = T extends (state: any, action: any) => infer U
    ? U
    : never;
type rootState = returnTypeInferrer<rootReducer>;
export interface IRootReducerState extends rootState {}

export default rootReducer;