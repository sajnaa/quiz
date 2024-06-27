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
      <p>Thanks for subscribing to our news letter.  </p>
      <p>you should receive a confirmation email soon  </p>
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