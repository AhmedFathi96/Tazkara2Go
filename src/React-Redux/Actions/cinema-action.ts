import {action , payload} from 'ts-action';
import{getCinemasAction } from './index';
import{ICinema} from '../../models/index'
export const getCinemasRequested =action(getCinemasAction.requested);
//()=>({type:getCinemasAction.requested});
export const getCinemasSucceeded=action(getCinemasAction.fulfilled,payload<ICinema[]>())
export const getCinemasFailed =action(getCinemasAction.rejected,payload<Error>());
