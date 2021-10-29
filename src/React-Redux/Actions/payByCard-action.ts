import {action , payload} from 'ts-action';
import{  finalDataCardAction, updateCinemaCardAction } from './index';
export const updateCinemaCardRequested =action(updateCinemaCardAction.requested);
export const updateCinemaCardSucceeded=action(updateCinemaCardAction.fulfilled,payload<any>())
export const updateCinemaCardFailed =action(updateCinemaCardAction.rejected,payload<Error>());
///////////////////////////////////////////////////////////////////////////////////////////
export const finalDataCardRequested =action(finalDataCardAction.requested,payload<{bookCode:string,name:string,email:string,phone:string,cinemaId:string,hallId:string,chairId:string,paymentType:string,partyDate:string,partyId:string,partyTime:string,showId:string,expire:string,amount:string,expireTime:string}>());
export const finalDataCardSucceeded=action(finalDataCardAction.fulfilled,payload<any>())
export const finalDataCardFailed =action(finalDataCardAction.rejected,payload<Error>());