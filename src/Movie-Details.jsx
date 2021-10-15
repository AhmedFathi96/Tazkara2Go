import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Getworkers } from "./Apis/Apis";

class MovieDetails extends Component {
  state = {
    movieworkers: [],
    cast: [],
    crew: [],
    movie: {
      CinemaId: 0,
      InMainSlider: 0,
      IsCurrent: 1,
      LangCod: 1,
      ShowDesc: "",
      ShowId: 1,
      ShowNam: "",
      ShowTypCod: 1,
      ShowTypNam: "",
      ShowUrl: "",
    },
    lang: " ",
  };

  getworkers = async () => {
    Getworkers(this.props.match.params.id)
      .then(async (res) => {
        await this.setState({ movieworkers: res.data.GetWorkersByShowResult });
      })
      .then(async () => {
        await this.setcast_crew();
      })
      .catch((err) => console.log(err));
  };
  goToTickets = async () => {
    this.props.history.push({
      pathname: "/movie-Booking/" + this.state.movie.ShowId,

      state: this.state.movie,
    });
  };

  setcast_crew = async () => {
    let cast = [];
    let crew = [];

    if (this.state.movieworkers != null && this.state.movieworkers.length > 0) {
      cast = this.state.movieworkers.filter(
        (item) =>
          item.workerRole.includes("Actor") || item.workerRole.includes("Voice")
      );
      crew = this.state.movieworkers.filter(
        (item) =>
          !(
            item.workerRole.includes("Actor") ||
            item.workerRole.includes("Voice")
          )
      );
      // console.log("crew",crew)
    }
    await this.setState({ cast });
    await this.setState({ crew });
  };

  findmovie = async () => {
    let mov = {};

    mov = this.props.allmovies.find(
      (item) => +item.ShowId === +this.props.match.params.id
    );

    await this.setState({ movie: { ...mov } });
  };

  componentDidMount = async () => {
    await this.findmovie();
    await this.getworkers();
    //await this.setcast_crew();
  };

  componentDidUpdate = async (prevProps) => {
    if (
      prevProps.allmovies !== this.props.allmovies ||
      +prevProps.match.params.id !== +this.props.match.params.id
    ) {
      await this.findmovie();
      await this.getworkers();
      // await this.setcast_crew();
    }
  };

