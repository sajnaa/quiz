import React, { useState } from 'react';
import './App.css';
import Step1 from './components/Step1';
import Step2Yes from './components/Step2Yes';
import Step2No from './components/Step2No';
import Step4 from './components/Step4';
import Result from './components/Result';
import PixelPlacement from './components/PixelPlacement';
import Launch from './components/Launch';

import Thankyou from './component/thankyou/result'
function App() {
  const [step, setStep] = useState(1);
  const [selectedCampaigns, setSelectedCampaigns] = useState('');
  const [showAdvEIDInput, setShowAdvEIDInput] = useState(false);

  const handleCampaignFormSubmit = (campaigns) => {
    setSelectedCampaigns(campaigns);
    setStep(4);
  };

  const handleAdvEIDSubmit = () => {
   
    setStep(5);
    
  };
  const previousStep = (step) => {
    setStep(step);
  };
  return (
    <div className="App">
       <div id="login-bg-image" className="login-bg-image tb--background bgStyle" data-se="login-bg-image">
      <div className="container">
      <h1><img src="https://ok1static.oktacdn.com/fs/bco/1/fs01ju46rniPX1OwK0h8" className="auth-org-logo" alt="NextRoll logo logo" aria-label="NextRoll logo logo" />
              </h1><div data-type="beacon-container" className="beacon-container"></div>
        {step === 1 && <Step1 setStep={setStep} />}
        {step === 2 && <Step2Yes onSubmit={handleCampaignFormSubmit} previousStep={previousStep}/>}
        {step === 3 && <Step2No onSubmit={handleCampaignFormSubmit} previousStep={previousStep}/>}
        {step === 4 && (
          <Step4
            showAdvEIDInput={showAdvEIDInput}
            setShowAdvEIDInput={setShowAdvEIDInput}
            onSubmit={handleAdvEIDSubmit}
            previousStep={previousStep}
            
          />
        )}
        {step === 5 && <Result selectedCampaigns={selectedCampaigns} setStep={setStep} previousStep={previousStep}/>}
        {step === 6 && <PixelPlacement setStep={setStep} previousStep={previousStep}/>}
        {step === 7 && <Launch setStep={setStep} previousStep={previousStep}/>}
        {/* {step === 8 && <ThankYou />} */}
      
        {step ===9 && <Thankyou setStep={setStep}/>}
       
      </div>
    </div>
    </div>
  );
}

export default App;
