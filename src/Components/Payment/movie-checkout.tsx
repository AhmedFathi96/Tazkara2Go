
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCinemas } from "../../Axios/get-cinemas";
import { useSelect } from "../../helper";
import { ICinema, IMovie } from "../../models";
import { getCinemasRequested } from "../../React-Redux/Actions/cinema-action";
interface IContact{
    FullName:string,
    Email:string,
    Phone:string
    
}

const MovieCheckout:React.FC = (props:any) => {
    const cinemaIP = props.match.params.cinemaIP;
    const showTimeCode = props.match.params.showTimeCode;
    const hallId = props.match.params.hallId;
    const showName = props.match.params.showName;
    const showDate = props.match.params.showDate;
    const [cinema,setCinema]=useState<ICinema>()
    const [contactData,setcontactData]=useState<IContact>()
    const dispatch=useDispatch();
    const {cinemas}=useSelect(state=>state.cinemasReducer);
    useEffect(()=>{
        dispatch(getCinemasRequested());
    },[])
    useEffect(()=>{
        const cinem=cinemas.find(c=>c.IpAdress==cinemaIP);
        setCinema(cinem)
    },[cinemas])


    return (
        <>

            {/* ==========Banner-Section========== */}
            <section
                className="details-banner hero-area bg_img seat-plan-banner"
                data-background="./assets/images/banner/banner04.jpg"
            >
                <div className="container">
                    <div className="details-banner-wrapper">
                        <div className="details-banner-content style-two">
                            <h3 className="title">{showName}</h3>
                            <div className="tags">
                                <a href="#0">{cinema?.CinemaNamE}</a>
                                <a href="#0">English - 2D</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ==========Banner-Section========== */}
            {/* ==========Page-Title========== */}
            <section className="page-title bg-one">
                <div className="container">
                    <div className="page-title-area">
                       
                        <div className="item">
                            <h5 className="title">05:00</h5>
                            <p>Mins Left</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* ==========Page-Title========== */}
            {/* ==========Movie-Section========== */}
            <div className="movie-facility padding-bottom padding-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            
                            <div className="checkout-widget checkout-contact">
                                <h5 className="title">Share your Contact Details </h5>
                                <form className="checkout-contact-form">
                                    <div className="form-group">
                                        <input type="text" placeholder="Full Name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder="Enter your Mail" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder="Enter your Phone Number " />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="submit"
                                            defaultValue="Continue"
                                            className="custom-button"
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="checkout-widget checkout-contact">
                                <h5 className="title">Promo Code </h5>
                                <form className="checkout-contact-form">
                                    <div className="form-group">
                                        <input type="text" placeholder="Please enter promo code" />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="submit"
                                            defaultValue="Verify"
                                            className="custom-button"
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="checkout-widget checkout-card mb-0">
                                <h5 className="title">Payment Option </h5>
                                <ul className="payment-option nav nav-pills mb-3" id="pills-tab" role="tablist">
                                    <li className="nav-item" >
                                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
                                            <img src={process.env.PUBLIC_URL +"/assets/images/payment/card.png"} alt="payment" />
                                            <span>Credit Card</span>
                                        </a>
                                    </li>
                                    <li className=" nav-item">
                                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">
                                            <img src={process.env.PUBLIC_URL +"/assets/images/payment/card.png"} alt="payment" />
                                            <span>Aman-Masary</span>
                                        </a>
                                    </li>
                                  
                                </ul>
                                <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <h6 className="subtitle">Enter Your Card Details </h6>
                                <form className="payment-card-form">
                                    <div className="form-group w-100">
                                        <label htmlFor="card1">Card Details</label>
                                        <input type="text" id="card1" />
                                        <div className="right-icon">
                                            <i className="flaticon-lock" />
                                        </div>
                                    </div>
                                    <div className="form-group w-100">
                                        <label htmlFor="card2"> Name on the Card</label>
                                        <input type="text" id="card2" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="card3">Expiration</label>
                                        <input type="text" id="card3" placeholder="MM/YY" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="card4">CVV</label>
                                        <input type="text" id="card4" placeholder="CVV" />
                                    </div>
                                    <div className="form-group check-group">
                                        <input id="card5" type="checkbox" defaultChecked />
                                        <label htmlFor="card5">
                                            <span className="title">QuickPay</span>
                                            <span className="info">
                                                Save this card information to my Boleto account and make
                                                faster payments.
                                            </span>
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="submit"
                                            className="custom-button"
                                            defaultValue="make payment"
                                        />
                                    </div>
                                </form>
                                </div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                    <h1>gggggggg</h1>
                                </div>

                                <p className="notice">
                                    By Clicking "Make Payment" you agree to the{" "}
                                    <a href="#0">terms and conditions</a>
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="booking-summery bg-one">
                                <h4 className="title">booking summery</h4>
                                <ul>
                                    <li>
                                        <h6 className="subtitle">{showName}</h6>
                                        
                                    </li>
                                    <li>
                                        <h6 className="subtitle">
                                            <span>{cinema?.CinemaNamE}</span>
                                            <span className="info">{hallId}</span>
                                            
                                        </h6>
                                        <div className="info">
                                            <span>{showDate}, {showTimeCode}</span> <span>Tickets</span>
                                        </div>
                                    </li>
                                    <li>
                                        <h6 className="subtitle mb-0">
                                            <span>Tickets Price</span>
                                            <span>$150</span>
                                        </h6>
                                    </li>
                                </ul>
                                <ul className="side-shape">
                                    <li>
                                        <h6 className="subtitle">
                                            <span>combos</span>
                                            <span>$57</span>
                                        </h6>
                                        <span className="info">
                                            <span>2 Nachos Combo</span>
                                        </span>
                                    </li>
                                   
                                </ul>
                                <ul>
                                    <li>
                                        <span className="info">
                                            <span>price</span>
                                            <span>$207</span>
                                        </span>
                                        <span className="info">
                                            <span>vat</span>
                                            <span>$15</span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="proceed-area  text-center">
                                <h6 className="subtitle">
                                    <span>Amount Payable</span>
                                    <span>$222</span>
                                </h6>
                                <a href="#0" className="custom-button back-button">
                                    proceed
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ==========Movie-Section========== */}


        </>
    );
}
export default MovieCheckout;