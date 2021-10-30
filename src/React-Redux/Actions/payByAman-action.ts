import {action , payload} from 'ts-action';
import{ finalDataAmanAction, updateCinemaAmanAction } from './index';
export const updateCinemaAmanRequested =action(updateCinemaAmanAction.requested);
export const updateCinemaAmanSucceeded=action(updateCinemaAmanAction.fulfilled,payload<any>())
export const updateCinemaAmanFailed =action(updateCinemaAmanAction.rejected,payload<Error>());
///////////////////////////////////////////////////
export const finalDataAmanRequested =action(finalDataAmanAction.requested,payload<{bookCode:string,name:string,email:string,phone:string,cinemaId:string,hallId:string,chairId:string,paymentType:string,partyDate:string,partyId:string,partyTime:string,showId:string,expire:string,amount:string,expireTime:string,ticketquantity:string,ticketprice:string,ticketfees:string}>());
export const finalDataAmanSucceeded=action(finalDataAmanAction.fulfilled,payload<any>())
export const finalDataAmanFailed =action(finalDataAmanAction.rejected,payload<Error>());