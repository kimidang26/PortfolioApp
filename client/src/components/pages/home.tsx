import React, { useEffect } from 'react';
import { useState } from 'react';

const Home = () => {
  const [runDay, setRunDay] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {

    const target = new Date("05/29/2023 07:00:00");

    const interval = setInterval(() => {
      const now = new Date()
      const difference = target.getTime()- now.getTime();

    const d = Math.floor(difference / (1000 * 60 * 60 * 24 ))
    setDays(d);

    const h = Math.floor(
      (difference % (1000 * 60 * 60 * 24))/ (1000 * 60 * 60)
    );
    setHours(h);

    const m = Math.floor(
      (difference % (1000 * 60 * 60)) / ( 1000 * 60)
    );
    setMinutes(m);

    const s = Math.floor((difference % (1000 * 60))/ 1000);
      setSeconds(s);

    if(d <= 0 && h <=0 && m <= 0 && s <= m ){
      setRunDay(true);
    }

    }, 1000)

    return () => clearInterval(interval)
  }, [])


  return (
    <div className={"timer-container"}>
        <title>Countdown Timer</title>

    
    {runDay ? (
      <>
        <h1>Run Day!</h1>
      </>
    ) : (
      <>
    <div>
      <div className="timer-wrapper">
        <div className="timer-inner">
          <div className = "timer-segment">
            <span className="time">{days}</span>
            <span className="label">Days</span>
          </div>
          <div className = "timer-segment">
            <span className="time">{hours}</span>
            <span className="label">Hours</span>
          </div>
          <div className = "timer-segment">
            <span className="time">{minutes}</span>
            <span className="label">Minutes</span>
          </div>
          <div className = "timer-segment">
            <span className="time">{seconds}</span>
            <span className="label">Seconds</span>
          </div>
       </div>
      </div>
    </div>
    </>
  )}
  </div>
  );
};



export default Home

