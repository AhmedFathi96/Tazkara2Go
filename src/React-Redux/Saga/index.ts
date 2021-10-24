import { all } from "redux-saga/effects";
import { watchGetMoviesSaga } from "./get-movies-saga";
import { watchGetMovieWorkersSaga } from "./get-movie-workers-saga";
import { watchGetCinemasSaga } from "./get-cinemas-saga";
import { watchGetMovieCinemasSaga } from "./get-movie-cinemas-saga";
import { watchGetMovieCinemaTimesSaga } from "./get-movie-cinema-times-saga";
import { watchGetCinemaMoviesSaga } from "./get-cinema-movies-saga";
import { watchGetMovieScheduleSaga } from "./get-movie-schedule-saga";
import { watchGetHallChairsSaga } from "./get-hall-chairs-saga";
import { watchGetUnAvailableChairsSaga } from "./get-unAvailable-chairs-saga";
import { watchHoldChairSaga} from "./hold-chair-saga";
import { watchUnHoldChairSaga } from "./unhold-chair-saga";
import { watchUnHoldChairsSaga } from "./unhold-chairs-saga";
import { watchGetBookCodeSaga } from "./get-book-code-saga";

export default function* rootSaga() {
    yield all([
        watchGetMoviesSaga(),
        watchGetMovieWorkersSaga(),
        watchGetCinemasSaga(),
        watchGetMovieCinemasSaga(),
        watchGetMovieCinemaTimesSaga(),
        watchGetCinemaMoviesSaga(),
        watchGetMovieScheduleSaga(),
        watchGetHallChairsSaga(),
        watchGetUnAvailableChairsSaga (),
        watchHoldChairSaga(),
        watchUnHoldChairSaga(),
        watchUnHoldChairsSaga(),
        watchGetBookCodeSaga()

    ])}
    
