import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { IChair } from '../../models';
import { holdChairRequested } from '../../React-Redux/Actions/hold-chair-action';
import { unholdChairRequested } from '../../React-Redux/Actions/unhold-chair-action';
interface IProp{
    chair:IChair;
    selected:boolean,
    unavailable:boolean,
    holdData:any;

}
const Seat:React.FC<IProp> = (props:IProp) => {
    const {chair,selected,unavailable, holdData} = props;
    const [clicked,setClicked] = useState(selected);
    const dispatch = useDispatch();

    const holdChair = () =>{
        if((!clicked) === true){
            dispatch(holdChairRequested({ 
                CinemaIpAdress:holdData.CinemaIpAdress,
                ShowTimeCod:holdData.ShowTimeCod,
                hallId:holdData.hallId,
                ShowDate:holdData.ShowDate,
                ChairId:chair.ChairId,
                ChairPrice:chair.ChairPrice,
                bookcode:holdData.bookcode,
                holdWaitingMinutes:holdData.holdWaitingMinutes,
                ShowName:holdData.ShowName,
                timein:holdData.timein,
            }))
        }else if((!clicked) === false){
            dispatch(unholdChairRequested({ 
                CinemaIpAdress:holdData.CinemaIpAdress,
                ShowTimeCod:holdData.ShowTimeCod,
                hallId:holdData.hallId,
                ShowDate:holdData.ShowDate,
                ChairId:chair.ChairId,
                bookcode:holdData.bookcode
            }));
        }
    
        
        // console.log("=========================>",holdData);
    }
    return(
        unavailable?(
                <li key={chair.ChairId} className="single-seat">
                    <img src="/assets/seats/seatOccupied.png" className="seat" alt="seat" />
                </li>
            )
            :
            clicked?
            (
                <li key={chair.ChairId} className="single-seat" onClick={()=>{setClicked(!clicked);holdChair();}}>
                    <img src="/assets/seats/seatSelected.png" className="seat" alt="seat" />
                </li>
            )
            :
            (
                <li key={chair.ChairId} className="single-seat" onClick={()=>{setClicked(!clicked);holdChair()}}>
                    <img src="/assets/seats/seat.png" className="seat" alt="seat" />
                </li>
            )
    )
}
export default Seat;