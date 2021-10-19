import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {Link} from 'react-router-dom';
import { getMovieCinemaTimes } from "../../Axios/get-movie-cinema-times";
import { useSelect } from "../../helper";
import { ICinema, IMovie, ITimeItem } from "../../models";
import { getMovieCinemaTimesRequested } from "../../React-Redux/Actions/get-movie-cinema-times-action";

import { getMovieCinemasRequested } from "../../React-Redux/Actions/get-movie-cinemas-action";
import { getMovieScheduleRequested } from "../../React-Redux/Actions/get-movie-schedule";
import { getMoviesRequested } from "../../React-Redux/Actions/get-movies-action";
import './RadioStyle.css';
 interface data{
   
  cinema:ICinema,
  
  
}
const CinemaUi=(props:data)=> {

 const [cinema] =useState( props.cinema);
  const dispatch=useDispatch();
  const [movie,setMovie] = useState<IMovie>();
  const [alltimes,setAllTimes]=useState<any>();
  const [dates,setDstes]=useState<any>();
  const {movies}=useSelect(state=>state.moviesReducer);
  //const {cinema}=useState(props);
  const {cinemas}=useSelect(state=>state.movieCinemasReducer);
 
  const {movieSchedule}=useSelect(state=>state.movieScheduleReducer);
  const {times}=useSelect(state=>state.movieCinemaTimesReducer);


  useEffect(() => {
      //dispatch(getMovieCinemasRequested({id:id}));
      dispatch(getMoviesRequested());
      dispatch(getMovieCinemaTimesRequested({ip:"62.193.99.221",showName:"Dune"}))
  }, []);
 
  useEffect(() => {
     

      setAllTimes(timesForDate())
     
  
  }, [times]);
  useEffect(() => {
     let dats:any=[]

  console.log(alltimes)
    for(var i in alltimes){
      if(dats.indexOf((alltimes[i].date).toString()) === -1){
          dats.push(((alltimes[i].date)));
      }
  }
  setDstes(dats)

}, [alltimes]);


  // useEffect(() => {
  //     console.log("========================>", movieSchedule );

  // }, [movieSchedule]);
  const dateRange =(startDate:any, endDate:any,time:any, steps = 1) =>{
     
      const dateArray = [];
      let obj:any={
        date:Date.now(),
        timeData:time
      };
      let currentDate = new Date(startDate);
    
      while (currentDate <= new Date(endDate)) {
        obj.date= new Date(currentDate);
        
      
        dateArray.push(obj);
        // Use UTC date to prevent problems with time zones and DST
        currentDate.setUTCDate(currentDate.getUTCDate() + steps);
        obj={};
      }
    
      return dateArray;
    }
     const timesForDate = ()=>{
      let arrb=[];
      let obj:ITimeItem;
     
      
      for (let i = 0; i < times.length; i++) {
         obj={
          hallid:times[i].hallid,
          ShowTimeCod: times[i].ShowTimeCod,
          ShowTimeName: times[i].ShowTimeName,
          timein:times[i].timein,
          
          
          colsNo: times[i].colsNo,
          rowsNo: times[i].rowsNo

         }

        let arr = dateRange(times[i].startdate, times[i].enddate,obj);
        for (let j = 0; j < arr.length; j++) {
          arrb.push(arr[j]);
        }
      }
      return arrb;
    }
    //console.log("cinema", cinema)
  return (
    <li  style={{'display':'flex', 'alignItems':'center'}}>
    <div className="movie-name">
        <div className="icons">
            <i className="far fa-heart"></i>
            <i className="fas fa-heart"></i>
        </div>
        <a href={cinema.location} className="name" target='blank'>{cinema.CinemaNamE}</a>
        <div className="location-icon">
            <i className="fas fa-map-marker-alt"></i>
        </div>
    </div>
    <div className="movie-schedule middle">
       
        {
          dates&&dates.slice(0,6).map((c:any,i:any)=><div className="item radio-toolbar">
        
            <input
              name="lastName"
              key={i}
              id={`radio${i}`}
              value={c.toLocaleDateString()}
              type="radio"
              

            />
            <label htmlFor={`radio${i}`}> {c.toLocaleDateString()}</label>
       </div>)
        }
      
    </div>
    <div className="movie-schedule">
        <div className="item">
            09:40
        </div>
        <div className="item">
            13:45
        </div>
        <div className="item">
            15:45
        </div>
        <div className="item">
            19:50
        </div>
    </div>
    </li>
    
  );
};

export default CinemaUi;
{/* <li  style={{'display':'flex', 'alignItems':'center'}}>
<div className="movie-name">
    <div className="icons">
        <i className="far fa-heart"></i>
        <i className="fas fa-heart"></i>
    </div>
    <a href={c.location} className="name" target='blank'>{cinema.CinemaNamE}</a>
    <div className="location-icon">
        <i className="fas fa-map-marker-alt"></i>
    </div>
</div>
<div className="movie-schedule middle">
    <div className="item">
        09:40
    </div>
    <div className="item">
        13:45
    </div>
    <div className="item">
        15:45
    </div>
    <div className="item">
        19:50
    </div>
</div>
<div className="movie-schedule">
    <div className="item">
        09:40
    </div>
    <div className="item">
        13:45
    </div>
    <div className="item">
        15:45
    </div>
    <div className="item">
        19:50
    </div>
</div>
</li>  */}
