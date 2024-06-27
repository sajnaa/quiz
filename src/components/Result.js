import React from 'react';

function Result({ selectedCampaigns, setStep ,previousStep}) {
  return (
    <div>
      <h2>Result</h2>
      <p>Selected Campaigns: {selectedCampaigns}</p>

      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <button onClick={() => previousStep(4)} style={{ marginRight: '10px' }}>Previous</button>
        <button onClick={() => setStep(6)}>Proceed</button>
        </div>
    </div>
  );
}

export default Result;
