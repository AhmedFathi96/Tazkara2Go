import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link,useHistory } from 'react-router-dom';

import { useSelect } from '../../helper';
import { IChair } from '../../models';
import { getBookCodeRequested } from '../../React-Redux/Actions/get-book-code-action';
import { getHallChairsRequested } from '../../React-Redux/Actions/get-hall-chairs-action';
import { getUnAvialableChairsRequested } from '../../React-Redux/Actions/get-unAvailable-chairs-action';
import { unholdChairsRequested } from '../../React-Redux/Actions/unhold-chairs-action';
import Seat from './seat';
const SelectChair: React.FC = (props:any) => {
  const data = props.history.location.state?.data;
  const history=useHistory();

  const dispatch=useDispatch();
  const {chairs}=useSelect(state=>state.hallChairsReducer);
  const {unavailableChairs}=useSelect(state=>state.unAvailableChairsReducer);
  const {bookCode}=useSelect(state=>state.bookingKeyReducer);

  const [selectedChairs,setSelectedChairs]=useState<any[]>([]);
  const [chair,setChair]=useState<any>({seat:{},selected:false});
  const [chairsTotalPrice,setChairsTotalPrice]=useState<number>(0);
  const [currentChairs,setCurrentChairs]=useState<any>();
  const [chairsIndexing,setChairsIndexing]=useState<any>();
  const [selectedShowDate,setSelectedShowDate]=useState<any>();

  const [maxChair,setMaxChair]=useState<any>({maxColNumber:0,maxRowNumber:0});

  useEffect( ()=>{
    console.log("bookCode ============================>",bookCode)
  },[bookCode])

  useEffect(() => {

    dispatch(getBookCodeRequested());
    const  d = new Date(data.showDat);
    console.log("data ============================>",d)

    const datestring =    d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate()
    console.log("datestring ============================>",datestring)
    setSelectedShowDate(datestring);
    if(data.cinema.IpAdress && data.showTimeCode && data.hallId){
      dispatch(getHallChairsRequested({ CinemaIpAdress:data.cinema.IpAdress,ShowTimeCod:data.showTimeCode,hallid:data.hallId}));
      dispatch(getUnAvialableChairsRequested({ CinemaIpAdress:data.cinema.IpAdress,ShowTimeCod:data.showTimeCode,hallId:data.hallId,ShowName:data.showName,ShowDate:datestring}));
    }
  }, [data]);
  

  const [timeLeft, setTimeLeft] = useState((data.cinema.holdWaitingMinutes -1)*60);
  const [timer, setTimer] = useState<any>();
  useEffect(() => {
    // exit early when we reach 0
    if (!timeLeft){
      dispatch(unholdChairsRequested(
        {
          CinemaIpAdress:data.cinema.IpAdress,
          ShowTimeCod:data.showTimeCode,
          hallId:data.hallId,
          ShowDate:selectedShowDate,
          bookcode:bookCode
        }
      ));
      history.push('/')
      return;
    };

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
      let minutes = Math.floor((timeLeft - 1 ) / 60); // get minutes
      let seconds = timeLeft - 1 -  (minutes * 60); //  get seconds
      setTimer("0"+minutes+":"+seconds)
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft]);


  useEffect(() => {
    let maxColNumber = 0;
    let maxRowNumber = 0;
    chairs.forEach(chair =>{
      
      maxColNumber = Number.parseInt(chair.ColNo) > maxColNumber? Number.parseInt(chair.ColNo) : maxColNumber;
      maxRowNumber = Number.parseInt(chair.RowNo) > maxRowNumber? Number.parseInt(chair.ColNo) : maxRowNumber;
    });
    setMaxChair({maxColNumber:maxColNumber,maxRowNumber:maxRowNumber})
  }, [chairs]);

  useEffect(()=>{
    getCharsByRow();
    console.log("unavailableChairs ======================>",unavailableChairs)

  },[maxChair, chairs,unavailableChairs]);

  const getCharsByRow = () =>{
    let rows:any[]= [];
    let indexes:any[] = []
    if(maxChair.maxRowNumber >0&&maxChair.maxColNumber>0){
      for(let i=maxChair.maxRowNumber;i>0;i--){
        let cols = new Array(maxChair.maxColNumber).fill(<li className="single-seat emptySeat"></li>);
        const currentChairs = chairs.filter(ch=> Number.parseInt(ch.RowNo) === i );  
        if(currentChairs.length>0){
          indexes.push(currentChairs[0].ChairRowTitle)     
          currentChairs.forEach( (ch:IChair)=>{
            const unavailableChair = unavailableChairs.filter(cha=> cha.ChairId === ch.ChairId );
            // console.log("unavailableChair ======================>",unavailableChair)
            if(unavailableChair.length > 0){
              cols[Number.parseInt(ch.ColNo)-1]=<Seat chair={ch} selected={false} unavailable={true} 
              selectChair={handleSelectSeat}
              unSelectChair={handleUnSelectSeat}
              holdData={
              {
                CinemaIpAdress:data.cinema.IpAdress,
                ShowTimeCod:data.showTimeCode,
                hallId:data.hallId,
                ShowDate:selectedShowDate,
                bookcode:bookCode,
                holdWaitingMinutes:data.cinema.holdWaitingMinutes,
                ShowName:data.showName,
                timein:data.timein
              }
              }  />
            }else{
              cols[Number.parseInt(ch.ColNo)-1]=<Seat chair={ch} selected={false} unavailable={false} 
              selectChair={handleSelectSeat}
              unSelectChair={handleUnSelectSeat}
              holdData={
                {
                  CinemaIpAdress:data.cinema.IpAdress,
                  ShowTimeCod:data.showTimeCode,
                  hallId:data.hallId,
                  ShowDate:selectedShowDate,
                  bookcode:bookCode,
                  holdWaitingMinutes:data.cinema.holdWaitingMinutes,
                  ShowName:data.showName,
                  timein:data.cinema.holdWaitingMinutes
                }
                }/>

            }
            ;
          });
          rows.push(cols);
        }
        
      }
      setCurrentChairs(rows);

      setChairsIndexing(indexes);
    }



  }
  const goToPayment=()=>{
    if(data){
        
        
      history.push({
          pathname:`/movie-checkout`,
          state: { 
              data: {
                  showName:data.showName,
                        cinema:data.cinema,
                        showDat:data.showDat,
                        showTimeCode:data.showTimeCode,
                        hallId:data.hallId,
                        timein:data.timein,
                        timer:timeLeft,
                        selectedChairs:selectedChairs,
                        chairsTotalPrice:chairsTotalPrice
              } }
      });
  }
  }

  useEffect(()=>{
    if(chair.selected){
      let seats = selectedChairs;
      seats.push(chair.seat);
  
      setSelectedChairs(seats);
      console.log("handleSelectSeat price=======================>",chairsTotalPrice)

      if(Number.isNaN(chairsTotalPrice)){
        setChairsTotalPrice(Number.parseInt(chair.seat.ChairPrice));
      }else{
        const price = chairsTotalPrice + Number.parseInt(chair.seat.ChairPrice);
        setChairsTotalPrice(price);
      }

      
    }else{

      const seats = selectedChairs.filter((ch:IChair)=> ch.ChairId !== chair.seat.ChairId);
      console.log("handleUnSelectSeat price=======================>",chairsTotalPrice);

      if(Number.isNaN(chairsTotalPrice)){
        setChairsTotalPrice(Number.parseInt(chair.seat.ChairPrice));
      }else{
        const price = chairsTotalPrice - Number.parseInt(chair.seat.ChairPrice);
        setChairsTotalPrice(price);
      }
      
      setSelectedChairs(seats);
    }
  },[chair])

  const handleSelectSeat = (seat:IChair) =>{
    setChair({seat:seat, selected:true});
  }

  const handleUnSelectSeat = (seat:IChair) =>{
    setChair({seat:seat, selected:false});
  }
    return(
        <>
            <section className="page-title bg-one">
                <div className="container">
                  <br/><br/><br/>
                    <div className="page-title-area">
                        <div className="item md-order-1">
                            <a href="movie-ticket-plan.html" className="custom-button back-button">
                                <i className="flaticon-double-right-arrows-angles"></i>back
                            </a>
                        </div>
                        <div className="item">
                            <h5 className="title">{timer}</h5>
                            <p>Mins Left</p>
                        </div>
                    </div>
                </div>
            </section>

          <section style={{marginTop:"50px"}}>
          <div className="seat-plan-section padding-bottom padding-top">
            <div className="container-fluid">
              <div className="screen-area">
                <h4 className="screen">Hall {data.hallId}</h4>
                <div className="screen-thumb">
                  <img src="/assets/images/movie/screen-thumb.png" alt="movie" />
                </div>
                
                <div className="screen-wrapper">
                  {
                    currentChairs && currentChairs.map((ch:any[],index:number)=>
                    
                    <ul className="seat-area">
                      <li className="seat-line">
                        <span>{chairsIndexing[index]}</span>
                        <ul className="seat--area">
                          <li className="front-seat">
                            <ul>
                              {
                                ch.map(c=>
                                    c
                                  )
                              }
                            </ul>
                          </li>
                    
                        </ul>
                        <span>{chairsIndexing[index]}</span>
                      </li>
              
                  </ul>
                    )
                  }
                  
                </div>
                
              </div>
              <div
                className="proceed-book bg_img"
                data-background="../../../assets/images/movie/movie-bg-proceed.jpg"
              >
                <div className="proceed-to-book">
                  <div className="book-item">
                    <span>You have Choosed Seat</span>
                    <h3 className="title">
                      {
                        selectedChairs.map((ch:IChair)=> `${ch.ChairRowTitle}${ch.ChairId},`)
                      }
                    </h3>
                  </div>
                  <div className="book-item">
                    <span>total price</span>
                    <h3 className="title">{chairsTotalPrice?`$ ${chairsTotalPrice}`:''}</h3>
                  </div>
                  <div className="book-item">
                    {
                      chairsTotalPrice?(
                        <a onClick={()=>goToPayment()} className="custom-button">
                          proceed
                        </a>
                      ):
                      ''
                    }
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          </section>
          
          <section>
        
          </section>
          
        </>

    )
    

    }
    export default SelectChair;