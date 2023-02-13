import { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
  }, []);

  return <div>{time}</div>;
}
