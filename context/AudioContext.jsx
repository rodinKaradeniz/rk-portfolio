"use client";

import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";

const AudioContext = createContext();

export const useAudio = () => useContext(AudioContext);

export const AudioProvider = ({ children }) => {
  const audioElementRef = useRef(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  useEffect(() => {
    // Only initialize the audio element on the client side
    if (typeof window !== "undefined" && !audioElementRef.current) {
      audioElementRef.current = new Audio("/audio/jazz-vibrant-upbeat.mp3");
      audioElementRef.current.loop = true; // Ensure audio loops
    }
  }, []);

  useEffect(() => {
    if (audioElementRef.current) {
      if (isAudioPlaying) {
        audioElementRef.current.play();
      } else {
        audioElementRef.current.pause();
      }
    }
  }, [isAudioPlaying]);

  return (
    <AudioContext.Provider
      value={{
        isAudioPlaying,
        toggleAudio: () => setIsAudioPlaying((prev) => !prev),
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};
