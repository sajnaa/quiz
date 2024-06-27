import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import AdvIdImage from '../img/AdvId.png'
function Step4({ showAdvEIDInput, setShowAdvEIDInput, onSubmit ,previousStep}) {
  const [isChecked, setIsChecked] = useState(false);
  const [advEID, setAdvEID] = useState('');
  const [showInfo, setShowInfo] = useState(false);
    const handleNoClick = () => {
    localStorage.setItem('needsAdvEID', 'true');
    setShowAdvEIDInput(true)
    // window.location.href = 'https://app.adroll.com/welcome/signup';
    window.open('https://app.adroll.com/welcome/signup', '_blank');
  };
  console.log(showAdvEIDInput)

  const handleNext = () => {
    // Store advEID in local storage
    localStorage.setItem('advEID', advEID);
    onSubmit(); // Proceed to the next step
  };
  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };
  return (
    <div>
      <h2>Do you have an account in NextRoll?</h2>
      <button  className="spaced-button" onClick={() => setShowAdvEIDInput(true)}>Yes</button>
      <button  className="spaced-button" onClick={ handleNoClick}>No</button>
      {showAdvEIDInput && (
        <div>
          <label htmlFor="advEID">Kindly provide the Adv EID</label>
          <input className="spaced-button" type="text"
            value={advEID}
            onChange={(e) => setAdvEID(e.target.value)}
          id="advEID" placeholder="22 Alpha-Numeric Characters" />
          <FontAwesomeIcon icon={faInfoCircle} onClick={toggleInfo} style={{ marginLeft: '5px', color: '#999', cursor: 'pointer' }} />
          {showInfo && (
            <div className="info-tooltip">
              <p>After logging in to the dashboard, you can locate the Advertiser EID at the end of the URL. It consists of a series of 22 alphanumeric characters.</p>
              <img src={AdvIdImage} alt="AdvId" style={{ maxWidth: '100%', maxHeight: '200px', marginTop: '10px' }} />
            </div>
          )}
        </div>
      )}
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <button onClick={() => previousStep(2)} style={{ marginRight: '10px' }}>Previous</button>
          <button type="submit" onClick={handleNext}>Next</button>
        </div>
    </div>
  );
}

export default Step4;
