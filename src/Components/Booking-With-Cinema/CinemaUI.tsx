import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {Link} from 'react-router-dom';
import { useSelect } from "../../helper";
import { ICinema, IMovie} from "../../models";
import { getMovieCinemaTimesRequested } from "../../React-Redux/Actions/get-movie-cinema-times-action";

import { useHistory } from 'react-router-dom';

import { getMoviesRequested } from "../../React-Redux/Actions/get-movies-action";
import './RadioStyle.css';
interface IProps{

    cinema:ICinema,
    movie:IMovie

}
const CinemaUi=(props:IProps)=> {

    const [cinema] =useState( props.cinema);
    const dispatch=useDispatch();
    const [shows,setShows]=useState<any>();
    const [showDate,setShowDate]=useState<any>([]);

    const history = useHistory();
    const {movieSchedule}=useSelect(state=>state.movieScheduleReducer);


    const [selectedShowTime, setSelectedShowTime] = useState();
    const [selectedShowDate, setSelectedShowDate] = useState();
    const [selectedHallId, setSelectedHallId] = useState();
    const [selectedShowTimeCode, setSelectedShowTimeCode] = useState();
    const [selectedCinema, setSelectedCinema] = useState<any>();
    const [selectedTimeIn, setSelectedTimeIn] = useState();
    useEffect(() => {
        //dispatch(getMovieCinemasRequested({id:id}));
        dispatch(getMoviesRequested());
        dispatch(getMovieCinemaTimesRequested({ip:cinema.location,showName:props.movie.ShowNam}))
    }, []);

    const getShowDates = (shows:any[]) =>{
        let ret:any[] = [];
        shows.forEach(show =>{
            const currentDate:any = new Date();
            const startDate:any = new Date(show.startdate);
            const endDate:any = new Date(show.enddate);
            if(!(currentDate>endDate)){
                if(currentDate>startDate){
                    ret.push({
                        showTime:show.ShowTimeName,
                        enddate:show.enddate,
                        startdate: currentDate.toLocaleDateString("en-US"),
                        isVip:show.isVip,
                        hallid:show.hallid,
                        ShowTimeCod:show.ShowTimeCod,
                        timein:show.timein,
                        inBetween:getDaysArray(currentDate,endDate).map((d:any)=>d.toLocaleDateString("en-US"))
                    })
                    //console.log("=====================>",getDaysArray(currentDate,endDate).map((d:any)=>d.toLocaleDateString("en-US")))
                }else{
                    ret.push({
                        showTime:show.ShowTimeName,
                        enddate:show.enddate,
                        isVip:show.isVip,
                        hallid:show.hallid,
                        ShowTimeCod:show.ShowTimeCod,
                        timein:show.timein,
                        inBetween:getDaysArray(startDate,endDate).map((d:any)=>d.toLocaleDateString("en-US"))
                    })
                    //console.log("=====================>",getDaysArray(startDate,endDate).map((d:any)=>d.toLocaleDateString("en-US")))

                }
                
            }else{
                ret.push({
                    showTime:show.ShowTimeName,
                    enddate:show.enddate,
                    startdate: currentDate.toLocaleDateString("en-US"),
                    isVip:show.isVip,
                    hallid:show.hallid,
                    ShowTimeCod:show.ShowTimeCod,
                    timein:show.timein,
                    inBetween:getDaysArray(endDate,endDate).map((d:any)=>d.toLocaleDateString("en-US"))
                })
            }

        })

        return ret;
    }

    const getDaysArray = (s:any,e:any) => {
        let a:any[] = [];
        let d;
        for(a=[],d=new Date(s);d<=e;d.setDate(d.getDate()+1)){
            
            a.push(new Date(d.toLocaleDateString("en-US")));
        }

        // a.push(new Date(e[e.length -1].toLocaleDateString("en-US")));
        // console.log("toLocaleDateString==================>",a)
        return a;
    };


    useEffect(() => {
        //console.log("movieSchedule===========================>",movieSchedule)
        const schedule = movieSchedule.map( sch=>{
            return{
                cinema: sch.cinema,
                times: getShowDates(sch.shows)
            }
        });
        setShows(schedule);
        if(schedule[0] !== undefined && schedule[0].times[0]){
            setShowDate(schedule[0].times[0].inBetween);

        }

        //console.log("schedule ========================>", schedule);


    }, [movieSchedule]);
    const selectShowTime = (currentShow:any,time:any) =>{
        shows.forEach((sh:any) => {
            if(sh.cinema.CinemaNamA === currentShow.cinema.CinemaNamA ){
                const d = sh.times.filter((ti:any) => ti.showTime === time)[0]
                //console.log("d ==========================>",d);
                setSelectedHallId(d.hallid);
                setShowDate(d.inBetween);
                setSelectedShowTimeCode(d.ShowTimeCod);
                setSelectedTimeIn(d.timein)
            }
        });
        setSelectedCinema(currentShow.cinema.CinemaNamA);
        setSelectedCinema(currentShow.cinema)
        setSelectedShowTime(time);

    }
    const selectShowDate = (date:any) =>{
        setSelectedShowDate(date);
        // //console.log("d ==========================>",selectShowDate === date , date , selectedShowDate);
    }

    useEffect(()=>{
        if(selectedShowDate&&selectedShowTime&&selectedCinema){
        
        
            history.push({
                pathname:`/select-chair`,
                state: { 
                    data: {
                        showName:props.movie.ShowNam,
                        cinema:selectedCinema,
                        showDat:selectedShowDate,
                        showTimeCode:selectedShowTimeCode,
                        hallId:selectedHallId,
                        timein:selectedTimeIn
                    } }
            });
        }
    },[selectedShowDate, selectedShowTime , selectedCinema])
    return (
        (
            shows?
            shows.map((show:any)=>
            <li  style={{'display':'flex', 'alignItems':'center'}}>
            <div className="movie-name">
                <a href={cinema.location} className="name" target='blank'>{show.cinema.CinemaNamA} - {show.cinema.CinemaNamE}</a>
            
            </div>
            <div className="movie-schedule middle">
            
                {
                    show.times.map((item:any)=><div className={`item ${selectedShowTime === item.showTime?'selected':'unselected'}`} onClick={()=>selectShowTime(show,item.showTime)} >{item.showTime}</div>)
                }
            
            </div>
            <div className="movie-schedule">
                {
                    showDate&&showDate.map((item:any)=><div className={`item ${selectedShowDate === item?'selected':'unselected'}`} onClick={()=>selectShowDate(item)}>{item}</div>)
                }
            
            </div>
            </li>)
            
            :
            <></>
            
        )
        
    );
};

export default CinemaUi;
