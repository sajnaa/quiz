

import React, { useEffect } from 'react';

const SpeechSynthesizer = () => {
  const defaultSentence =
    "Welcome to Next Roll! As your personal assistant, I'm here to help you take your brand to the next level.";

  useEffect(() => {
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

        window.speechSynthesis.speak(utterance);
      } else {
        alert("Sorry, your browser does not support the Web Speech API.");
      }
    };

    // Delayed invocation after 1 second (adjust as needed)
    const delay = 500;
    const timerId = setTimeout(() => {
      speak(defaultSentence);
    }, delay);

    // Clean up: Cancel speech synthesis on component unmount
    return () => {
      clearTimeout(timerId);
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []); // Empty dependency array ensures useEffect runs only on mount

  return <div>Speech Synthesizer Component</div>; // Render placeholder content or nothing
};

export default SpeechSynthesizer;
