import {action , payload} from 'ts-action';
import{getCurrentDateTimeAction} from './index';
export const getCurrentDateTimeRequested =action(getCurrentDateTimeAction.requested);
export const getCurrentDateTimeSucceeded=action(getCurrentDateTimeAction.fulfilled,payload<string>())
export const getCurrentDateTimeFailed =action(getCurrentDateTimeAction.rejected,payload<Error>());