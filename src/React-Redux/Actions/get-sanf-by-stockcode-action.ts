import {action , payload} from 'ts-action';
import { ISanf } from '../../models';
import{ getSanfByStockCodeAction} from './index';

export const getSanfByStockCodeRequested =action(getSanfByStockCodeAction.requested,payload<{ip:string,stockcode:string}>());
export const getSanfByStockCodeSucceeded=action(getSanfByStockCodeAction.fulfilled,payload<ISanf[]>())
export const getSanfByStockCodeFailed =action(getSanfByStockCodeAction.rejected,payload<Error>());