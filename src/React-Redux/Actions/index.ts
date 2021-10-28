
export const genericAction = (action:string) => ({
    fulfilled: `${action}_FULFILLED`,
    rejected: `${action}_REJECTED`,
    requested: `${action}_REQUESTED`
})
//// Movies Actions
const getMovies= 'GET-Movies';
export const getMoviesAction = genericAction(getMovies);

//// Movies Actions
const getBookCode= 'GET-BOOK-CODE';
export const getBookCodeAction = genericAction(getBookCode);

const getCinemaMovies= 'GET-CINEMA-MOVIES';
export const getCinemaMoviesAction = genericAction(getCinemaMovies);
////Movie Workers
const getMovieWorkers= 'GET-Movie-Workers';
export const getMovieWorkersAction = genericAction(getMovieWorkers);

const getCinemas= 'GET-CINEMAS';
export const getCinemasAction = genericAction(getCinemas);
////Movie Cinemas
const getMovieCinemas='GET-Movie-Cinemas';
export const getMovieCinemasAction=genericAction(getMovieCinemas);
////Movie Cinema Times
const getMovieCinemaTimes='GET-Movie-Cinema-Times';
export const getMovieCinemaTimesAction=genericAction(getMovieCinemaTimes);

const getMovieSchedule= 'GET-MOVIE-SCHEDULE';
export const getMovieScheduleAction = genericAction(getMovieSchedule);
////Hall Chairs
const getHallChairs='GET-Hall-Chairs';
export const getHallChairsAction=genericAction(getHallChairs);
////hold chair
const holdChair='Hold-Chair';
export const holdChairAction=genericAction(holdChair);
////unhold chair
const unholdChair='Unhold-Chair';
export const unholdChairAction=genericAction(unholdChair);
////unAvailable chairs
const getUnAvialableChairs='GET-UnAvailable-Chairs';
export const getUnAvialableChairsAction=genericAction(getUnAvialableChairs);
////unhold chairs
const unholdChairs='Unhold-Chairs';
export const unholdChairsAction=genericAction(unholdChairs);
////login
const login="Login";
export const loginAction=genericAction(login);
////register
const register ="Register";
export const registerAction=genericAction(register);
////user info
const getUserInfo="GET-User-Info";
export const getUserInfoAction=genericAction(getUserInfo);
//// common Payment actions
const getData00='GET-Data00';
export const getData00Action=genericAction(getData00);
const data="DATA";
export const dataAction=genericAction(data);
const dataOrder='Data-Order';
export const dataOrderAction=genericAction(dataOrder);
const data1='DATA1';
export const data1Action=genericAction(data1);
////Aman
const updateCinemaAman='Update-Cinema-Aman';
export const updateCinemaAmanAction=genericAction(updateCinemaAman);
const finalDataAman='Final-Data-Aman';
export const finalDataAmanAction=genericAction(finalDataAman);
////card
const updateCinemaCard='Update-Cinema-Card';
export const updateCinemaCardAction=genericAction(updateCinemaCard);
const finalDataCard='Final-Data-Card';
export const finalDataCardAction=genericAction(finalDataCard);
//////popocorn
const getSanfByStockCode='GET-Sanf-By-Stockcode';

export const getSanfByStockCodeAction=genericAction(getSanfByStockCode);



