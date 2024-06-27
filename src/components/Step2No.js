import React, { useState } from 'react';

function Step2No({ onSubmit,previousStep }) {
  const [campaigns, setCampaigns] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (event) => {
    const { name, checked } = event.target;
    setCampaigns((prev) =>
      checked ? [...prev, name] : prev.filter((v) => v !== name)
    );
    setIsChecked(checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(campaigns.join(', '));
  };

  return (
    <div>
      <h2>Step 2: Campaign Suggestions</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="checkbox" name="otherWebsites" onChange={handleChange} />
          Would you like to run Ads across other websites?
        </label>
        <label>
          <input type="checkbox" name="socialMedia" onChange={handleChange} />
          Have you run campaigns on social media Eg: Facebook?
        </label>
        <label>
          <input type="checkbox" name="newVisitors" onChange={handleChange} />
          Do you want to bring new visitors to your website?
        </label>
        <label>
          <input type="checkbox" name="targetVisitors" onChange={handleChange} />
          Do you want to target the visitors reaching your website?
        </label>
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <button onClick={() => previousStep(1)} style={{ marginRight: '10px' }}>Previous</button>
        <button type="submit" disabled={!isChecked} >Next</button>
        </div>

      </form>
    </div>
  );
}

export default Step2No;
