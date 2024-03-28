const displayedClock = document.querySelector('.displayed-clock');

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
    document.querySelector('.displayed-clock');
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

  //function setAlarm();

  //function alarmTrigger();

  //listener for time?
  //when time = this time alarmTrigger
  //setAlarm, when current time = x 