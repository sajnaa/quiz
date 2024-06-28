import React, { useState,useEffect } from 'react';
import './App.css';
import Step1 from './components/Step1';
import Step2Yes from './components/Step2Yes';
import Step2No from './components/Step2No';
import Step4 from './components/Step4';
import Result from './components/Result';
import PixelPlacement from './components/PixelPlacement';
import Launch from './components/Launch';
import SpeechSynthesizer from './components/SpeechSynthesizer';
import Thankyou from './component/thankyou/result'
function App() {
  const [step, setStep] = useState(1);
  const [selectedCampaigns, setSelectedCampaigns] = useState('');
  const [showAdvEIDInput, setShowAdvEIDInput] = useState(false);
  const [speechComplete, setSpeechComplete] = useState(false);

  useEffect(() => {
    // Set a timeout to simulate SpeechSynthesizer completion
    console.log(speechComplete)
    const timeout = setTimeout(() => {
      setSpeechComplete(true);
    console.log('-----')

    }, 7000); // Adjust the time according to your speech length or use a callback from SpeechSynthesizer

    return () => clearTimeout(timeout); // Clean up timeout if component unmounts
  }, []);
  const handleCampaignFormSubmit = (campaigns) => {
    setSelectedCampaigns(campaigns);
    setStep(4);
  };
const speech=()=>{
  
  <SpeechSynthesizer/>
  console.log('snak')
}
  const handleAdvEIDSubmit = () => {
   
    setStep(5);
    
  };
  const previousStep = (step) => {
    setStep(step);
  };
  const handleSpeechEnd = () => {
    setSpeechComplete(true);
  };


  return (
    <div className="App">
                {!speechComplete && <SpeechSynthesizer />}

       <div id="login-bg-image" className="login-bg-image tb--background bgStyle" data-se="login-bg-image">
       {/* {!speechComplete 
        && 
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
  <img src="https://assets-global.website-files.com/5bf603f84ae3421204807d40/60a54c95bf6a073eea0c69e9_Robot_waving_transparent_GIF.gif" 
       alt="avverma" 
       style={{ width: "400px", height: "auto" }} 
  />
</div>
} */}

{/* {speechComplete && 
        <div style={{ marginTop:"160px" }}>
    <img src="https://assets-global.website-files.com/5bf603f84ae3421204807d40/60a54c95bf6a073eea0c69e9_Robot_waving_transparent_GIF.gif" 
         alt="avverma" 
         style={{ width: "400px", height: "auto", marginRight: "auto" }} 
    />
  </div>
       } */}
        {speechComplete  && 
        // <div style={{marginTop:"-500px"}}>
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
      
        {step ===9 && <Thankyou setStep={setStep}/>}
      
      </div>
     
      // </div>
        
     
      }
      
    </div>
 

    </div>

  );
}

export default App;
