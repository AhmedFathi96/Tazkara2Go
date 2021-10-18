import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelect } from "../../helper";
import { IMovie } from "../../models";
import { getMovieCinemasRequested } from "../../React-Redux/Actions/get-movie-cinemas-action";
import { getMovieScheduleRequested } from "../../React-Redux/Actions/get-movie-schedule";
import { getMoviesRequested } from "../../React-Redux/Actions/get-movies-action";
import './RadioStyle.css';

const CinemaTimes:React.FC = (props:any) => {
 // console.log("cid",props.match.params.cid,"shid",props.match.params.shid)
    const [movie,setMovie] = useState<IMovie>();
    const id=props.match.params.id;
    const dispatch=useDispatch();
    const {cinemas}=useSelect(state=>state.movieCinemasReducer);
    const {movies}=useSelect(state=>state.moviesReducer);
    const {movieSchedule}=useSelect(state=>state.movieScheduleReducer);
    useEffect(() => {
        dispatch(getMovieCinemasRequested({id:id}));
        dispatch(getMoviesRequested());
    }, []);
    useEffect(() => {
        const selectedMovie = movies.filter(movi => movi.ShowId === id)[0];
        console.log("========================>", selectedMovie,movies );

        setMovie(selectedMovie)  ;
        if(selectedMovie){
            console.log("========================>", selectedMovie.ShowNam );

            dispatch(getMovieScheduleRequested({showName:selectedMovie.ShowNam}))

        }
    
    }, [movies]);
    useEffect(() => {
        console.log("========================>", movieSchedule );

    }, [movieSchedule]);
 
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
                        <img src={"http://www.tazkara2go.com:805/images/showimages/" + id + ".jpg"} alt="movie" />
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
                                <li style={{'display':'flex', 'alignItems':'center'}}>
                                    <div className="movie-name">
                                        <div className="icons">
                                            <i className="far fa-heart"></i>
                                            <i className="fas fa-heart"></i>
                                        </div>
                                        <a href="#0" className="name">Genesis Cinema</a>
                                        <div className="location-icon">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                    </div>
                                    <div className="movie-schedule middle">
                                        <div className="item">
                                            09:40
                                        </div>
                                        <div className="item">
                                            13:45
                                        </div>
                                        <div className="item">
                                            15:45
                                        </div>
                                        <div className="item">
                                            19:50
                                        </div>
                                    </div>
                                    <div className="movie-schedule">
                                        <div className="item">
                                            09:40
                                        </div>
                                        <div className="item">
                                            13:45
                                        </div>
                                        <div className="item">
                                            15:45
                                        </div>
                                        <div className="item">
                                            19:50
                                        </div>
                                    </div>
                                </li>                        
                                
                            </ul>
                        </div>
                    
                    </div>
                </div>
            </div>
        </>
    );
}

 
export default CinemaTimes;


{/* <div classNameName="radio-toolbar ">
{dates.map((item,i) => (
  <React.Fragment>
    
    <input
      name="lastName"
      key={i}
      id={`radio${i}`}
      value={item.date}
      type="radio"
      onChange={(e)=>setTimes(e.target.value)}
      
    />
    <label htmlFor={`radio${i}`}> {item.date}</label>
  </React.Fragment>
))}
</div> */}