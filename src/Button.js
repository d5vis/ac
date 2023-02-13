import { useState } from "react";

export default function Button() {
  // TODO:
  // add hourly music
  // add volume controller
  // add themes/game select
  let url =
    "https://vgmsite.com/soundtracks/animal-crossing-wild-world/cnwnmvft/39%206%20AM%20%28AC_WW%29.mp3";
  const [audio, setAudio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  audio.loop = true;

  function playAudio() {
    console.log(playing);
    if (!playing) {
      audio.play();
    } else {
      audio.pause();
    }
    setPlaying(!playing);
  }

  return <button onClick={playAudio}>start/stop session</button>;
}
