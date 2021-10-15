
import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useSelect } from "../../helper";
import { ICinema, IMovie } from '../../models';
import { Link } from 'react-router-dom';
import { getCinemasRequested } from '../../React-Redux/Actions/cinema-action';

const Cinemas: React.FC = (props:any) => {

    const dispatch=useDispatch();
    const {cinemas}=useSelect(state=>state.cinemasReducer);
    

    useEffect(() => {
        dispatch(getCinemasRequested());

    }, []);



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
                <span className="d-block">Enjoy OUR</span> Movies
                <span className="color-theme cd-words-wrapper p-0 m-0">
                  <b className="is-visible">English</b>
                  <b>Arabic</b>
                </span>
              </h1>
          
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
               
              </div>
              
            <div className="row">
                {
                    cinemas.map((cinema:ICinema)=>{
                        return(
                            <div className="col-lg-3">
                                 <div className="movie-grid">
                                  <div className="movie-thumb c-thumb">
                                      <Link to={`/movie-details/${cinema.CinemaId}`}>
                                        <img
                                          className="movie-image"
                                          src={
                                            "http://www.tazkara2go.com:805/images/CinemaImages/"+ cinema.CinemaId +"_1.jpg"
                                          }
                                          height="350px"
                                          alt="cinema"
                                        />
                                      </Link>
                                  </div>
                                  <div className="movie-content bg-one">
                                    <h5 className="title m-0" style={{ fontSize: "1rem" }}>{cinema.CinemaNamA}
                                    
                                    <span className="cvt" style={{display: "block"}}>{cinema.CinemaNamE}</span>

                                    </h5>
                                    <ul className="movie-rating-percent">
                                      <li style={{margin: "0 auto"}}>
                                        <div className="thumb">
                                          <a
                                            href=""
                                            className="button_1 button_1--secondary"
                                          >
                                            <span className="content">View all movies</span>
                                          </a>
                                        </div>
                                      </li>
                                      
                                    </ul>
                                  </div>
                                </div>
                            </div>
                            
                        )
                    })
                }
            </div>
            
            </div>
          </div>
        </section>

      </>
    );
  }

export default Cinemas;