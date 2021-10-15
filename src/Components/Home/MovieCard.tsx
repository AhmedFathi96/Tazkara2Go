
import React from 'react';
import { Link } from "react-router-dom";
import './styles.css';



const MovieCard: React.FC = (props:any) => {

    const { movie } =props;
    return (
      <div className="item">
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
                    height="350px"
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
                    to={{ pathname: `/movie-details/${movie.ShowId}`, state: { movie: movie} }}
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
                
              </ul>
            </div>
          </div>
        </div>
    );
  }

export default MovieCard;
