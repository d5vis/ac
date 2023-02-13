import { useState, useEffect } from "react";

export default function Button() {
  // TODO:
  // add hourly music
  // add volume controller
  // add themes/game select

  // also change these variable names and store all
  let url6am =
    "https://vgmsite.com/soundtracks/animal-crossing-wild-world/cnwnmvft/39%206%20AM%20%28AC_WW%29.mp3";
  let url7am =
    "https://vgmsite.com/soundtracks/animal-crossing-wild-world/xqxtybnu/40%207%20AM%20%28AC_WW%29.mp3";
  const [audio, setAudio] = useState(new Audio(url6am));
  const [playing, setPlaying] = useState(false);
  audio.volume = 0.5;
  audio.loop = true;

  function playAudio() {
    if (!playing) {
      audio.play();
    } else {
      audio.pause();
    }
    setPlaying(!playing);
  }

  function changeTrack() {
    // TODO: fade in fade out
    audio.src = url7am;
    audio.play();
  }

  return (
    <div>
      <button onClick={playAudio}>start/stop session</button>
      <button onClick={changeTrack}>(testing) change track</button>
    </div>
  );
}