  render() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <section
          className="details-banner bg_img"
          // data-background={
          //   "http://www.tazkara2go.com:805/images/showimages/" + id + ".jpg"
          // }
          style={{
            backgroundImage: `url(http://www.tazkara2go.com:805/images/showimages/${id}.jpg)`,
          }}
        >
          <div className="container">
            <div className="details-banner-wrapper">
              <div className="details-banner-thumb">
                <img
                  src={
                    "http://www.tazkara2go.com:805/images/showimages/" +
                    id +
                    ".jpg"
                  }
                  style={{ height: "20rem" }}
                  alt="movie"
                />
                <a href={this.state.movie.ShowUrl} className="video-popup">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/movie/video-button.png"
                    }
                    alt="movie"
                  />
                </a>
              </div>
              {this.state.movie != null ? (
                <div className="details-banner-content offset-lg-3">
                  <h3 className="title">{this.state.movie.ShowNam}</h3>
                  <div className="tags">
                    <a href="#0">
                      {+this.state.movie.LangCod ? "Arabic" : "English"}
                    </a>
                  </div>
                  <a href="#0" className="button">
                    {this.state.movie.ShowTypNam}
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
        {/* ==========Banner-Section========== */}
        {/* ==========Book-Section========== */}
        <section className="book-section bg-one">
          <div className="container">
            <div className="book-wrapper offset-lg-3">
              <div className="left-side"></div>
              <Link
                className="custom-button"
                to={"/movie-Booking/" + this.state.movie.ShowId}
                //onClick={this.goToTickets}
              >
                book tickets
              </Link>
            </div>
          </div>
        </section>
        {/* ==========Movie-Section========== */}
        <section className="movie-details-section padding-top padding-bottom">
          <div className="container">
            <div className="row justify-content-center flex-wrap-reverse mb--50">
              <div className="col-lg-3 col-sm-10 col-md-6 mb-50">
                <div className="widget-1 widget-tags">
                  <ul>
                    <li>
                      <a href="#0">2D</a>
                    </li>
                    <li>
                      <a href="#0">imax 2D</a>
                    </li>
                    <li>
                      <a href="#0">4DX</a>
                    </li>
                  </ul>
                </div>
                <div className="widget-1 widget-offer">
                  <h3 className="title">Applicable offer</h3>
                  <div className="offer-body">
                    <div className="offer-item">
                      <div className="thumb">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/sidebar/offer01.png"
                          }
                          alt="sidebar"
                        />
                      </div>
                      <div className="content">
                        <h6>
                          <a href="#0">Amazon Pay Cashback Offer</a>
                        </h6>
                        <p>Win Cashback Upto Rs 300*</p>
                      </div>
                    </div>
                    <div className="offer-item">
                      <div className="thumb">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/sidebar/offer02.png"
                          }
                          alt="sidebar"
                        />
                      </div>
                      <div className="content">
                        <h6>
                          <a href="#0">PayPal Offer</a>
                        </h6>
                        <p>
                          Transact first time with Paypal and get 100% cashback
                          up to Rs. 500
                        </p>
                      </div>
                    </div>
                    <div className="offer-item">
                      <div className="thumb">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/sidebar/offer03.png"
                          }
                          alt="sidebar"
                        />
                      </div>
                      <div className="content">
                        <h6>
                          <a href="#0">HDFC Bank Offer</a>
                        </h6>
                        <p>
                          Get 15% discount up to INR 100* and INR 50* off on
                          F&amp;B T&amp;C apply
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="widget-1 widget-banner">
                  <div className="widget-1-body">
                    <a href="#0">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/sidebar/banner/banner01.jpg"
                        }
                        alt="banner"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 mb-50">
                <div className="movie-details">
                  <h3 className="title">photos</h3>
                  <div className="Container row">
                    <div style={{ width: 210, margin: 30 }}>
                      <div className="thumb">
                        <img
                          src={
                            "http://www.tazkara2go.com:805/images/moviesScenes/" +
                            id +
                            "/1.jpg"
                          }
                          id="movieScene1"
                          alt="movie"
                        />
                      </div>
                    </div>
                    <div style={{ width: 210, margin: 30 }}>
                      <div className="thumb">
                        <img
                          src={
                            "http://www.tazkara2go.com:805/images/moviesScenes/" +
                            id +
                            "/2.jpg"
                          }
                          id="movieScene2"
                          alt="movie"
                        />
                      </div>
                    </div>
                    <div style={{ width: 210, margin: 30 }}>
                      <div className="thumb">
                        <img
                          src={
                            "http://www.tazkara2go.com:805/images/moviesScenes/" +
                            id +
                            "/3.jpg"
                          }
                          id="movieScene1"
                          alt="movie"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="tab summery-review">
                    <ul className="tab-menu">
                      <li className="active">summery</li>
                      <li>
                        user review <span>147</span>
                      </li>
                    </ul>
                    <div className="tab-area">
                      <div className="tab-item active" style={{}}>
                        {this.state.movie != null ? (
                          <div className="item">
                            <h5 className="sub-title">Synopsis</h5>
                            <p id="movieSynopsis">
                              {this.state.movie.ShowDesc}
                            </p>
                          </div>
                        ) : null}

                        {this.state.cast.length > 0 ? (
                          <div className="item">
                            <div className="header">
                              <h5 className="sub-title">cast</h5>
                            </div>

                            <div
                              className=""
                              style={{ display: "table", width: "100%" }}
                            >
                              {/* <OwlCarousel items={3} margin={8} autoplay={true}>
                                {this.state.cast.map((c) => (
                                  <div
                                    key={c.WorkerId}
                                    className=""
                                    style={{ width: "160px", marginRight: 100 }}
                                  >
                                    <div className="cast-item active">
                                      <div className="cast-thumb">
                                        <a href="#0">
                                          <img
                                            src={
                                              "http://www.tazkara2go.com:805/images/cast/" +
                                              c.WorkerId +
                                              ".jpg"
                                            }
                                            alt="cast"
                                          />
                                        </a>
                                      </div>
                                      <div className="cast-content">
                                        <h6 className="cast-title">
                                          <a href="#0">{c.workername}</a>
                                        </h6>
                                        <span className="cate">actor</span>
                                        <p style={{ display: "none" }}>
                                          As Richie Tozier
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </OwlCarousel> */}
                            </div>
                          </div>
                        ) : null}

                        {this.state.crew.length > 0 ? (
                          <div className="item">
                            <div className="header">
                              <h5 className="sub-title">crew</h5>
                            </div>
                            <div className="">
                              {/* <OwlCarousel items={3} margin={8} autoplay={true}>
                                {this.state.crew.map((c, i) => (
                                  <div
                                    key={i}
                                    className=""
                                    style={{ width: "160px", marginRight: 100 }}
                                  >
                                    <div className="cast-item">
                                      <div className="cast-thumb">
                                        <a href="#0">
                                          <img
                                            src={
                                              "http://www.tazkara2go.com:805/images/cast/" +
                                              c.WorkerId +
                                              ".jpg"
                                            }
                                            alt="crew"
                                          />
                                        </a>
                                      </div>
                                      <div className="cast-content">
                                        <h6 className="cast-title">
                                          <a href="#0">{c.workername}</a>
                                        </h6>
                                        <span className="cate">
                                          {c.workerRole}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </OwlCarousel> */}
                            </div>
                          </div>
                        ) : null}
                      </div>
                      <div className="tab-item">
                        <div className="movie-review-item">
                          <div className="author">
                            <div className="thumb">
                              <a href="#0">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/assets/images/cast/cast02.jpg"
                                  }
                                  alt="cast"
                                />
                              </a>
                            </div>
                            <div className="movie-review-info">
                              <span className="reply-date">13 Days Ago</span>
                              <h6 className="subtitle">
                                <a href="#0">minkuk seo</a>
                              </h6>
                              <span>
                                <i className="fas fa-check" /> verified review
                              </span>
                            </div>
                          </div>
                          <div className="movie-review-content">
                            <div className="review">
                              <i className="flaticon-favorite-heart-button" />
                              <i className="flaticon-favorite-heart-button" />
                              <i className="flaticon-favorite-heart-button" />
                              <i className="flaticon-favorite-heart-button" />
                              <i className="flaticon-favorite-heart-button" />
                            </div>
                            <h6 className="cont-title">Awesome Movie</h6>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Integer volutpat enim non ante egestas
                              vehicula. Suspendisse potenti. Fusce malesuada
                              fringilla lectus venenatis porttitor.{" "}
                            </p>
                            <div className="review-meta">
                              <a href="#0">
                                <i className="flaticon-hand" />
                                <span>8</span>
                              </a>
                              <a href="#0" className="dislike">
                                <i className="flaticon-dont-like-symbol" />
                                <span>0</span>
                              </a>
                              <a href="#0">Report Abuse</a>
                            </div>
                          </div>
                        </div>
                        <div className="movie-review-item">
                          <div className="author">
                            <div className="thumb">
                              <a href="#0">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/assets/images/cast/cast04.jpg"
                                  }
                                  alt="cast"
                                />
                              </a>
                            </div>
                            <div className="movie-review-info">
                              <span className="reply-date">13 Days Ago</span>
                              <h6 className="subtitle">
                                <a href="#0">rudra rai</a>
                              </h6>
                              <span>
                                <i className="fas fa-check" /> verified review
                              </span>
                            </div>
                          </div>
                          <div className="movie-review-content">
                            <div className="review">
                              <i className="flaticon-favorite-heart-button" />
                              <i className="flaticon-favorite-heart-button" />
                              <i className="flaticon-favorite-heart-button" />
                              <i className="flaticon-favorite-heart-button" />
                              <i className="flaticon-favorite-heart-button" />
                            </div>
                            <h6 className="cont-title">Awesome Movie</h6>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Integer volutpat enim non ante egestas
                              vehicula. Suspendisse potenti. Fusce malesuada
                              fringilla lectus venenatis porttitor.{" "}
                            </p>
                            <div className="review-meta">
                              <a href="#0">
                                <i className="flaticon-hand" />
                                <span>8</span>
                              </a>
                              <a href="#0" className="dislike">
                                <i className="flaticon-dont-like-symbol" />
                                <span>0</span>
                              </a>
                              <a href="#0">Report Abuse</a>
                            </div>
                          </div>
                        </div>
                        <div className="movie-review-item">
                          <div className="author">
                            <div className="thumb">
                              <a href="#0">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/assets/images/cast/cast01.jpg"
                                  }
                                  alt="cast"
                                />
                              </a>
                            </div>
                            <div className="movie-review-info">
                              <span className="reply-date">13 Days Ago</span>
                              <h6 className="subtitle">
                                <a href="#0">rafuj</a>
                              </h6>
                              <span>
                                <i className="fas fa-check" /> verified review
                              </span>
                            </div>
                          </div>
                          <div className="movie-review-content">
                            <div className="review">
                              <i className="flaticon-favorite-heart-button" />
                              <i className="flaticon-favorite-heart-button" />
                              <i className="flaticon-favorite-heart-button" />
                              <i className="flaticon-favorite-heart-button" />
                              <i className="flaticon-favorite-heart-button" />
                            </div>
                            <h6 className="cont-title">Awesome Movie</h6>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Integer volutpat enim non ante egestas
                              vehicula. Suspendisse potenti. Fusce malesuada
                              fringilla lectus venenatis porttitor.{" "}
                            </p>
                            <div className="review-meta">
                              <a href="#0">
                                <i className="flaticon-hand" />
                                <span>8</span>
                              </a>
                              <a href="#0" className="dislike">
                                <i className="flaticon-dont-like-symbol" />
                                <span>0</span>
                              </a>
                              <a href="#0">Report Abuse</a>
                            </div>
                          </div>
                        </div>
                        <div className="movie-review-item">
                          <div className="author">
                            <div className="thumb">
                              <a href="#0">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/assets/images/cast/cast03.jpg"
                                  }
                                  alt="cast"
                                />
                              </a>
                            </div>
                            <div className="movie-review-info">
                              <span className="reply-date">13 Days Ago</span>
                              <h6 className="subtitle">
                                <a href="#0">bela bose</a>
                              </h6>
                              <span>
                                <i className="fas fa-check" /> verified review
                              </span>
                            </div>
                          </div>
                          <div className="movie-review-content">
                            <div className="review">
                              <i className="flaticon-favorite-heart-button" />
                              <i className="flaticon-favorite-heart-button" />
                              <i className="flaticon-favorite-heart-button" />
                              <i className="flaticon-favorite-heart-button" />
                              <i className="flaticon-favorite-heart-button" />
                            </div>
                            <h6 className="cont-title">Awesome Movie</h6>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Integer volutpat enim non ante egestas
                              vehicula. Suspendisse potenti. Fusce malesuada
                              fringilla lectus venenatis porttitor.{" "}
                            </p>
                            <div className="review-meta">
                              <a href="#0">
                                <i className="flaticon-hand" />
                                <span>8</span>
                              </a>
                              <a href="#0" className="dislike">
                                <i className="flaticon-dont-like-symbol" />
                                <span>0</span>
                              </a>
                              <a href="#0">Report Abuse</a>
                            </div>
                          </div>
                        </div>
                        <div className="load-more text-center">
                          <a href="#0" className="custom-button transparent">
                            load more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default MovieDetails;
