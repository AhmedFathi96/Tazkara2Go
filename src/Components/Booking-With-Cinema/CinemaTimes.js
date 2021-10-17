import React from 'react'
import { $CombinedState } from 'redux';
import './RadioStyle.css';
import ReactDOMServer from 'react-dom/server';

const CinemaTimes = (props) => {
 // console.log("cid",props.match.params.cid,"shid",props.match.params.shid)
 const dates=[{date:"2021/10/13",times:"9:05 PM",isVip:"0",rowsNo:"12",colsNo:"12"},
{date:"2021/10/14",times:"12:05 AM",isVip:"1",rowsNo:"12",colsNo:"12"}];
const times=["9:05 PM","10:05 PM","11:05 AM"];
// function setHoles(val){
//   console.log(val)
//   document.getElementById("data1").innerHTML=" ";
//   <hr/>
//   document.getElementById("data1").innerHTML =
//     ReactDOMServer.renderToString(<>
//       <p> Select Holes</p>
  
//       <div className="radio-toolbar ">
//         {holes.map((item, i) => (
//           <React.Fragment>
  
//             <input
//               name="holes"
//               key={i}
//               id={`radioh${i}`}
//               value={item}
//               type="radio"
          
  
//             />
//             <label htmlFor={`radioh${i}`}> {item}</label>
//           </React.Fragment>
//         ))}
//       </div>
  
//     </>);

  

// }
function setTimes(val){

 
  console.log(val)
  document.getElementById("data").innerHTML=" "
  document.getElementById("data").innerHTML =
    ReactDOMServer.renderToString(<>
      <p> Select Time</p>
  
      <div className="radio-toolbar ">
        {times.map((item, i) => (
          <React.Fragment>
  
            <input
              name="times"
              key={i}
              id={`radiot${i}`}
              value={item}
              type="radio"
            
            />
            <label htmlFor={`radiot${i}`}> {val}</label>
          </React.Fragment>
        ))}
      </div>
  
    </>);

  

}

    return<>

    
        <section className="  my-3  text-dark text-center font-weight-bolder " style={{height:"100px",backgroundColor:"#05245c"}}>
          
       
        </section>
      <section className="text-center">
      <p> Select Date</p>

        <div className="radio-toolbar ">
        {dates.map((item,i) => (
          <React.Fragment>
            
            <input
              name="lastName"
              key={i}
              id={`radio${i}`}
              value={item.date}
              type="radio"
              onChange={(e)=>setTimes(e.target.value)}
              
            />
            <label htmlFor={`radio${i}`}> {item.date}</label>
          </React.Fragment>
        ))}
        </div>
        <hr />
        <div id="data">
  
        </div>
        
        <div id="data1">
  
        </div>
        
       

      </section>
     
      </>;
}

 
export default CinemaTimes;