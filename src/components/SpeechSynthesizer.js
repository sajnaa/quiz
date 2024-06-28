// import React, { useEffect } from 'react';

// function SpeechSynthesizer() {
//   const defaultSentence = "Welcome to Next Roll! As your personal assistant, I'm here to help you take your brand to the next level.";

//   useEffect(() => {
//     let utterance = new SpeechSynthesisUtterance(defaultSentence);
//     utterance.lang = 'en-US';
//     utterance.pitch = 1;
//     utterance.rate = 1;
//     utterance.volume = 1;

//     const speakOnce = () => {
//       if ('speechSynthesis' in window) {
//         window.speechSynthesis.speak(utterance);
//       } else {
//         alert("Sorry, your browser does not support the Web Speech API.");
//       }
//     };

//     speakOnce();

//     // Clean up: Cancel speaking when component unmounts
//     return () => {
//       if (utterance) {
//         window.speechSynthesis.cancel();
//       }
//     };
//   }, []);

//   return null; // Renders nothing in the component, as it's meant for speech synthesis only
// }

// export default SpeechSynthesizer;
// import React, { useEffect } from 'react';

// function SpeechSynthesizer() {
//   const defaultSentence = "Welcome to Next Roll! As your personal assistant, I'm here to help you take your brand to the next level.";
//   console.log('outuseee')
//   useEffect(() => {
//     console.log('useee')
//     const utterance = new SpeechSynthesisUtterance(defaultSentence);
//     utterance.lang = 'en-US';
//     utterance.pitch = 1;
//     utterance.rate = 1;
//     utterance.volume = 1;

//     const speakOnce = () => {
//       if ('speechSynthesis' in window) {
//         console.log('window')
//         window.speechSynthesis.speak(utterance);
//       } else {
//         alert("Sorry, your browser does not support the Web Speech API.");
//       }
//     };

//     // Delay speaking to ensure everything is set up properly
//     setTimeout(() => {
//       speakOnce();
//     }, 100); // Adjust delay time as needed

//     // Clean up: Cancel speaking when component unmounts
//     return () => {
//       if (utterance) {
//         window.speechSynthesis.cancel();
//       }
//     };
//   });

//   return null; // Renders nothing in the component, as it's meant for speech synthesis only
// }

// export default SpeechSynthesizer;
// import React, { useEffect } from 'react';

// function SpeechSynthesizer() {
//   const defaultSentence = "Welcome to Next Roll! As your personal assistant, I'm here to help you take your brand to the next level.";

// //   useEffect(() => {
//     const speakOnce = () => {
//       const utterance = new SpeechSynthesisUtterance(defaultSentence);
//       utterance.lang = 'en-US';
//       utterance.pitch = 1;
//       utterance.rate = 1;
//       utterance.volume = 1;

//       if ('speechSynthesis' in window) {
//         window.speechSynthesis.speak(utterance);
//       } else {
//         alert("Sorry, your browser does not support the Web Speech API.");
//       }
//     };

//     // Delay speaking to ensure everything is set up properly
//     setTimeout(() => {
//       speakOnce();
//     }, 100); // Adjust delay time as needed

//     // Clean up: Cancel speaking when component unmounts or reloads
//     // return () => {
//     //   if ('speechSynthesis' in window && window.speechSynthesis.speaking) {
//     //     window.speechSynthesis.cancel();
//     //   }
//     // };
// //   },[]); // Empty dependency array ensures useEffect runs once on component mount

//   return null; // Renders nothing in the component, as it's meant for speech synthesis only
// }

// export default SpeechSynthesizer;
import React, { useEffect } from 'react';

function SpeechSynthesizer() {
  const defaultSentence = "Welcome to Next Roll! As your personal assistant, I'm here to help you take your brand to the next level.";
  console.log('Component loaded.');

  useEffect(() => {
    console.log('useEffect triggered.');
    const utterance = new SpeechSynthesisUtterance(defaultSentence);
    utterance.lang = 'en-US';
    utterance.pitch = 1;
    utterance.rate = 1;
    utterance.volume = 1;

    const speakOnce = () => {
      if ('speechSynthesis' in window) {
        console.log('speechSynthesis is supported.');
        window.speechSynthesis.speak(utterance);
      } else {
        alert("Sorry, your browser does not support the Web Speech API.");
      }
    };

    // Delay speaking to ensure everything is set up properly
    const delay = 500; // Adjust delay time as needed
    const timerId = setTimeout(() => {
      speakOnce();
    }, delay);

    // Clean up: Cancel speaking when component unmounts
    // return () => {
    //   console.log('Cleaning up.');
    //   clearTimeout(timerId);
    //   if ('speechSynthesis' in window) {
    //     window.speechSynthesis.cancel();
    //   }
    // };
  }, []); // Empty dependency array ensures useEffect runs once on component mount

  return null; // Renders nothing in the component, as it's meant for speech synthesis only
}

export default SpeechSynthesizer;
