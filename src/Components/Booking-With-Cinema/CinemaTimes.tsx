import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {Link} from 'react-router-dom';
import { useSelect } from "../../helper";
import { ICinema, IMovie } from "../../models";


import { getMovieCinemasRequested } from "../../React-Redux/Actions/get-movie-cinemas-action";
import { getMovieScheduleRequested } from "../../React-Redux/Actions/get-movie-schedule";
import { getMoviesRequested } from "../../React-Redux/Actions/get-movies-action";
import CinemaUi from "./CinemaUI";
import './RadioStyle.css';

const CinemaTimes:React.FC = (props:any) => {
    const id=props.match.params.id;
    const dispatch=useDispatch();
    const [movie,setMovie] = useState<IMovie>();
    const [imageId, setImageId] = useState(id);
    const {movies}=useSelect(state=>state.moviesReducer);
    
    const {cinemas}=useSelect(state=>state.movieCinemasReducer);



    useEffect(() => {
        dispatch(getMovieCinemasRequested({id:id}));
        dispatch(getMoviesRequested());
       // dispatch(getMovieCinemaTimesRequested({ip:"62.193.99.221",showName:"Dune"}))
    }, []);
    useEffect(() => {
        const selectedMovie = movies.find(movi => movi.ShowId === id);
            setMovie(selectedMovie)  ;
        if(selectedMovie){
            dispatch(getMovieScheduleRequested({showName:selectedMovie.ShowNam}))

        }
        setImageId(props.match.params.id);
    }, [movies,cinemas]);

    
    return(
        <>
        
            <div className="overlay"></div>
            <a href="#0" className="scrollToTop">
                <i className="fas fa-angle-up"></i>
            </a>

    
            <section className="window-warning inActive">
                <div className="lay"></div>
                <div className="warning-item">
                    <h6 className="subtitle">Welcome! </h6>
                    <h4 className="title">Select Your Seats</h4>
                    <div className="thumb">
                        <img src={"http://www.tazkara2go.com:805/images/showimages/" + imageId + ".jpg"} alt="movie" />
                    </div>
                    <a href="movie-seat-plan.html" className="custom-button seatPlanButton">Seat Plans<i className="fas fa-angle-right"></i></a>
                </div>
            </section>

            <section className="details-banner hero-area bg_img" data-background={"http://www.tazkara2go.com:805/images/showimages/" + id + ".jpg"}>
                <div className="container">
                    <div className="details-banner-wrapper">
                        <div className="details-banner-content">
                            {
                                movie?.ShowNam !== undefined ? <h3 className="title">{movie.ShowNam}</h3>: <></>
                            }
                        
                        </div>
                    </div>
                </div>
            </section>

            <div className="ticket-plan-section padding-bottom padding-top">
                <div style={{'margin':'0 1rem'}}>
                    <div className="row justify-content-center">
                        <div className="col-lg-12 mb-12 mb-lg-12">

                            <ul className="seat-plan-wrapper bg-five">
                            {   
                                movie&&cinemas.map((c:ICinema)=><CinemaUi  cinema={c} movie={movie} />

                                )
                            }
                            </ul>
                        </div>
                    
                    </div>
                </div>
            </div>
        </>
    );
}

 
export default CinemaTimes;
