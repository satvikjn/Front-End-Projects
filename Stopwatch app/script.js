let [seconds, minutes, hours] = [0,0,0];
let displayTime = document.getElementById("display-time");
let timmer = null;

function stopwatch(){
    seconds++;
    if ( seconds==60){
        seconds = 0;
        minutes++;
        if(minutes==60){
            minutes = 0;
            hours++;
        }
    }
   
    let h = hours < 10 ? "0" + hours : hours;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let m = minutes < 10 ? "0" + minutes : minutes;

    displayTime.innerHTML= h + ":" + m + ":" + s; 
}

function watchStart(){
    if (timmer!== null){
        clearInterval(timmer);
    }
    timmer = setInterval(stopwatch, 1000);
}

function watchStop(){
    clearInterval(timmer);
}

function watchReset(){
    clearInterval(timmer);
    displayTime.innerHTML= "--:--:--";
    minutes = 0;
    seconds = 0;
    hours = 0;
}