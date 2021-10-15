import React from 'react';

const TimeCard = (props) => {
    return <div className="col-5 col-md-3 offset-1 my-3 bg-light text-dark text-center font-weight-bolder border border-lg border-danger">
        {props.Time.startdate } - { props.Time.enddate} <br/>
        {props.Time.timein}
      </div>;
}
 
export default TimeCard;