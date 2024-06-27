import React,{useState} from 'react';

function PixelPlacement({ setStep,previousStep }) {
    const advId=localStorage.getItem('advEID')
    console.log(advId)
    const url=`https://app.adroll.com/home/getting-started/tour?advertisable=${advId}`
    console.log(url)
    const [website, setWebsite] = useState(''); // Default value for initial rendering
    const handleProceed = () => {
        // Store website in local storage
        localStorage.setItem('website', website);
        setStep(7); // Proceed to the next step
      };
  return (
    <div>
      <h2>Pixel Placement</h2>
      <label htmlFor="website">Enter your website:</label>
      <input type="text" id="website" value={website}
        onChange={(e) => setWebsite(e.target.value)}/>
      
      <p>Great news! Your website is powered by Shopify. Simply click the  <a href={url} target="_blank" rel="noopener noreferrer">
         link
        </a> here to place the pixel easily!</p>
      <p>Mission accomplished! Your website is now fully equipped with the pixel. Well done!</p>
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <button onClick={() => previousStep(5)} style={{ marginRight: '10px' }}>Previous</button>
        <button onClick={handleProceed}>Proceed</button>
        </div>
    </div>
  );
}

export default PixelPlacement;
