const countdown = () => {
    const endDate = new Date('Jan 16, 2022 00:00:00').getTime();
    const now = new Date().getTime();
    const timeTillEnd = endDate - now;

    if(timeTillEnd <= 0)
    {
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.backgroundImage = "url(https://media2.giphy.com/media/M6tkoCOSJydUo9wvEB/giphy.gif?cid=ecf05e477vcyuw39m69etg78hjz331uxgwhzyz38of3tfj2w&rid=giphy.gif&ct=g)";
        document.querySelector("body").style.backgroundSize = "cover";
        document.querySelector(".countdown").style.display = "none";
        document.querySelector("h2.mainText").innerText = "Valerie Ann Young is now twenty-four!";
        document.querySelector("h2.mainText").style.color = "purple"
    }
    else
    {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
    
        const textDay = Math.floor(timeTillEnd / day);
        const textHour = Math.floor((timeTillEnd % day) / hour);
        const textMin = Math.floor((timeTillEnd % hour) / minute);
        const textSecond = Math.floor((timeTillEnd % minute) / second);
    
        document.querySelector(".day").innerText = textDay;
        document.querySelector(".hour").innerText = textHour;
        document.querySelector(".minute").innerText = textMin;
        document.querySelector(".second").innerText = textSecond;
    
    }
}

setInterval(countdown, 1000);
