import axios from 'axios';
import * as Requests from './urls'
export const updateCinemaCard=(cinemaIp:string,expireTime:string)=>{
    return axios.get(Requests.updateCinemaCardUrl(cinemaIp,expireTime))}
    ////////////////////////////////////////////////
    export const finalDataCard=(token1:string,amount:string,id:string,email:string,startIndex:number,phone:string,name:string)=>{
        return axios.post(Requests.finalDataCardUrl,JSON.stringify({
            "auth_token": token1,
            "amount_cents": amount,
            "expiration": 3600,
            "order_id": id,
            "billing_data": {
              "apartment": "803",
              "email": email,
              "floor": "42",
              "first_name": name.substring(0, startIndex),
              "street": "Ethan Land",
              "building": "8028",
              "phone_number": phone,
              "shipping_method": "PKG",
              "postal_code": "01898",
              "city": "Jaskolskiburgh",
              "country": "CR",
              "last_name": name.substring(startIndex, name.length),
              "state": "Utah"},
              "currency": "EGP",
            "integration_id": 11313,
            "lock_order_when_paid": "false"
            }),{headers:Requests.headers})}
