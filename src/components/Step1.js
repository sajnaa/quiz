import React from 'react';

function Step1({ setStep}) {
  return (
    <div>
      <h2>Step 1: Do you have experience in Digital Advertisement?</h2>
      
      <button className="spaced-button" onClick={() => setStep(2)}>Yes</button>
      <button className="spaced-button" onClick={() => setStep(3)}>No</button>
    </div>
  );
}

export default Step1;
