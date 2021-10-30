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
    const [vipShows,setVipShows]=useState<any>();
    const [showDate,setShowDate]=useState<any>([]);
    const [showVipDate,setVipShowDate]=useState<any>([]);

    const history = useHistory();
    const {movieSchedule}=useSelect(state=>state.movieScheduleReducer);


    const [selectedShowTime, setSelectedShowTime] = useState();
    const [selectedFinalShowTime, setSelectedFinalShowTime] = useState();


    const [selectedVipShowTime, setSelectedVipShowTime] = useState();

    const [selectedShowDate, setSelectedShowDate] = useState();

    const [selectedFinalShowDate, setSelectedFinalShowDate] = useState();

    const [selectedVipShowDate, setSelectedVipShowDate] = useState();

    const [selectedHallId, setSelectedHallId] = useState();
    const [selectedShowTimeCode, setSelectedShowTimeCode] = useState();
    const [selectedCinema, setSelectedCinema] = useState<any>();
    const [selectedCinemaName, setSelectedCinemaName] = useState<any>();

    const [selectedTimeIn, setSelectedTimeIn] = useState();
    const [currentShowDates, setCurrentShowDates] = useState<any[]>([]);
    const [currentVipShowDates, setVipCurrentShowDates] = useState<any[]>([]);

    const [currentVipShowsLength, setCurrentVipShowsLength] = useState<number>(0);
    const [currenShowsLength, setCurrentShowsLength] = useState<number>(0);
    useEffect(() => {
        //dispatch(getMovieCinemasRequested({id:id}));
        dispatch(getMoviesRequested());
        dispatch(getMovieCinemaTimesRequested({ip:cinema.IpAdress,showName:props.movie.ShowNam}))
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

    useEffect(()=>{
        const currentVip = movieSchedule.filter( (sch:any)=> sch.cinema.CinemaNamA === cinema.CinemaNamA)[0];
        console.log("currentVip ==========================>",currentVip)
        const current = movieSchedule.filter( (sch:any)=> sch.cinema.CinemaNamA === cinema.CinemaNamA)[0];
        console.log("current ==========================>",current);
        if(currentVip && current){
            setCurrentShowsLength(current.shows.length);
            setCurrentVipShowsLength(currentVip.vipShows.length);

        }
    },[movieSchedule])
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
        console.log("movieSchedule===========================>",movieSchedule)
        const schedule = movieSchedule.map( sch=>{
            return{
                cinema: sch.cinema,
                times: getShowDates(sch.shows)
            }
        });

        const vipSchedule = movieSchedule.map( sch=>{
            return{
                cinema: sch.cinema,
                times: getShowDates(sch.vipShows)
            }
        });

        
        setShows(schedule);
        setVipShows(vipSchedule);
        if(schedule[0] !== undefined&&schedule[0].times[0]!== undefined){
            setShowDate(schedule[0].times[0].inBetween);
        }
        if(vipSchedule[0] !== undefined&&vipSchedule[0].times[0]!== undefined){
            setVipShowDate(schedule[0].times[0].inBetween);
        }
        //console.log("schedule ========================>", schedule)
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
        //setSelectedCinema(currentShow.cinema.CinemaNamA);
        setSelectedCinema(currentShow.cinema)
        setSelectedShowTime(time);
        setSelectedFinalShowTime(time);

    }
    const selectShowDate = (currentShow:any,date:any) =>{
        // console.log("d ==========================>",shows);

        shows.forEach((sh:any) => {
            if(sh.cinema.CinemaNamA === currentShow.cinema.CinemaNamA ){
                const d = sh.times.map((ti:any) =>{
                    const da = ti.inBetween.find((ins:any)=> ins === date);
                    if(da){
                        return{
                            ...ti
                        }
                    }
                })
                console.log("d ==========================>",d);
                setCurrentShowDates(d);
                // setSelectedHallId(d.hallid);
                // setShowDate(d.inBetween);
                // setSelectedShowTimeCode(d.ShowTimeCod);
                // setSelectedTimeIn(d.timein)
            }
        });

        setSelectedShowDate(date);
        setSelectedFinalShowDate(date);
        // console.log("d ==========================>",date);
    }

    const selectVipShowTime = (currentShow:any,time:any) =>{
        vipShows.forEach((sh:any) => {
            if(sh.cinema.CinemaNamA === currentShow.cinema.CinemaNamA ){
                const d = sh.times.filter((ti:any) => ti.showTime === time)[0]
                //console.log("d ==========================>",d);
                setSelectedHallId(d.hallid);
                setVipShowDate(d.inBetween);
                setSelectedShowTimeCode(d.ShowTimeCod);
                setSelectedTimeIn(d.timein)
            }
        });
        //setSelectedCinema(currentShow.cinema.CinemaNamA);
        setSelectedCinema(currentShow.cinema)
        setSelectedVipShowTime(time);
        setSelectedFinalShowTime(time);
    }
    const selectVipShowDate = (currentShow:any,date:any) =>{
        // console.log("d ==========================>",shows);

        vipShows.forEach((sh:any) => {
            if(sh.cinema.CinemaNamA === currentShow.cinema.CinemaNamA ){
                const d = sh.times.map((ti:any) =>{
                    const da = ti.inBetween.find((ins:any)=> ins === date);
                    if(da){
                        return{
                            ...ti
                        }
                    }
                })
                console.log("d ==========================>",d);
                setVipCurrentShowDates(d);
                // setSelectedHallId(d.hallid);
                // setShowDate(d.inBetween);
                // setSelectedShowTimeCode(d.ShowTimeCod);
                // setSelectedTimeIn(d.timein)
            }
        });

        setSelectedVipShowDate(date);
        setSelectedFinalShowDate(date);
        // console.log("d ==========================>",date);
    }
    useEffect(()=>{
        if(selectedFinalShowDate&&selectedFinalShowTime&&selectedCinema){
        
        
            history.push({
                pathname:`/select-chair`,
                state: { 
                    data: {
                        movie:props.movie,
                        showName:props.movie.ShowNam,
                        cinema:selectedCinema,
                        showDat:selectedFinalShowDate,
                        showTimeCode:selectedShowTimeCode,
                        hallId:selectedHallId,
                        timein:selectedTimeIn
                    } }
            });
        }
    },[selectedFinalShowDate, selectedFinalShowTime , selectedCinema])
    return (
        
            <>
            {
                (shows && currenShowsLength !== 0)?
                shows.map((show:any)=>

                <li  style={{'display':'flex', 'alignItems':'center'}}>
                    <div className="movie-name">
                        <a href={cinema.location} className="name" target='blank'>{show.cinema.CinemaNamA} - {show.cinema.CinemaNamE}</a>
                    
                    </div>
                    <div className="movie-schedule middle">
                        {
                            showDate&&showDate.map((item:any)=><div className={`item ${(selectedShowDate === item&& selectedCinemaName === show.cinema.CinemaNamA)?'selected':'unselected'}`} onClick={()=>{selectShowDate(show,item) ; setSelectedCinemaName(show.cinema.CinemaNamA)}}>{item}</div>)
                        }
                    
                    
                    
                    </div>
                    <div className="movie-schedule">
                        {
                            currentShowDates&&currentShowDates.map((item:any)=><div className={`item ${(selectedShowTime === item.showTime && selectedCinemaName === show.cinema.CinemaNamA)?'selected':'unselected'}`} onClick={()=>{selectShowTime(show,item.showTime); setSelectedCinemaName(show.cinema.CinemaNamA)}} >{item.showTime}</div>)
                        }
                    
                    </div>
                </li>
                )
                :
                <></>
            }
            <br />
            {
                (vipShows && currentVipShowsLength !== 0)?
                vipShows.map((show:any)=>

                <li  style={{'display':'flex', 'alignItems':'center'}}>
                    <div className="movie-name">
                    <div className="movie-schedule middle">
                        <div className={`item selected aaa`}>VIP Show</div>
                    </div>
                        <a href={cinema.location} className="name" target='blank'>{show.cinema.CinemaNamA} - {show.cinema.CinemaNamE}</a>
                    
                    </div>
                    <div className="movie-schedule middle">
                        {
                            showVipDate&&showVipDate.map((item:any)=><div className={`item ${(selectedVipShowDate === item && selectedCinemaName === show.cinema.CinemaNamA)?'selected':'unselected'}`} onClick={()=>{selectVipShowDate(show,item); setSelectedCinemaName(show.cinema.CinemaNamA)}}>{item}</div>)
                        }
                    
                    
                    
                    </div>
                    <div className="movie-schedule">
                        {
                            currentVipShowDates&&currentVipShowDates.map((item:any)=><div className={`item ${(selectedVipShowTime === item.showTime && selectedCinemaName === show.cinema.CinemaNamA)?'selected':'unselected'}`} onClick={()=>{selectVipShowTime(show,item.showTime); setSelectedCinemaName(show.cinema.CinemaNamA)}} >{item.showTime}</div>)
                        }
                    
                    </div>
                </li>
                )
                :
                <></>
            }
            
            </>
        
            
        
        
    );
};

export default CinemaUi;
