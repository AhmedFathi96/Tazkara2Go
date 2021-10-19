//movies
export const getMoviesUrl = `http://41.196.0.251:81/Service2.svc/getshows`;
export const getCinemasUrl = `http://41.196.0.251:81/Service2.svc/getCinemas`;
export const getMovieWorkersUrl = (id:string)=>`http://41.196.0.251:81/Service2.svc/GetWorkersByShow/${id}`;
export const getCinemaMoviesUrl = (id:string)=>`http://41.196.0.251:81/Service2.svc/getshowsbycinemaid/${id}`;
export const getMovieCinemasUrl=(id:string)=>`http://41.196.0.251:81/Service2.svc/GetCinemasByShow/${id}`;
export const getMovieCinemaTimesUrl=(ip:string,showName:string)=>`https://cors-anywhere.herokuapp.com/http://${ip}/CenimaSrvc.svc/GetShowTimesByShowName/${showName}`;
export const getHallChairsUrl=(CinemaIpAdress:string,ShowTimeCod:string,hallid:string)=>`https://cors-anywhere.herokuapp.com/http://${CinemaIpAdress}/CenimaSrvc.svc/getHallChairs/${ShowTimeCod}/${hallid}`;
export const GetUnAvialableChairs=()=>``;