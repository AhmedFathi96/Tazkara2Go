import React, { Component } from "react";
import axios from "axios";
import { GetCinemasByShowID, getallmovies } from "./Apis/Apis";


import CinemaUi from './Components/Booking-With-Cinema/CinemaUI';
import TimeCard from './Components/Booking-With-Cinema/CinemaTimes';

class Booking extends Component {
  state = {
    cinemaList: [],
    ShowTimes: [],
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
    selectedCinemaIpAdress:"62.193.99.221"
  };
  findmovie = async () => {
    await getallmovies()
      .then(async (res) => {
        let mov = res.data.GetShowsResult.find(
          (item) => +item.ShowId === +this.props.match.params.id
        );

        await this.setState({
          movie: mov,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  GetCinemasByShowID = async () => {
    let showId = this.props.match.params.id;
    GetCinemasByShowID(showId)
      .then(async (res) => {
        await this.setState({
          cinemaList: res.data.GetCinemasByShowResult,
        });
        let selectedCinemaIpAdress = this.state.cinemaList[0].IpAddress
        await this.state({selectedCinemaIpAdress})
      })
      .catch((error) => {
        console.log(error);
      });
  };

  GetShowTimesByShowName = async (IpAddress) => {
    let ShowTimes = [];
    await axios
      .get(
        //"https://cors-anywhere.herokuapp.com/http://62.193.99.221/CenimaSrvc.svc/GetShowTimesByShowName/Dune"
        "https://cors-anywhere.herokuapp.com/http://" 
        + IpAddress 
        + "/CenimaSrvc.svc/GetShowTimesByShowName/" 
        + this.state.movie.ShowNam
      )
      .then(async (res) => {
        
        ShowTimes = res.data.GetShowTimesByShowNameResult;
        this.setState({ ShowTimes: ShowTimes });
      })
      .catch((error) => {
        console.log(error);
      });
    //await this.setState({ShowTimes})
  };
  componentDidMount = async () => {
    await this.findmovie();
    await this.GetCinemasByShowID();
    await this.GetShowTimesByShowName(this.state.selectedCinemaIpAdress);
  };

  cenimaMovieTimes = async (IpAddress) => {
        await this.setState({selectedCinemaIpAdress:IpAddress});
        await this.GetShowTimesByShowName(IpAddress);
        //TODO ===> get Times From Selected cinema
  }

  getCardStyle = (IpAddress) => {
    return this.state.selectedCinemaIpAdress == IpAddress
      ? "card col-3 p-2 border border-primary rounded"
      : "card col-3 p-2 opac border-0";
  };

  render() {
    const { movie } = this.state;
   //console.log(this.state.ShowTimes);

    return (
      <>
        <section
          className="details-banner bg_img"
          style={{
            backgroundImage: `url(http://www.tazkara2go.com/images/showimages/${movie.ShowId}.jpg)`,
          }}
        >
          <div className="container">
            <div className="details-banner-wrapper">
              <div className="details-banner-thumb">
                <img
                  src={
                    "http://www.tazkara2go.com:805/images/showimages/" +
                    movie.ShowId +
                    ".jpg"
                  }
                  alt="..."
                />
                <a
                  href="https://www.youtube.com/embed/KGeBMAgc46E"
                  className="video-popup"
                >
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/movie/video-button.png"
                    }
                    alt="movie"
                  />
                </a>
              </div>
              <div className="details-banner-content offset-lg-3">
                <h3 className="title">{movie.ShowNam}</h3>
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
            </div>
          </div>
        </section>

        {/* ==========Window-Warning-Section========== */}
        <section className="window-warning inActive">
          <div className="lay" />
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
        {/* ==========Window-Warning-Section========== */}

        {/* ==========Book-Section========== */}
        <section className="book-section bg-one " style={{ height: "300px" }}>
          <div className="container"></div>
        </section>
        {/* ==========Book-Section========== */}
        {/* ==========Movie-Section========== */}

        {this.state.cinemaList.length > 0 ? (
        <div className="container"> 
            <div className="row justify-content-evenly m-4 p-4 shadowed categories">
                {/* <OwlCarousel items={3} margin={8} autoplay={true}> */}
                {this.state.cinemaList.map((c,i) =>
                    <CinemaUi
                    key={i}
                    cenima={c}
                    cenimaMovieTimes={this.cenimaMovieTimes}
                    cardStyle={this.getCardStyle}
                    {...this.props}
                    />
                )}
                {/* </OwlCarousel> */}
            </div>
            <div className="row justify-content-evenly m-4 p-4">
                {this.state.ShowTimes.map((t,i) => (
                <TimeCard key={i} Time={t} {...this.props} />
                ))}
            </div>

        </div>
        //   <section>
        //     <div className="ticket-plan-section padding-bottom padding-top">
        //       <div className="container">
        //         <div className="row justify-content-center">
        //           <div className="col-lg-3 mb-5 mb-lg-0">
        //             <ul
        //               className="nav nav-tabs seat-plan-wrapper bg-five d-block"
        //               role="tablist"
        //             >
        //               {this.state.cinemaList.map((c) => (
        //                 <li key={c.CinemaId} className="nav-item">
        //                   <a
        //                     className="nav-link"
        //                     href={"#tab" + c.CinemaId}
        //                     role="tab"
        //                     data-toggle="tab"
        //                     onClick={async () =>
        //                       await this.GetShowTimesByShowName()
        //                     }
        //                   >
        //                     {c.CinemaNamE}
        //                   </a>
        //                 </li>
        //               ))}
        //             </ul>
        //           </div>
        //           {/* Tab panes */}
        //           <div className="col-lg-9 col-md-6 col-sm-10">
        //             <div className="tab-content">
        //               {this.state.cinemaList.map((c) => (
        //                 <div
        //                   key={c.CinemaId}
        //                   id={`tab${c.CinemaId}`}
        //                   role="tabpanel"
        //                   className="tab-pane fade"
        //                 >
        //                   {this.state.ShowTimes.map((k) => (
        //                     <table
        //                       className="table table-striped  text-white bg-primary"
        //                       key={k.ShowTimeCod}
        //                     >
        //                       <tr>
        //                         <td className="item">{k.timein}</td>
        //                         <td className="item">from</td>
        //                         <td className="item">{k.startdate}</td>
        //                         <td className="item">to</td>
        //                         <td className="item">{k.enddate}</td>
        //                       </tr>
        //                     </table>
        //                   ))}
        //                 </div>
        //               ))}
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </section>
        ) : <div>
                No Matched Cinemas Founded
            </div>}
      </>
    );
  }
}
export default Booking;
