import { useState, useEffect } from "react";
import Ac from "./ac.json";

export default function Forms() {
  // TODO: background style based on game
  const [game, setGame] = useState("wildWorld");

  const [playing, setPlaying] = useState(false);
  const [hours, setHours] = useState(new Date().getHours());
  const [track, setTrack] = useState(hours + 1);
  const [audio, setAudio] = useState(new Audio());

  const onChange = (event) => {
    setGame(event.target.value);
  };

  // TODO: volume controller
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
    setTrack(Ac.games[game][hours]);
  }, [hours, game]);

  // update audio object
  useEffect(() => {
    // TODO: fade in fade out
    audio.src = track;

    if (playing) {
      audio.play();
    }
  }, [track]);

  function playAudio() {
    console.log(track);
    if (!playing) {
      audio.play();
    } else {
      audio.pause();
    }
    setPlaying(!playing);
  }

  // debug functions

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

  function checkTrack() {
    console.log(track);
  }

  let stopStart = playing ? "stop" : "start";

  return (
    <div className="Forms">
      <button onClick={playAudio}>{stopStart}</button>
      <select onChange={onChange}>
        <option value="animalCrossing">animal crossing</option>
        <option value="wildWorld" selected>
          wild world
        </option>
        <option value="cityFolk">city folk</option>
        <option value="newLeaf">new leaf</option>
        <option value="newHorizons">new horizons</option>
      </select>
    </div>
  );
}
