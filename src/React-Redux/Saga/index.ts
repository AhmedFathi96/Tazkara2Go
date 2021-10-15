import { all } from "redux-saga/effects";
import { watchGetMoviesSaga } from "./get-movies-saga";
import { watchGetMovieWorkersSaga } from "./get-movie-workers-saga";
import { watchGetCinemasSaga } from "./get-cinemas-saga";
import { watchGetMovieCinemasSaga } from "./get-movie-cinemas-saga";
import { watchGetMovieCinemaTimesSaga } from "./get-movie-cinema-times-saga";
import { watchGetCinemaMoviesSaga } from "./get-cinema-movies-saga";
export default function* rootSaga() {
    yield all([
        watchGetMoviesSaga(),
        watchGetMovieWorkersSaga(),
        watchGetCinemasSaga(),
        watchGetMovieCinemasSaga(),
        watchGetMovieCinemaTimesSaga(),
        watchGetCinemaMoviesSaga()
    ])}
    