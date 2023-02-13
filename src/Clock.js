import React, { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);

  return <div>{time.toLocaleTimeString}</div>;
}
