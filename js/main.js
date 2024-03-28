let time = document.getElementById("time");
let dateInput = document.getElementById("alarmDate");
let tInput = document.getElementById("alarmTime");
let btn = document.getElementById("setAlarm");
let contan = document.getElementById("stAlarm");
let inerVal;
let maxValue = 3;
let cnt = 0;
let almTimesArray = [];
//Timechange function

function timeChangeFunction(){
    let curr = new Date();
    let hrs = curr.getHours();
    let min = String(curr.getMinutes()).padStart(2, "0")
    let sec = String(curr.getMinutes()).padStart(2, "0")
    let period = "AM";
    if (hrs >= 12) {
        period = "PM";
        if (hrs > 12){
            hrs -= 12;
        }
    }
    hrs = String(hrs).padStart(2, 0);
    time.testContent = '${hrs}:${min}:{sec} ${period}';
}

function alarmSetFunction() [
    let now = new Date();
    let selectedDate = new Date(dateInput.value + "T" + tInput.value);
    if (selectedDate <= now){
        alert('invalid time. Please select a future time');
        return;
    }

if (almTimesArray.includes(selectedDate.toString())){
    alert('You cannot set multiple alarms for the same time.')
    return;
}

if (cnt < maxValue) {
    let timeUntilAlarm = selectedDate - now;
    let alarmDiv = document.createElement('div');
    alarmDiv.classList.add('add');
    alarmDiv.innerHTML = '
        <span>
           $(selectedDate.tolocaleString())}
        </span>
        <button class= 'delete-alarm'>
        delete
        </button>

        alarmDiv
            .querySelector("delete-alarm")
            .addEventListener("click", () = >{
            alarmDiv.remove();
                cnt--;
                clearTimeout(interVal);
                const idx = almTimesArray.indexOf(selectedDate.toString());
                if (idx !== -1) {
                    almTimesArray.splice(idx, 1);
                }
            });

//const displayedClock = document.querySelector('.displayed-clock');

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
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