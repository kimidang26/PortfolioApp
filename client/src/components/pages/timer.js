import React from 'react'

const timer = () => {
    const second = 1000;
    const minute = second*60;
    const hour = minute*60;
    const day = hour *24;

    let raceDay = " May 29,2023 00:07:00",
    countdown= new Date(raceDay).getTime(),
    
  return (
    <div>
      x=setInterval(function(){
        let now = new Date().getTime();
        distance = countdown - now;
        
    document.getElementById("days").innerText = Math.floor(distance / (day)),    
    document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
    document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
    document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);


    //do something later when date is reached
    if (distance < 0) {
        let headline = document.getElementById("headline"),
            countdown = document.getElementById("countdown"),
            content = document.getElementById("content");

        headline.innerText = "It's my birthday!";
        countdown.style.display = "none";
        content.style.display = "block";

        clearInterval(x);
      }

    }, 0)
    </div>
  )
}

export default timer
