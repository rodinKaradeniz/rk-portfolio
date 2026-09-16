"use client";

import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";

const AudioContext = createContext();

export const useAudio = () => useContext(AudioContext);

export const AudioProvider = ({ children }) => {
  const audioElementRef = useRef(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  // Release the audio element on unmount
  useEffect(() => {
    return () => {
      const audio = audioElementRef.current;
      if (audio) {
        audio.pause();
        audio.removeAttribute("src");
        audio.load();
        audioElementRef.current = null;
      }
    };
  }, []);

  const toggleAudio = useCallback(() => {
    // Create the audio element lazily so the mp3 is only downloaded on demand
    if (!audioElementRef.current) {
      const audio = new Audio();
      audio.preload = "none";
      audio.loop = true;
      audio.src = "/audio/jazz-vibrant-upbeat.mp3";
      audioElementRef.current = audio;
    }

    const audio = audioElementRef.current;
    if (audio.paused) {
      audio
        .play()
        .then(() => setIsAudioPlaying(true))
        .catch(() => setIsAudioPlaying(false));
    } else {
      audio.pause();
      setIsAudioPlaying(false);
    }
  }, []);

  return (
    <AudioContext.Provider value={{ isAudioPlaying, toggleAudio }}>
      {children}
    </AudioContext.Provider>
  );
};
