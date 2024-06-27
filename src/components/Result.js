import React from 'react';

function Result({ selectedCampaigns, setStep ,previousStep}) {

const servicesArray = selectedCampaigns.split(', ');

console.log(servicesArray);

  return (
    <div>
        <h2>
  Based on my research, I strongly believe you have the capability to execute the following campaign in NextRoll.</h2>

      {/* <p>Selected Campaigns: {selectedCampaigns}</p> */}
      <ul>
  {servicesArray.map((campaign, index) => (
    <li key={index} style={{fontSize:"20px"}}>{campaign}</li>
))} 
</ul>
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <button onClick={() => previousStep(4)} style={{ marginRight: '10px' }}>Previous</button>
        <button onClick={() => setStep(6)}>Proceed</button>
        </div>
    </div>
  );
}

export default Result;
