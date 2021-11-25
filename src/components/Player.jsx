import React, { useState, useEffect } from "react";
import Zoom from 'react-reveal/Zoom';
const useAudio = url => {
  const [audio] = useState(new Audio("/sounds/Axian - Hope.mp3"));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
      audio.volume = 0.3;
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);
  return (
    <Zoom delay={100}>  <div>
      <button className="play" onClick={toggle}>{playing ? "Pause" : "Play"}</button>
    </div></Zoom>
  );
};

export default Player;