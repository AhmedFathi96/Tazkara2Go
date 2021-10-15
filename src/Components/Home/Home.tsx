
import React, { useEffect, useState } from 'react';
import MoviesCarousel from "./MoviesCarousel";
import CinemasCarousel from './CinemasCarousel';
import { useDispatch } from "react-redux";
import { getMoviesRequested } from "../../React-Redux/Actions/get-movies-action";
import { getCinemasRequested } from "../../React-Redux/Actions/cinema-action";
import { useSelect } from "../../helper";

const Home: React.FC = (props:any) => {
    const [flag,setFlag]=useState(true);

    const dispatch=useDispatch();
    const {movies,nowshowing,comingsoon}=useSelect(state=>state.moviesReducer);
    const {cinemas}=useSelect(state=>state.cinemasReducer);
    

    useEffect(() => {
      dispatch(getMoviesRequested());
      dispatch(getCinemasRequested());
  
    }, []);


  const changeflag1  = ()  =>{
    
    let li1 = document.getElementById("firstbtn"),
      li2 = document.getElementById("secondbtn");

    li1?.classList.add("active");
    li2?.classList.remove("active");

    setFlag(true)
  }; 

  const changeflag2 = ()  =>{
    let li1 = document.getElementById("firstbtn"),
      li2 = document.getElementById("secondbtn");

    li2?.classList.add("active");
    li1?.classList.remove("active");
    setFlag(false);
  };

    return (
      <>
        {/* ==========Preloader========== */}
        <div className="preloader">
          <div className="preloader-inner">
            <div className="preloader-icon">
              <span />
              <span />
            </div>
          </div>
        </div>
        {/* ==========Preloader========== */}
        {/* ==========Overlay========== */}
        <div className="overlay" />
        <a href="#0" className="scrollToTop">
          <i className="fas fa-angle-up" />
        </a>
        {/* ==========Overlay========== */}
      
        {/* ==========Banner-Section========== */}
        <section className="banner-section">
          <div
            className="banner-bg bg_img bg-fixed"
            // data-background={
            //   "http://www.tazkara2go.com/images/showimages/" +
            //  getARandomShowId() +
            //   ".jpg"
            // }
            // style={{
            //   backgroundImage: `http://www.tazkara2go.com:805/images/showimages/${getARandomShowId()}.jpg`
            // }}
          />
          <div className="container">
            <div className="banner-content">
              <h1 className="title cd-headline clip">
                <span className="d-block">book your</span> tickets for
                <span className="color-theme cd-words-wrapper p-0 m-0">
                  <b className="is-visible">Movie</b>
                  <b>Event</b>
                  <b>Sport</b>
                </span>
              </h1>
              <p>
                Safe, secure, reliable ticketing.Your ticket to live
                entertainment!
              </p>
            </div>
          </div>
        </section>

        {/* ==========Banner-Section========== */}
        {/* ==========Ticket-Search========== */}

        <section className="movie-section padding-top">
          <div className="container">
            <div className="tab">
              <div className="section-header-2">
                <div className="left">
                  <h2 className="title">movies</h2>
                  <p>Be sure not to miss these Movies today.</p>
                </div>
                <ul className="tab-menu">
                  <li className="active" id="firstbtn">
                    <a href="#0" onClick={changeflag1}>now showing</a>
                  </li>
                  <li id="secondbtn">
                    <a href="#0" onClick={changeflag2}>coming soon</a>
                  </li>
                  <li style={{ display: "none" }}>exclusive</li>
                </ul>
              </div>
              {flag ? (
                <MoviesCarousel sentdata={nowshowing} {...props} />
              ) : (
                <MoviesCarousel sentdata={comingsoon} {...props} />
              )}
            
            </div>
          </div>
        </section>
        <section className="event-section padding-top bg-four" style={{paddingBottom: "50px"}}>
          <div className="container">
            <div className="tab">
              <div className="section-header-2">
                <div className="left">
                  <h2 className="title">Cinemas</h2>
                  <p>Be sure not to miss these Movies today.</p>
                </div>
              
              </div>
              <CinemasCarousel sentdata={cinemas} {...props} />
            
            </div>
          </div>
        </section>
      </>
    );
  }

export default Home;
