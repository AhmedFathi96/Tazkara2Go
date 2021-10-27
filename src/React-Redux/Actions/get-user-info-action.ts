import {action , payload} from 'ts-action';
import { IUserInfo } from '../../models';
import{ getUserInfoAction} from './index';

export const getUserInfoRequested =action(getUserInfoAction.requested,payload<{userKey:string}>());
export const getUserInfoSucceeded=action(getUserInfoAction.fulfilled,payload<IUserInfo>())
export const getUserInfoFailed =action(getUserInfoAction.rejected,payload<Error>());