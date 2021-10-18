export const genericAction = (action:string) => ({
    fulfilled: `${action}_FULFILLED`,
    rejected: `${action}_REJECTED`,
    requested: `${action}_REQUESTED`
})
//// Movies Actions
const getMovies= 'GET-Movies';
export const getMoviesAction = genericAction(getMovies);

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
