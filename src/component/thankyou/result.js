/* eslint-disable react/prop-types */
import React from 'react';
import './Result.css';
const Result = ({setStep}) => {
  
    return (
      <div className="results" style={{marginTop:"-60px"}}>
        <div className="content">
  <div className="wrapper-1">
    <div className="wrapper-2">
      <h1>Thank you !</h1>
      <p style={{color:"#000",fontFamily:"initial"}}>I hope your journey with me was an enjoyable one. Please take a moment to rate your experience, as it will assist me in providing an even better service.
Happy advising with the NextRoll wish you all success </p>
      
      <button className="go-home" style={{ marginRight:"2x" }} onClick={() => setStep(1)}>
     Home
      </button>
      
    </div>
   
</div>
</div>
</div>
    );
  };
  
  export default Result;