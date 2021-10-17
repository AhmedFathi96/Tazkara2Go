import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CinemaUi = (props) => {
    const [cinema] = useState(props.cenima);
    const id=props.match.params.id;
 
    const times=[
      {
      ShowTimeCod: "21",
      ShowTimeName: "6:15 PM",
      colsNo: "12",
      enddate: "2021/10/14",
      hallid: "4",
      isVip: "0",
      rowsNo: "10",
      startdate: "2021/10/13",
      timein: "6:15 PM"
      },
      {
      ShowTimeCod: "22",
      ShowTimeName: "9:05 PM",
      colsNo: "12",
      enddate: "2021/10/13",
      hallid: "4",
      isVip: "0",
      rowsNo: "10",
      startdate: "2021/10/13",
      timein: "9:05 PM"
      },
      {
      ShowTimeCod: "23",
      ShowTimeName: "12:00 AM",
      colsNo: "12",
      enddate: "2021/10/13",
      hallid: "4",
      isVip: "0",
      rowsNo: "10",
      startdate: "2021/10/13",
      timein: "12:00 AM"
      }
      ];
      function dateRange(startDate, endDate,time, steps = 1) {
       
        const dateArray = [];
        let obj={
          date:Date.now(),
          times:[]
        };
        let currentDate = new Date(startDate);
      
        while (currentDate <= new Date(endDate)) {
         obj.date= new Date(currentDate);
         obj.times.push(time);
        // console.log("obj",obj)
          dateArray.push(obj);
          // Use UTC date to prevent problems with time zones and DST
          currentDate.setUTCDate(currentDate.getUTCDate() + steps);
          obj={};
        }
      
        return dateArray;
      }
      //console.log(dateRange("2021/10/12","2021/10/14","12:00 AM"))
      function timesForDate(){
        let arrb=[];
        
        for (let i = 0; i < times.length; i++) {
          let arr = dateRange(times[i].startdate, times[i].enddate, times[i].timein);
          for (let j = 0; j < arr.length; j++) {
            arrb.push(arr[j]);
          }
        }
        return arrb;
      }
   function setDefaultCinemaImg(){
     document.getElementById("cinemaimg").src=process.env.PUBLIC_URL+"/assets/images/cast/cast02.jpg";
   }
    
  return (
    <div className="item  col-lg-3">
    <div className="movie-grid">
      <div className="movie-thumb c-thumb" style={{height:"250px"}}>
          <Link to={`/cinema-times/${cinema.CinemaId}/${id}`}>
            <img
              className="movie-image"
              src={
                "http://www.tazkara2go.com:805/images/CinemaImages/"+ cinema.CinemaId +"_1.jpg"
              }
             
              
              alt="cinema"
            />
          </Link>
      </div>
      <div className="movie-content bg-one">
        <h5 className="title m-0" style={{ fontSize: "1rem" }}>{cinema.CinemaNamA}
        
        <span className="cvt" style={{display: "block"}}>{cinema.CinemaNamE} &nbsp; &nbsp;
        <a href={cinema.location}><i className="fas fa-map-marker-alt text-danger"></i></a>
        </span>
        

        </h5>
        
      </div>
    </div>
  </div>
    
  );
};

export default CinemaUi;
// <div className="m-2"
     
//       style={{ width: "11rem", cursor: "pointer" }}
//       onClick={() => props.cenimaMovieTimes(cinema.IpAdress)}
//     >
//       <img
//       id="cinemaimg"
//         src={"http://www.tazkara2go.com:805/images/CinemaImages/"+ cinema.CinemaId +"_1.jpg"}
//         className="card-img-bottom rounded-circle image-shadow"
//         width="50%"
//         alt="..."
//         onError={setDefaultCinemaImg}
//       />

//       <div className="card-body" >
//         <p className="card-title text-center text-whight font-bolder" >
//           {cinema.CinemaNamE} <br/><a href={cinema.location}><i className="fas fa-map-marker-alt text-danger"></i></a>
//         </p>
//       </div>
//     </div>
