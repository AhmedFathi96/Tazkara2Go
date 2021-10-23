import React, { useState } from 'react';
import { IChair } from '../../models';
interface IProp{
    chairProp:IChair;
    selected:boolean
}
const Seat:React.FC<IProp> = (props:IProp) => {
    const {chairProp,selected} = props;
    const [clicked,setClicked] = useState(selected);
    // onClick={()=>getSelectedChair(ch.ChairId)}
    return(
        clicked?(
            <li key={chairProp.ChairId} className="single-seat" onClick={()=>{setClicked(!clicked)}}>
                <img src="/assets/seats/seatSelected.png" className="seat" alt="seat" />
            </li>
            )
            :
            (
            <li key={chairProp.ChairId} className="single-seat" onClick={()=>{setClicked(!clicked)}}>
                <img src="/assets/seats/seat.png" className="seat" alt="seat" />
            </li>
            )
    )
}
export default Seat;