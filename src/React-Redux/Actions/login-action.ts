import {action , payload} from 'ts-action';
import { ILogin } from '../../models';
import{ loginAction} from './index';

export const loginRequested =action(loginAction.requested,payload<ILogin>());
export const loginSucceeded=action(loginAction.fulfilled,payload<string>())
export const loginFailed =action(loginAction.rejected,payload<Error>());