import React from 'react';

function Launch({ setStep,previousStep ,showThankYouPage }) {
    const advId=localStorage.getItem('advEID')
    console.log(advId)
    const url=`https://app.adroll.com/retargeting/?campaignType=proxy&advertisable=${advId}`
  return (
    <div>
      <h2>Wow! You've reached the final step. Please click the link below to boost your brand.

</h2>
      <a href={url} target="_blank">Launch Campaign</a>
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <button onClick={() => previousStep(6)} style={{ marginRight: '10px' }}>Previous</button>
        {/* <button onClick={() => setStep(7)}>Proceed</button> */}
        <button onClick={() => previousStep(9)}>Proceed</button>
        </div>
      {/* <button onClick={previousStep}>Previous</button> */}
    </div>
  );
}

export default Launch;
