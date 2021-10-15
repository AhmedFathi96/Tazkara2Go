
import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { getMoviesRequested } from "../../React-Redux/Actions/get-movies-action";
import { useSelect } from "../../helper";
import { IMovie } from '../../models';
import { Link } from 'react-router-dom';
import { getCinemaMoviesRequested } from '../../React-Redux/Actions/get-cinema-movies-action';

const Movies: React.FC = (props:any) => {

    const dispatch=useDispatch();
    const {movies}=useSelect(state=>state.moviesReducer);
    const url = window.location.href;

    useEffect(() => {
      if(url.includes("cinema")){
        const _id=props.match.params.id;

        console.log("id =====================>",_id)

        dispatch(getCinemaMoviesRequested({id:_id}))
      }else{
        dispatch(getMoviesRequested());
      }
        console.log("url =====================>",url , url.includes("cinema"))
    }, [url]);


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
                    movies.map((movie:IMovie)=>{
                        return(
                            <div className="col-lg-3">
                                <div className="movie-grid">
                                    <div className="movie-thumb c-thumb">
                                    {+movie.IsCurrent ? (
                                        <Link to={`/movie-details/${movie.ShowId}`}>
                                        <img
                                            className="movie-image"
                                            src={
                                            "http://www.tazkara2go.com:805/images/showimages/" +
                                            movie.ShowId +
                                            ".jpg"
                                            }
                                            alt="movie"
                                        />
                                        </Link>
                                    ) : (
                                        <img
                                        className="movie-image"
                                        src={
                                            "http://www.tazkara2go.com:805/images/showimages/" +
                                            movie.ShowId +
                                            ".jpg"
                                        }
                                        height="350px"
                                        alt="movie"
                                        />
                                    )}
                                    </div>
                                    <div className="movie-content bg-one">
                                    <h5 className="title m-0" style={{ fontSize: "1rem" }}>
                                        {+movie.IsCurrent ? (
                                        <Link
                                            to={`/movie-details/${movie.ShowId}`}
                                            title={movie.ShowNam}
                                        >
                                            {movie.ShowNam}
                                        </Link>
                                        ) : (
                                        <>{movie.ShowNam}</>
                                        )}
                                    </h5>
                                    <ul className="movie-rating-percent">
                                        <li>
                                        <div className="thumb">
                                            <a
                                            href={movie.ShowUrl}
                                            className="button_1 button_1--secondary"
                                            >
                                            <span className="content"> Watch Promo</span>
                                            </a>
                                        </div>
                                        </li>
                                        <li>
                                        <div className="thumb">
                                            <img src="./assets/images/movie/cake.png" alt="movie" />
                                        </div>
                                        <span className="content">88%</span>
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

export default Movies;