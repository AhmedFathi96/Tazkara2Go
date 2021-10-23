import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelect } from '../../helper';
import { IChair } from '../../models';
import { getHallChairsRequested } from '../../React-Redux/Actions/get-hall-chairs-action';
import { getUnAvialableChairsRequested } from '../../React-Redux/Actions/get-unAvailable-chairs-action';
import Seat from './seat';
const SelectChair: React.FC = (props:any) => {

  const cinemaIP = props.match.params.cinemaIP;
  const showTimeCode = props.match.params.showTimeCode;
  const hallId = props.match.params.hallId;
  const showName = props.match.params.showName;
  const showDate = props.match.params.showDate;
  const dispatch=useDispatch();
  const {chairs}=useSelect(state=>state.hallChairsReducer);
  const [selectedChairs,setselectedChairs]=useState<any>();
  const [currentChairs,setCurrentChairs]=useState<any>();
  const [chairsIndexing,setChairsIndexing]=useState<any>();

  const [maxChair,setMaxChair]=useState<any>({maxColNumber:0,maxRowNumber:0});

  useEffect(() => {
    if(cinemaIP && showTimeCode && hallId){
      dispatch(getHallChairsRequested({ CinemaIpAdress:cinemaIP,ShowTimeCod:showTimeCode,hallid:hallId}));
      dispatch(getUnAvialableChairsRequested({ CinemaIpAdress:cinemaIP,ShowTimeCod:showTimeCode,hallId:hallId,ShowName:showName,ShowDate:showDate}));
    }
  }, [cinemaIP , showTimeCode , hallId]);

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

  },[maxChair, chairs]);

  const getCharsByRow = () =>{
    let rows:any[]= [];
    let indexes:any[] = []
    if(maxChair.maxRowNumber >0&&maxChair.maxColNumber>0){
      for(let i=1;i<=maxChair.maxRowNumber;i++){
        let cols = new Array(maxChair.maxColNumber).fill(<li className="single-seat emptySeat"></li>);
        const currentChairs = chairs.filter(ch=> Number.parseInt(ch.RowNo) === i );  
        if(currentChairs.length>0){
          indexes.push(currentChairs[0].ChairRowTitle)     
          currentChairs.forEach( (ch:IChair)=>{
            cols[Number.parseInt(ch.ColNo)-1]=<Seat chairProp={ch} selected={false} />
            ;
          });
          rows.push(cols);
        }
        
      }
      setCurrentChairs(rows);

      setChairsIndexing(indexes);
    }



  }
    return(
        <>
        
          <section style={{marginTop:"50px"}}>
          <div className="seat-plan-section padding-bottom padding-top">
            <div className="container-fluid">
              <div className="screen-area">
                <h4 className="screen">Hall {hallId}</h4>
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
                {/* <h5 className="subtitle">silver plus</h5>
                <div className="screen-wrapper">
                  <ul className="seat-area couple">
                    <li className="seat-line">
                      <span>e</span>
                      <ul className="seat--area">
                        <li className="front-seat">
                          <ul>
                            <li className="single-seat">
                              <img src="../../../assets/images/movie/seat02.png" alt="seat" />
                            </li>
                            <li className="single-seat">
                              <img src="../../../assets/images/movie/seat02.png" alt="seat" />
                            </li>
                          </ul>
                        </li>
                        <li className="front-seat">
                          <ul>
                            <li className="single-seat">
                              <img src="../../../assets/images/movie/seat02.png" alt="seat" />
                            </li>
                            <li className="single-seat">
                              <img src="../../../assets/images/movie/seat02.png" alt="seat" />
                            </li>
                            <li className="single-seat">
                              <img src="../../../assets/images/movie/seat02.png" alt="seat" />
                            </li>
                          </ul>
                        </li>
                        <li className="front-seat">
                          <ul>
                            <li className="single-seat">
                              <img src="../../../assets/images/movie/seat02.png" alt="seat" />
                            </li>
                            <li className="single-seat">
                              <img src="../../../assets/images/movie/seat02.png" alt="seat" />
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <span>e</span>
                    </li>
                    <li className="seat-line">
                      <span>d</span>
                      <ul className="seat--area">
                        <li className="front-seat">
                          <ul>
                            <li className="single-seat">
                              <img src="../../../assets/images/movie/seat02.png" alt="seat" />
                            </li>
                            <li className="single-seat">
                              <img src="../../../assets/images/movie/seat02.png" alt="seat" />
                            </li>
                          </ul>
                        </li>
                        <li className="front-seat">
                          <ul>
                            <li className="single-seat">
                              <img src="../../../assets/images/movie/seat02.png" alt="seat" />
                            </li>
                            <li className="single-seat seat-free-two">
                              <img
                                src="../../../assets/images/movie/seat02-booked.png"
                                alt="seat"
                              />
                              <span className="sit-num">D7 D8</span>
                            </li>
                            <li className="single-seat">
                              <img src="../../../assets/images/movie/seat02.png" alt="seat" />
                            </li>
                          </ul>
                        </li>
                        <li className="front-seat">
                          <ul>
                            <li className="single-seat">
                              <img src="../../../assets/images/movie/seat02.png" alt="seat" />
                            </li>
                            <li className="single-seat">
                              <img src="../../../assets/images/movie/seat02.png" alt="seat" />
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <span>d</span>
                    </li>
                    <li className="seat-line">
                      <span>c</span>
                      <ul className="seat--area">
                        <li className="front-seat">
                          <ul>
                            <li className="single-seat">
                              <img src="../../../assets/images/movie/seat02.png" alt="seat" />
                            </li>
                            <li className="single-seat">
                              <img src="../../../assets/images/movie/seat02.png" alt="seat" />
                            </li>
                          </ul>
                        </li>
                        <li className="front-seat">
                          <ul>
                            <li className="single-seat">
                              <img src="../../../assets/images/movie/seat02.png" alt="seat" />
                            </li>
                            <li className="single-seat">
                              <img src="../../../assets/images/movie/seat02.png" alt="seat" />
                            </li>
                            <li className="single-seat">
                              <img src="../../../assets/images/movie/seat02.png" alt="seat" />
                            </li>
                          </ul>
                        </li>
                        <li className="front-seat">
                          <ul>
                            <li className="single-seat seat-free-two">
                              <img
                                src="../../../assets/images/movie/seat02-free.png"
                                alt="seat"
                              />
                              <span className="sit-num">f11 f12</span>
                            </li>
                            <li className="single-seat">
                              <img src="../../../assets/images/movie/seat02.png" alt="seat" />
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <span>c</span>
                    </li>
                    <li className="seat-line">
                      <span>b</span>
                      <ul className="seat--area">
                        <li className="front-seat">
                          <ul>
                            <li className="single-seat">
                              <img src="../../../assets/images/movie/seat02.png" alt="seat" />
                            </li>
                            <li className="single-seat">
                              <img src="../../../assets/images/movie/seat02.png" alt="seat" />
                            </li>
                          </ul>
                        </li>
                        <li className="front-seat">
                          <ul>
                            <li className="single-seat">
                              <img src="../../../assets/images/movie/seat02.png" alt="seat" />
                            </li>
                            <li className="single-seat seat-free-two">
                              <img
                                src="../../../assets/images/movie/seat02-free.png"
                                alt="seat"
                              />
                              <span className="sit-num">b7 b8</span>
                            </li>
                            <li className="single-seat">
                              <img src="../../../assets/images/movie/seat02.png" alt="seat" />
                            </li>
                          </ul>
                        </li>
                        <li className="front-seat">
                          <ul>
                            <li className="single-seat">
                              <img src="../../../assets/images/movie/seat02.png" alt="seat" />
                            </li>
                            <li className="single-seat">
                              <img src="../../../assets/images/movie/seat02.png" alt="seat" />
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <span>b</span>
                    </li>
                    <li className="seat-line">
                      <span>a</span>
                      <ul className="seat--area">
                        <li className="front-seat">
                          <ul>
                            <li className="single-seat seat-free-two">
                              <img
                                src="../../../assets/images/movie/seat02-free.png"
                                alt="seat"
                              />
                              <span className="sit-num">a1 a2</span>
                            </li>
                            <li className="single-seat seat-free-two">
                              <img
                                src="../../../assets/images/movie/seat02-free.png"
                                alt="seat"
                              />
                              <span className="sit-num">a3 a4</span>
                            </li>
                          </ul>
                        </li>
                        <li className="front-seat">
                          <ul>
                            <li className="single-seat seat-free-two">
                              <img
                                src="../../../assets/images/movie/seat02-free.png"
                                alt="seat"
                              />
                              <span className="sit-num">a5 a6</span>
                            </li>
                            <li className="single-seat seat-free-two">
                              <img
                                src="../../../assets/images/movie/seat02-free.png"
                                alt="seat"
                              />
                              <span className="sit-num">a7 a8</span>
                            </li>
                            <li className="single-seat seat-free-two">
                              <img
                                src="../../../assets/images/movie/seat02-free.png"
                                alt="seat"
                              />
                              <span className="sit-num">a9 a10</span>
                            </li>
                          </ul>
                        </li>
                        <li className="front-seat">
                          <ul>
                            <li className="single-seat seat-free-two">
                              <img
                                src="../../../assets/images/movie/seat02-free.png"
                                alt="seat"
                              />
                              <span className="sit-num">a11</span>
                            </li>
                            <li className="single-seat seat-free-two">
                              <img
                                src="../../../assets/images/movie/seat02-free.png"
                                alt="seat"
                              />
                              <span className="sit-num">a12</span>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <span>a</span>
                    </li>
                  </ul>
                </div> */}
              </div>
              <div
                className="proceed-book bg_img"
                data-background="../../../assets/images/movie/movie-bg-proceed.jpg"
              >
                <div className="proceed-to-book">
                  <div className="book-item">
                    <span>You have Choosed Seat</span>
                    <h3 className="title">d9, d10</h3>
                  </div>
                  <div className="book-item">
                    <span>total price</span>
                    <h3 className="title">$150</h3>
                  </div>
                  <div className="book-item">
                    <a href="movie-checkout.html" className="custom-button">
                      proceed
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </section>
          
        </>

    )
    

    }
    export default SelectChair;