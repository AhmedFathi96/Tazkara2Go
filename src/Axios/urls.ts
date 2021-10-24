//movies
export const getMoviesUrl = `http://41.196.0.251:81/Service2.svc/getshows`;
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