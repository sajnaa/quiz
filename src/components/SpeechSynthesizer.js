
// import React, { useEffect, useState } from 'react';

// const SpeechSynthesizer = () => {
//   const [hasInteracted, setHasInteracted] = useState(false);
//   const welcomeMessage = "Welcome to Next Roll! As your personal assistant, I'm here to help you take your brand to the next level.";

//   const speak = (textToSpeak) => {
//     if ('speechSynthesis' in window) {
//       const utterance = new SpeechSynthesisUtterance(textToSpeak);
//       utterance.lang = 'en-US';
//       utterance.pitch = 1;
//       utterance.rate = 1;
//       utterance.volume = 1;
//       utterance.onerror = (event) => {
//         console.error('Speech synthesis error:', event.error);
//       };
//       utterance.onend = () => {
//         console.log('Speech synthesis complete.');
//       };

//       window.speechSynthesis.speak(utterance);
//     } else {
//       alert("Sorry, your browser does not support the Web Speech API.");
//     }
//   };

//   const handleUserInteraction = () => {
//     setHasInteracted(true);
//   };

//   useEffect(() => {
//     if (hasInteracted) {
//       const delay = 1000; // 0.5 second delay
//       const timerId = setTimeout(() => {
//         speak(welcomeMessage);
//       }, delay);

//       return () => {
//         clearTimeout(timerId);
//         if ('speechSynthesis' in window) {
//           window.speechSynthesis.cancel();
//         }
//       };
//     }
//   }, [hasInteracted]);

//   return (
//     <div >
// <img 
//         src="https://assets-global.website-files.com/5bf603f84ae3421204807d40/60a54c95bf6a073eea0c69e9_Robot_waving_transparent_GIF.gif" 
//         alt="avverma" 
//         style={{ width: "400px", height: "auto" }} 
//         onClick={handleUserInteraction}
//       />
//     </div>
//   );
// };

// export default SpeechSynthesizer;
import React, { useEffect, useState } from 'react';

const SpeechSynthesizer = () => {
  const [hasInteracted, setHasInteracted] = useState(false);
  const welcomeMessage = "Welcome to Next Roll! As your personal assistant, I'm here to help you take your brand to the next level.";

  const speak = (textToSpeak) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = 'en-US';
      utterance.pitch = 1;
      utterance.rate = 1;
      utterance.volume = 1;

      utterance.onerror = (event) => {
        console.error('Speech synthesis error:', event.error);
      };

      utterance.onend = () => {
        console.log('Speech synthesis complete.');
      };

      // Ensure the previous speech is canceled before starting a new one
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Sorry, your browser does not support the Web Speech API.");
    }
  };

  const handleUserInteraction = () => {
    setHasInteracted(true);
  };

  useEffect(() => {
    if (hasInteracted) {
      const delay = 500; // 0.5 second delay
      const timerId = setTimeout(() => {
        speak(welcomeMessage);
      }, delay);

      return () => {
        clearTimeout(timerId);
        if ('speechSynthesis' in window) {
          window.speechSynthesis.cancel();
        }
      };
    }
  }, [hasInteracted]);

  return (
    <div>
      <img 
        src="https://assets-global.website-files.com/5bf603f84ae3421204807d40/60a54c95bf6a073eea0c69e9_Robot_waving_transparent_GIF.gif" 
        alt="avverma" 
        style={{ width: "400px", height: "auto", cursor: 'pointer' }} 
        onClick={handleUserInteraction}
      />
    </div>
  );
};

export default SpeechSynthesizer;
