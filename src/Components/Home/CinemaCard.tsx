
import React from 'react';
import { Link } from "react-router-dom";
import './styles.css';



const CinemaCard: React.FC = (props:any) => {

    const { cinema } =props;
    return (
      <div className="item">
          <div className="movie-grid">
            <div className="movie-thumb c-thumb">
                <Link to={`/cinema/${cinema.CinemaId}/movies`}>
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
    );
  }

export default CinemaCard;
