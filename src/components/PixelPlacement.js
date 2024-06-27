import React,{useState} from 'react';

function PixelPlacement({ setStep,previousStep }) {
    const advId=localStorage.getItem('advEID')
    console.log(advId)
    const url=`https://app.adroll.com/home/getting-started/tour?advertisable=${advId}`
    console.log(url)
    const [website, setWebsite] = useState(''); // Default value for initial rendering
    const [isSubmitted, setIsSubmitted] = useState(false); // Track if "Enter" has been clicked

    const handleProceed = () => {
        // Store website in local storage
        localStorage.setItem('website', website);
        setStep(7); // Proceed to the next step
      };
      const handleSubmit = () => {
        if (website) {
            setIsSubmitted(true);
        }
    };
  return (
    <div>
      <h2>Pixel Placement</h2>
      <label htmlFor="website">Enter your website:</label>
      <div style={{ display: 'flex', alignItems: 'center' }}>

      <input type="text" id="website" value={website}
       style={{ marginRight: '10px' }} 
        onChange={(e) => setWebsite(e.target.value)}/>
      <input
    type="submit"
    onClick={handleSubmit}
    value="Enter"
    className='enter'
  
  />
  </div>
  {isSubmitted && (
  <div className='link'>
      <p>Great news! Your website is powered by Shopify. Simply click the  <a href={url} target="_blank" rel="noopener noreferrer">
         link
        </a> here to place the pixel easily!</p>
      <p>Mission accomplished! Your website is now fully equipped with the pixel. Well done!</p>
     
        </div>
  )}
   <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <button onClick={() => previousStep(5)} style={{ marginRight: '10px' }}>Previous</button>
        <button onClick={handleProceed}>Proceed</button>
        </div>
    </div>
  );
}

export default PixelPlacement;
