let time = document.getElementById("time");
let dateInput = document.getElementById("alarmDate");
let tInput = document.getElementById("alarmTime");
let btn = document.getElementById("setAlarm");
let contan = document.getElementById("alarms");
let interVal;
let maxValue = 3;
let cnt = 0;
let almTimesArray = [];

function timeChangeFunction() {
    let curr = new Date();
    let hrs = curr.getHours();
    let min = String(curr.getMinutes()).padStart(2, "0");
    let sec = String(curr.getSeconds()).padStart(2, "0");
    let period = "AM";
    var timeString = hrs + ":" + min + ":" + sec;
    var img = stringToImage(timeString);
    if (hrs >= 12) {
        period = "PM";
        if (hrs > 12) {
            hrs -= 12;
        }
    }
    
    hrs = String(hrs).padStart(2, "0");
    time.textContent = `${hrs}:${min}:${sec} ${period}`;
    let imageClock = document.getElementById('clock').innerHTML = timeString + "<br>" + img;
    var temp = ""
    for (var i = 0; i < s.length; i++) {
      //URL from array img and shove it into a HTML img tag
      //also append it to the temporary variable
      temp = temp + "<img src='" + img[s[i]] + "'/>"
    }
    //uncomment below line to see what the temporary variable says
    console.log(temp)
    return temp
}

  //This function takes each letter of an array and pairs it to an image of the img array 
  function stringToImage(s) {
    //create a temporary blank variable to hold HTML images
    var temp = ""
    for (var i = 0; i < s.length; i++) {
      //URL from array img and shove it into a HTML img tag
      //also append it to the temporary variable
      temp = temp + "<img src='" + img[s[i]] + "'/>"
    }
    //uncomment below line to see what the temporary variable says
    console.log(temp)
    return temp
  }
  
  
  //all image URLs are put into this array. feel free to change URLs
  var img = {
    "1": "img/1.jpg",
    "2": "img/2.jpg",
    "3": "img/3.jpg",
    "4": "img/4.jpg",
    "5": "img/5.jpg",
    "6": "img/6.jpg",
    "7": "img/7.jpg",
    "8": "img/8.jpg",
    "9": "img/9.jpg",
    "0": "img/0.jpg",
    ":": "img/colon.jpg",
  }

function alarmSetFunction() {
    let now = new Date();
    let selectedDate = new Date(dateInput.value + "T" + tInput.value);
    if (selectedDate <= now) {
        alert(`Invalid time. Please select 
      a future date and time.`);
        return;
    }
    if (almTimesArray.includes(selectedDate.toString())) {
        alert(`You cannot set multiple 
      alarms for the same time.`);
        return;
    }
    if (cnt < maxValue) {
        let timeUntilAlarm = selectedDate - now;
        let alarmDiv = document.createElement("div");
        alarmDiv.classList.add("alarm");
        alarmDiv.innerHTML = `
            <span>
              ${selectedDate.toLocaleString()}
            </span>
            <button class="delete-alarm">
              Delete
            </button>
        `;
        alarmDiv
            .querySelector(".delete-alarm")
            .addEventListener("click", () => {
                alarmDiv.remove();
                cnt--;
                clearTimeout(interVal);
                const idx = almTimesArray.indexOf(selectedDate.toString());
                if (idx !== -1) {
                    almTimesArray.splice(idx, 1);
                }
            });
        interVal = setTimeout(() => {
            alert("Time to wake up!");
            alarmDiv.remove();
            cnt--;
            const alarmIndex = almTimesArray.indexOf(selectedDate.toString());
            if (alarmIndex !== -1) {
                almTimesArray.splice(alarmIndex, 1);
            }
        }, timeUntilAlarm);
        contan.appendChild(alarmDiv);
        cnt++;
        almTimesArray.push(selectedDate.toString());
    } else {
        alert("You can only set a maximum of 3 alarms.");
    }
}
function showAlarmFunction() {
    let alarms = contan.querySelectorAll(".alarm");
    alarms.forEach((alarm) => {
        let deleteButton = alarm.querySelector(".delete-alarm");
        deleteButton.addEventListener("click", () => {
            alarmDiv.remove();
            cnt--;
            clearTimeout(interVal);
            const alarmIndex = almTimesArray.indexOf(selectedDate.toString());
            if (alarmIndex !== -1) {
                almTimesArray.splice(alarmIndex, 1);
            }
        });
    });
}
showAlarmFunction();
setInterval(timeChangeFunction, 1000);
btn.addEventListener("click", alarmSetFunction);
timeChangeFunction();
//const displayedClock = document.querySelector('.displayed-clock');
/*-
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
  */