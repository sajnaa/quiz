import React, { useState } from 'react';

function Step2Yes({  onSubmit ,previousStep}) {
  const [campaigns, setCampaigns] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (event) => {
    const { value, checked } = event.target;
    setCampaigns((prev) =>
      checked ? [...prev, value] : prev.filter((v) => v !== value)
    );
    setIsChecked(checked);
  };

  const handleSubmit = (event) => {
    console.log(campaigns)
    localStorage.setItem("Campaign Suggestions",campaigns)
    event.preventDefault();
    onSubmit(campaigns.join(', '));
  };

  return (
    <div>
      <h2>What are the campaign types you would like to RUN?</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="checkbox" value="Web Retargeting" onChange={handleChange} />
          Web Retargeting
        </label>
        <label>
          <input type="checkbox" value="Web Prospecting" onChange={handleChange} />
          Web Prospecting
        </label>
        <label>
          <input type="checkbox" value="Facebook Retargeting" onChange={handleChange} />
          Facebook Retargeting
        </label>
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <button onClick={() => previousStep(1)} style={{ marginRight: '10px' }}>Previous</button>
          <button type="submit" disabled={!isChecked} >Next</button>
        </div>
      </form>
      {/* <button onClick={() => previousStep(1)}>Previous</button> */}
    </div>
  );
}

export default Step2Yes;
