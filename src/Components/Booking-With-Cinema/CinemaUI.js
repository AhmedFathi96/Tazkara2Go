import React, { useEffect, useState } from "react";

const CinemaUi = (props) => {
    const [cinema] = useState(props.cenima);
   function setDefaultCinemaImg(){
     document.getElementById("cinemaimg").src=process.env.PUBLIC_URL+"/assets/images/cast/cast02.jpg";
   }
    
  return (
    <div className="m-2"
     
      style={{ width: "11rem", cursor: "pointer" }}
      onClick={() => props.cenimaMovieTimes(cinema.IpAdress)}
    >
      <img
      id="cinemaimg"
        src={"http://www.tazkara2go.com:805/images/CinemaImages/"+ cinema.CinemaId +"_1.jpg"}
        className="card-img-bottom rounded-circle image-shadow"
        width="50%"
        alt="..."
        onError={setDefaultCinemaImg}
      />

      <div className="card-body" >
        <p className="card-title text-center text-whight font-bolder" >
          {cinema.CinemaNamE} <br/><a href={cinema.location}><i className="fas fa-map-marker-alt text-danger"></i></a>
        </p>
      </div>
    </div>
  );
};

export default CinemaUi;
