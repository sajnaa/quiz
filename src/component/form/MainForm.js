
import React, { useState } from 'react';
import './Form.css';
import FormYes from './FormYes';
import FormNo from './FormNo';
import HomePage from '../HomePage'
const MainForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [experience, setExperience] = useState('');
  const [campaignOptions, setCampaignOptions] = useState({
    webRetargeting: false,
    webProspecting: false,
    facebookRetargeting: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Experience:', experience);
    console.log('Campaign Options:', campaignOptions);
    // Additional form handling logic here
  };

  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };

  const handleCampaignOptionChange = (option) => {
    setCampaignOptions({
      ...campaignOptions,
      [option]: !campaignOptions[option],
    });
  };

  return (
    <div>
      <div id="login-bg-image" className="login-bg-image tb--background bgStyle" data-se="login-bg-image"></div>

<HomePage/>
  
    </div>
  );
};

export default MainForm;

