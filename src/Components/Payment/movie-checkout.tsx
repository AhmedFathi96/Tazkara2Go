import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelect } from "../../helper";
import { IMovie } from "../../models";
import { getData00Requested } from "../../React-Redux/Actions/common-payment-actions";
import { getMoviesRequested } from "../../React-Redux/Actions/get-movies-action";
import { getUserInfoRequested } from "../../React-Redux/Actions/get-user-info-action";
import { loginRequested } from "../../React-Redux/Actions/login-action";
import { finalDataAmanRequested } from "../../React-Redux/Actions/payByAman-action";
import { finalDataCardRequested } from "../../React-Redux/Actions/payByCard-action";
import { amanReducer } from "../../React-Redux/Reducers/aman-reducer";

const MovieCheckout: React.FC = (props: any) => {
    //const Key:String=localStorage.getItem("userKey")?.toString();
   const Key=localStorage.getItem("userKey");
    const [paymantType,setpaymantType]=useState("");
    const data = props.history.location.state?.data;
    const [timer, setTimer] = useState<any>();
    const [timeLeft, setTimeLeft] = useState(data.timer);
    const [contactData, setContactData] = useState({ fName: "", email: "", phone: "" });
    const [movie,setMovie]=useState<IMovie>()
    const {movies}=useSelect(state=>state.moviesReducer);
    const {info}=useSelect(state=>state.userInfoReducer);
    const [fees,setFees]=useState(data.cinema.VisaExpence);
    const [expire,setExpire]=useState(data.cinema.visaWaitingMinutes);
    const dispatch = useDispatch();
    const selector=useSelect(state=>amanReducer)
    const handleContactData = (e: any) => {
        const { name, value } = e.target;
        setContactData(prevState => ({
            ...prevState,
            [name]: value
        }));
        console.log(contactData)
    };
    const setpaymantData=(val:string)=>{
        //console.log(val)
        if(val=='Aman'){
            const fee= data.cinema.AmanExpence;
            const exp=data.cinema.amanWaitingMinutes-1;
            setpaymantType('Aman')
            setFees(fee);
            setExpire(exp.toString())
        }else{
            const fee= data.cinema.VisaExpence;
            const exp=data.cinema.visaWaitingMinutes-1;
            setpaymantType('Card')
            setFees(fee);
            setExpire(exp.toString())

        }
    // console.log("fee",fees,paymantType)

    }
    

    useEffect(()=>{
       console.log(Key)
       if(Key){
            dispatch(getUserInfoRequested({userKey:Key}));

        }
        dispatch(getMoviesRequested());
    },[])
    const dispachPaymentMethod=(v:any)=>{
        console.log(v)
        if(v=='Aman'){
        dispatch(finalDataAmanRequested({bookCode:data.bookCode,name:contactData.fName,email:contactData.email,phone:contactData.phone,cinemaId:data.cinema.CinemaId,hallId:data.hallId,chairId:data.selectedChairs[0].ChairId,paymentType:paymantType,partyDate:data.showDat,partyId:data.showTimeCode,partyTime:data.timein,showId:movie?.ShowId,expire}))

        }else{
        dispatch(finalDataCardRequested({bookCode:data.bookCode,name:contactData.fName,email:contactData.email,phone:contactData.phone,cinemaId:data.cinema.CinemaId,hallId:data.hallId,chairId:data.selectedChairs[0].ChairId,paymentType:paymantType,partyDate:data.showDat,partyId:data.showTimeCode,partyTime:data.timein,showId:movie?.ShowId,expire}))


        }

    }
    // useEffect(()=>{
    //     dispatch(finalDataAmanRequested({bookCode:data.bookCode,name:contactData.fName,email:contactData.email,phone:contactData.phone,cinemaId:data.cinema.CinemaId,hallId:data.hallId,chairId:data.selectedChairs[0].ChairId,paymentType:paymantType,partyDate:data.showDat,partyId:data.showTimeCode,partyTime:data.timein,showId:movie?.ShowId,expire:data.showTimeCode}))

    // },[contactData,paymantType])
    useEffect(()=>{
       console.log(selector)
    },[selector])
   
    useEffect(()=>{
      const mov=movies.find(m=>m.ShowNam==data.showName);
      console.log(mov)
      setMovie(mov)
    },[movies])
    useEffect(()=>{
        if(info[0])
      {  console.log("info",info[0])
        setContactData({fName:info[0].UserName,email:info[0].UserEmail,phone:info[0].UserPhone})}
    },[info])
    
    
  

    useEffect(() => {
        // exit early when we reach 0
        if (!timeLeft) {

            return;
        };

        // save intervalId to clear the interval when the
        // component re-renders
        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
            let minutes = Math.floor((timeLeft - 1) / 60); // get minutes
            let seconds = timeLeft - 1 - (minutes * 60); //  get seconds
            setTimer("0" + minutes + ":" + seconds)
        }, 1000);

        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId);
    }, [timeLeft]);

    return (
        <>
        <section>
            
        </section>

            {/* ==========Banner-Section========== */}
            <section
                className="details-banner hero-area bg_img seat-plan-banner"

            >
                <div className="container">
                    <div className="details-banner-wrapper">
                        <div className="details-banner-content style-two">
                            <h3 className="title">{data.showName}</h3>
                            <div className="tags">
                                <a href="#0">{data.cinema.CinemaNamE}</a>

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
                            <h5 className="title">{timer}</h5>
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
                           {!Key&& <div className="checkout-widget d-flex flex-wrap align-items-center justify-cotent-between">
                                <div className="title-area">
                                    <h5 className="title">Already a Tazkara2Go Member?</h5>
                                    <p>Sign in to earn points and make booking easier!</p>
                                </div>
                                <a href="/sign-in" className="sign-in-area">
                                    <i className="fas fa-user" />
                                    <span>Sign in</span>
                                </a>
                            </div>}

                          {!Key&&  <div className="checkout-widget checkout-contact">
                                <h5 className="title">Share your Contact Details </h5>
                                <form className="checkout-contact-form">
                                    <div className="form-group">
                                        <input type="text" name="fName" placeholder="Full Name" onChange={handleContactData} />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="email" placeholder="Enter your Mail" onChange={handleContactData} />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="phone" placeholder="Enter your Phone Number " onChange={handleContactData} />
                                    </div>

                                </form>

                            </div>}
                            <div className="checkout-widget checkout-contact d-none">
                                <h5 className="title">Promo Code </h5>
                                <form className="checkout-contact-form">
                                    <div className="form-group">
                                        <input type="text" placeholder="Please enter promo code" />
                                    </div>

                                </form>
                            </div>
                            <div className="checkout-widget checkout-card mb-0 ">
                                <h5 className="title">Payment Option </h5>
                                <ul className="payment-option nav nav-pills mb-3" id="pills-tab" role="tablist">
                                    <li className="nav-item" >
                                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true" onClick={()=>setpaymantData('Card')}  >
                                           
                                            <img src={process.env.PUBLIC_URL + "/assets/images/payment/card.png"} alt="payment" />
                                            <span>Credit Card</span>
                                           
                                        </a>
                                    </li>
                                    <li className=" nav-item">
                                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false" onClick={()=>setpaymantData('Aman')}>
                                            <img src={process.env.PUBLIC_URL + "/assets/images/payment/card.png"} alt="payment" />
                                            <span>Aman-Masary</span>
                                        </a>
                                    </li>
                                

                                </ul>
                                <div className="tab-content " id="pills-tabContent">
                                   {(contactData.email && contactData.phone && contactData.fName)?  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                        <h6 className="subtitle">Enter Your Card Details </h6>
                                        <h6>Email: {contactData.email}</h6><br />
                                        <h6>Full Name: {contactData.fName}</h6><br />
                                        <h6>Phone: {contactData.phone}</h6><br />
                                        <h6>Payment Option: Credit-Card</h6><br />
                                        <a type="button" className="custom-button back-button" onClick={()=>dispachPaymentMethod('Card')}> confirm payment</a>
                                    </div> : <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">plz enter your contact data first to pay by Credit Card</div>}
                                    {(contactData.email && contactData.phone && contactData.fName)? <div className="tab-pane fade " id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" >
                                        <h6>Email: {contactData.email}</h6><br />
                                        <h6>Full Name: {contactData.fName}</h6><br />
                                        <h6>Phone: {contactData.phone}</h6><br />
                                        <h6>Payment Option: Aman-Masary</h6><br />
                                        <a type="button" className="custom-button back-button" onClick={()=>dispachPaymentMethod('Aman')}> confirm payment</a>
                                    </div> : <div className="tab-pane fade " id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">plz enter your contact data first to pay Aman-Masary</div>}

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
                                        <h6 className="subtitle">{data.showName}</h6>

                                    </li>
                                    <li>
                                        <h6 className="subtitle">
                                            <span>{data.cinema.CinemaNamE}</span>
                                            <span className="info">{data.hallId}</span>

                                        </h6>
                                        <div className="info">
                                            <span>{data.showDat}, {data.timein}</span> <span>Tickets</span>
                                        </div>
                                    </li>
                                    <li>
                                        <h6 className="subtitle mb-0">
                                            <span>Tickets Price</span>
                                            <span>{data.chairsTotalPrice}</span>
                                            
                                        </h6><br/>
                                        <h6 className="subtitle mb-0">
                                            <span>Fees</span>
                                            <span>{fees}</span>
                                            
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
                                    <span>$ {parseFloat(data.chairsTotalPrice)+parseFloat(fees) }</span>
                                </h6>
                              
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