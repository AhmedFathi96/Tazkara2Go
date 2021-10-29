import {action , payload} from 'ts-action';
import { IRegister } from '../../models';
import{ registerAction} from './index';

export const registerRequested =action(registerAction.requested,payload<IRegister>());
export const registerSucceeded=action(registerAction.fulfilled,payload<string>())
export const registerFailed =action(registerAction.rejected,payload<Error>());