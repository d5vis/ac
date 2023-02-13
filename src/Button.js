import { useState, useEffect } from "react";
import Ac from "./ac.json";

export default function Button() {
  // TODO:
  // add volume controller
  // add themes/game select
  const [playing, setPlaying] = useState(false);
  const [hours, setHours] = useState(new Date().getHours());
  const [track, setTrack] = useState(hours + 1);
  const [game, setGame] = useState("wildWorld");
  const [audio, setAudio] = useState(new Audio());
  audio.volume = 0.5;
  audio.loop = true;

  // runs every 10 seconds to check hour
  useEffect(() => {
    setInterval(() => {
      //console.log("checking hour: " + hours);
      setHours(new Date().getHours());
    }, 10000);
  }, []);

  // update track on hour change
  useEffect(() => {
    // TODO: update for game select
    setTrack(Ac.games.wildWorld[hours - 1]);
  }, [hours]);

  useEffect(() => {
    // TODO: fade in fade out

    audio.src = track;

    if (playing) {
      audio.play();
    }
  }, [track]);

  function playAudio() {
    if (!playing) {
      audio.play();
    } else {
      audio.pause();
    }
    setPlaying(!playing);
  }

  // for testing
  function changeTrack() {
    setTrack(Ac.games.wildWorld[1]);
    audio.src = track;
    console.log(audio.src);
    audio.play();
  }

  function changeHour() {
    setHours(2);
    console.log(hours);
  }

  return <button onClick={playAudio}>start/stop session</button>;
}
