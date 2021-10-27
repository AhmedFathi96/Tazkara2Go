import axios from 'axios';
import * as Requests from './urls'

export const getData00 = (bookCode:string,name:string,email:string,phone:string,cinemaId:string,hallId:string,chairId:string,paymentType:string,partyDate:string,partyId:string,partyTime:string,showId:string,expire:string) =>{
    
    return axios.get(Requests.getData00Url(bookCode,name,email,phone,cinemaId,hallId,chairId,paymentType,partyDate,partyId,partyTime,showId,expire));

}

export const dataAuth=()=>{
    return axios.post(Requests.dataUrl,JSON.stringify({"api_key": Requests.apiKey}),{headers:Requests.headers})
}
export const dataOrder=(token0:string,bookCode:string,amount:string)=>{
    // token0 = dataAuth.data["token"];
    return axios.post(Requests.dataRegistUrl, JSON.stringify({
        "auth_token": token0,
        "delivery_needed": "false",
        "merchant_id": "4214",
        "merchant_order_id": bookCode,
        "amount_cents": amount,
        "currency": "EGP",
        "items": []
      }),{headers:Requests.headers});
}
export const dataKey=(token1:string,amount:string,id:string,email:string,name:string,phone:string,startIndex:number)=>{
    return axios.post(Requests.data1KeyUrl,
       JSON.stringify({
            "auth_token": token1,
            "amount_cents": amount,
            "expiration": 3600,
            "order_id": id,
            "billing_data": {
              "apartment": "803",
              "email": email,
              "floor": "42",
              "first_name": name.substring(0, startIndex),
              "street": "Egypt",
              "building": "8028",
              "phone_number": phone,
              "shipping_method": "PKG",
              "postal_code": "01898",
              "city": "Egypt",
              "country": "Egypt",
              "last_name": name.substring(startIndex, name.length),
              "state": "Egypt"
            },
            "currency": "EGP",
            "integration_id": 11315,
            "lock_order_when_paid": "false"
          }),{headers:Requests.headers});
}