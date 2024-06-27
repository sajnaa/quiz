import React, { useEffect } from 'react';

function SpeechSynthesizer() {
  const defaultSentence = "Welcome to Next Roll! As your personal assistant, I'm here to help you take your brand to the next level.";

  useEffect(() => {
    let utterance = new SpeechSynthesisUtterance(defaultSentence);
    utterance.lang = 'en-US';
    utterance.pitch = 1;
    utterance.rate = 1;
    utterance.volume = 1;

    const speakOnce = () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.speak(utterance);
      } else {
        alert("Sorry, your browser does not support the Web Speech API.");
      }
    };

    speakOnce();

    // Clean up: Cancel speaking when component unmounts
    return () => {
      if (utterance) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return null; // Renders nothing in the component, as it's meant for speech synthesis only
}

export default SpeechSynthesizer;
