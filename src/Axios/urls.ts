//movies
export const apiKey= "ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6VXhNaUo5LmV5SmpiR0Z6Y3lJNklrMWxjbU5vWVc1MElpd2ljSEp2Wm1sc1pWOXdheUk2TkRRek9Dd2libUZ0WlNJNkltbHVhWFJwWVd3aWZRLmRtb3UwR1pxUVBiWnY5YzJiZDUweVJJUVFpYjlJb2VpN2xtZjhmamlEZ3lPNWRDdXRiTnJEaVVkYmFPc0FGZGhpTWRUNjlJdWlJSDFuMnRETFBtQ2lR";
export const  headers = {'Content-Type': 'application/json'};  
export const  getData00Url=(bookCode:string,name:string,email:string,phone:string,cinemaId:string,hallId:string,chairId:string,paymentType:string,partyDate:string,partyId:string,partyTime:string,showId:string,expire:string)=>`http://41.196.0.251:81/Service2.svc/AddBookingDetails/${bookCode}/${name}/${email}/${phone}/${cinemaId}/${hallId}/${chairId}/${paymentType}/${partyDate}/${partyId}/${partyTime}/${showId}/${expire}`;
export const  dataUrl=`https://accept.paymobsolutions.com/api/auth/tokens`;
export const  dataRegistUrl=`https://accept.paymobsolutions.com/api/ecommerce/orders`;
export const  data1KeyUrl=`https://accept.paymobsolutions.com/api/acceptance/payment_keys`;
export const updateBookingUrl=(bookCode:string,referenceKey:string)=>`http://41.196.0.251:81/Service2.svc/UpdatePaymentRefrenceKey/${bookCode}/${referenceKey}`;
export const updateCinemaAmanUrl=(bookCode:string,expireTime:string)=>`http://$cinemaIp/CenimaSrvc.svc/SetHoldInfo/${bookCode}/aman/${expireTime}`;
export const updateCinemaCardUrl=(cinemaIp:string,expireTime:string)=>`http://${cinemaIp}/CenimaSrvc.svc/SetHoldInfo/$bookCode/card/${expireTime}`;
export const finalDataAmanUrl=`https://accept.paymobsolutions.com/api/acceptance/payments/pay`;
export const finalDataCardUrl=`https://accept.paymobsolutions.com/api/acceptance/payment_keys`;
export const loginUTR = (usermail:string,password:string)=>`http://41.196.0.251:81/Service2.svc/GetUserKey/${usermail}/${password}`;
export const rgisterUrl=(UserName:string,UserEmail:string,UserPhone:string,UserPassword:string)=>`http://41.196.0.251:81/Service2.svc/AddUser/${UserName}/${UserEmail}/${UserPhone}/${UserPassword}`;
export const getMoviesUrl = `http://41.196.0.251:81/Service2.svc/getshows`;
export const getCurrentDateUrl=`http://41.196.0.251:81/Service2.svc/GetCurrentDateTime`;
export const getUserInfoUrl=(userKey:string)=>`http://41.196.0.251:81/Service2.svc/GetUserInfo/${userKey}`;
export const getCinemasUrl = `http://41.196.0.251:81/Service2.svc/getCinemas`;
export const getMovieWorkersUrl = (id:string)=>`http://41.196.0.251:81/Service2.svc/GetWorkersByShow/${id}`;
export const getCinemaMoviesUrl = (id:string)=>`http://41.196.0.251:81/Service2.svc/getshowsbycinemaid/${id}`;
export const getMovieCinemasUrl=(id:string)=>`http://41.196.0.251:81/Service2.svc/GetCinemasByShow/${id}`;
export const getMovieCinemaTimesUrl=(ip:string,showName:string)=>`https://cors-anywhere.herokuapp.com/http://${ip}/CenimaSrvc.svc/GetShowTimesByShowName/${showName}`;
export const getHallChairsUrl=(CinemaIpAdress:string,ShowTimeCod:string,hallid:string)=>`https://cors-anywhere.herokuapp.com/http://${CinemaIpAdress}/CenimaSrvc.svc/getHallChairs/${ShowTimeCod}/${hallid}`;
export const getUnAvialableChairsUrl=(CinemaIpAdress:string,hallId:string,ShowDate:string,ShowTimeCod:string,ShowName:string)=>`https://cors-anywhere.herokuapp.com/http://${CinemaIpAdress}/CenimaSrvc.svc/GetUnAvialableChairs/${hallId}/${ShowDate}/${ShowTimeCod}/${ShowName}`;
export const holdChairUrl=(CinemaIpAdress:string,ShowTimeCod:string,hallId:string,ShowDate:string,ChairId:string,ChairPrice:string,bookcode:string,holdWaitingMinutes:string,ShowName:string,timein:string)=>`https://cors-anywhere.herokuapp.com/http://${CinemaIpAdress}/CenimaSrvc.svc/HoldChair/${ShowTimeCod}/${hallId}/${ShowDate}/${ChairId}/${ChairPrice}/web_${bookcode}/${holdWaitingMinutes}/${ShowName}/${timein}`;
export const unholdChairUrl=(CinemaIpAdress:string,ShowTimeCod:string,hallId:string,ShowDate:string,ChairId:string,bookcode:string)=>`https://cors-anywhere.herokuapp.com/http://${CinemaIpAdress}/CenimaSrvc.svc/UnHoldChair/${ShowTimeCod}/${hallId}/${ShowDate}/${ChairId}/web_${bookcode}`;
export const UnHoldChairsUrl=(CinemaIpAdress:string,ShowTimeCod:string,hallId:string,ShowDate:string,bookcode:string)=>`https://cors-anywhere.herokuapp.com/http://${CinemaIpAdress}/CenimaSrvc.svc/UnHoldChairs/${ShowTimeCod}/${hallId}/${ShowDate}/web_${bookcode}`;
export const getBookCodeUrl = `http://41.196.0.251:81/Service2.svc/NewBookCode`;
export const getSanfByStockCodeUrl=(ip:string,stockcod:string)=>`https://cors-anywhere.herokuapp.com/http://${ip}/CenimaSrvc.svc/getsanfbystockcod/${stockcod}`;