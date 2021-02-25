$(function() {
    let time = 0;
    let second = 0;
    let minute = 0;
    let hour = 0;
    let timeElem = document.getElementById('timer');
    let timer;
    let temp = [];
    let currentTime = 0;
    let laps = 0;
    let lastCurrentLapTime = 0;

    $(`#addMinute`).on('click', function() {
        minute++;
    })

    timeElem.textContent = "00:00:00.00";
    timeControl.addEventListener('click', function() {
        if(timeControl.textContent == "Start") {
            start();
        }else if(timeControl.textContent == "Stop"){
            stop();
        }
    });
    lap.addEventListener('click', function() {
        if(lap.textContent == "Lap"){
            addLap()
        }else {
            restart();
        }
    }); 

    function start() {
        timer = setInterval(function() {
            addTime();
            time++;
            timeControl.textContent = "Stop";
            lap.textContent = "Lap";
        },10)
    }

    function stop() {
        clearInterval(timer);
        timeControl.textContent = "Start";
        lap.textContent = "Restart";
    }

    function addTime() {
        if(time >= 100) {
            second++
            time = 0;
        }

        if(second >= 60) {
            minute++;
            second = 0;
        }

        if(minute >= 60) {
            hour++;
            minute = 0;
        }

        if(second < 10) {
            second = Number(second);
            second = "0" + second;
        }

        if(minute < 10) {
            minute = Number(minute);
            minute = "0" + minute;
        }

        if(hour < 10) {
            hour = Number(hour);
            hour = "0" + hour;
        }

        if(time < 10) {
            time = Number(time);
            time = "0" + time;
        }

        timeElem.textContent = hour + ":" + minute + ":" + second + "." + time;
        
        if(minute == 0) {
            currentTime = `${second}.${time}`;
        }else if(hour == 0) {
            currentTime = `${minute}:${second}.${time}`;
        }else {
            currentTime = `${hour}:${minute}:${second}.${time}`;
        }
    }

    function addLap() {
        laps++;
        let newLi = document.createElement('li');
        newLi.setAttribute('id', `lap${laps}`);
        let lastLap;
        if(laps == 1) {

        }else {
            lastLap = document.getElementById(`lap${laps-1}`).textContent;
        }
        
        if(laps == 1) {
            newLi.textContent = currentTime;
        }else {
            if(minute > 0) {
                temp = currentTime.split(":")
                let tempCurrentTime = Number(temp[0]* 60) + Number(temp[1]);
                let tempMin = 0;
                if(tempCurrentTime >= 60) {
                    tempMin = (tempCurrentTime / 60).toFixed(0);

                    let convMin = (tempMin * 60).toFixed(2);
                    let difference = tempCurrentTime - convMin;
                    let finalDifference;

                    if(difference.toFixed(2) < 10) {
                        finalDifference = `${tempMin}:0${difference.toFixed(2)}`;
                    }else {
                        finalDifference = `${tempMin}:${difference.toFixed(2)}`;
                    }
                    
                    newLi.textContent = finalDifference;
                }else {
                    let newLapTime = tempCurrentTime - lastCurrentLapTime;
                    newLi.textContent = newLapTime.toFixed(2);
                }
                
            }else {
                let newLapTime = currentTime - lastCurrentLapTime;
                newLi.textContent = newLapTime.toFixed(2);
            }
            
        }

        lapList.append(newLi);
        lastCurrentLapTime = currentTime;
    }

    function restart() {
        laps = 0;
        lapList.innerHTML = '<p id="title">Laps:</p>';
        timeElem.textContent = "00:00:00.00";
        currentTime = 0;
        time = 0;
        second = 0;
        minute = 0;
        hour = 0;
        lap.textContent = "Lap";
    }
});