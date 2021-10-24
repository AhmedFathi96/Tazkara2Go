import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieCinemasRequested } from "../../React-Redux/Actions/get-movie-cinemas-action";
// import MovieBanner from "../Movie-Details/Movie-Banner";
import CinemaUi from './CinemaUI';

const Booking = (props) => {
  ////console.log(props)
  //const [movie,setMovie]=useState({});
const movie=props.location.data;
const id=props.match.params.id;
const dispatch=useDispatch();
const {cinemas}=useSelector(state=>state.movieCinemasReducer);

useEffect(() => {
dispatch(getMovieCinemasRequested({id:id}));
    
}, []);
useEffect(() => {
    //console.log(cinemas)
    
}, [cinemas]);


return (
    <React.Fragment>
    {/*=========================movie banner====================== */}
    <section
        className="details-banner bg_img"
        style={{
        backgroundImage: `url(http://www.tazkara2go.com/images/showimages/${id}.jpg)`
        }}

    >
        <div className="container">
        <div className="details-banner-wrapper">
            <div className="details-banner-thumb">
            <img
                src={
                "http://www.tazkara2go.com:805/images/showimages/" + id + ".jpg"
                }
                style={{ height: "20rem" }}
                alt="movie"
            />
            <a href={movie?.ShowUrl} target="_blank" className="video-popup">
                <img
                src={
                    process.env.PUBLIC_URL +
                    "/assets/images/movie/video-button.png"
                }
                alt="movie"
                />
            </a>
            </div>
            {movie != null ? (
            <div className="details-banner-content offset-lg-3">
                <h3 className="title">{movie.ShowNam}</h3>
                <div className="tags">
                <a href="#0">
                    {+movie.LangCod ? "Arabic" : "English"}
                </a>
                </div>
                <a href="#0" className="button">
                {movie.ShowTypNam}
                </a>
                <div className="social-and-duration">
                <div className="duration-area">
                    <div className="item">
                    <i className="fas fa-calendar-alt" />
                    <span>06 Dec, 2020</span>
                    </div>
                    <div className="item">
                    <i className="far fa-clock" />
                    <span>2 hrs 50 mins</span>
                    </div>
                </div>
                <ul className="social-share">
                    <li>
                    <a href="#0">
                        <i className="fab fa-facebook-f" />
                    </a>
                    </li>
                    <li>
                    <a href="#0">
                        <i className="fab fa-twitter" />
                    </a>
                    </li>
                    <li>
                    <a href="#0">
                        <i className="fab fa-pinterest-p" />
                    </a>
                    </li>
                    <li>
                    <a href="#0">
                        <i className="fab fa-linkedin-in" />
                    </a>
                    </li>
                    <li>
                    <a href="#0">
                        <i className="fab fa-google-plus-g" />
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            ) : null}{" "}
        </div>
        </div>
    </section>
    {/*=========================movie banner====================== */}
    {/* ==========Window-Warning-Section========== */}
    <section className="window-warning inActive">
        {/* <div className="lay" /> */}
        <div className="warning-item">
        <h6 className="subtitle">Welcome! </h6>
        <h4 className="title">Select Your Seats</h4>
        <div className="thumb">
            <img
            src="http://www.tazkara2go.com:805/assets/images/movie/seat-plan.png"
            alt="movie"
            />
        </div>
        <a
            href="movie-seat-plan.html"
            className="custom-button seatPlanButton"
        >
            Seat Plans
            <i className="fas fa-angle-right" />
        </a>
        </div>
    </section>
    {/* ==========Book-Section========== */}
    <section className="book-section bg-one " style={{ height: "300px" }}>
        <div className="container"></div>
    </section>
    {/* ==========Book-Section========== */}
    {/* ==========Window-Warning-Section========== */}
    <section>
    {cinemas.length > 0 ? (
        <div className="container"> 
            <div className="row justify-content-evenly m-4 p-4 shadowed categories">
                {/* <OwlCarousel items={3} margin={8} autoplay={true}> */}
                {cinemas.map((c,i) =>
                    <CinemaUi
                    key={i}
                    cenima={c}
                    
                    {...props}
                    />
                )}
                {/* </OwlCarousel> */}
            </div>
        

        </div>)
        :<div> 
        No Matched Cinemas Founded
        </div>}
    </section>
    </React.Fragment>
)}
export default Booking;
