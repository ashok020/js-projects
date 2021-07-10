const timer = document.getElementById("timer");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let minutesCounter = 0;
let secondsCounter = 0;

let stop = false;

startBtn.addEventListener("click", startCounter);
setBtn();

let counterId;

function counter() {
  secondsCounter++;
  if (secondsCounter == 60) {
    minutesCounter++;
    secondsCounter = 0;
  }
  updateTime();
}

function startCounter() {
  stopBtn.addEventListener("click", stopCounter);
  resetBtn.addEventListener("click", resetCounter);
  counter();
  stop = true;
  setBtn();
  console.log("start clicked");
  counterId = setInterval(counter, 1000);
}
function stopCounter() {
  stop = false;
  setBtn();
  console.log("stop clicked");
  clearInterval(counterId);
}

function resetCounter() {
  console.log("reset clicked");
  stopCounter();
  minutesCounter = 0;
  secondsCounter = 0;
  updateTime();
}

function updateTime() {
  if (minutesCounter < 10 && secondsCounter < 10) {
    timer.textContent = `0${minutesCounter}:0${secondsCounter}`;
  } else if (secondsCounter < 10) {
    timer.textContent = `0${minutesCounter}:${secondsCounter}`;
  } else if (secondsCounter < 10) {
    timer.textContent = `${minutesCounter}:0${secondsCounter}`;
  } else {
    timer.textContent = `${minutesCounter}:${secondsCounter}`;
  }
}

function setBtn() {
  if (stop == true) {
    startBtn.removeEventListener("click", startCounter);
    stopBtn.addEventListener("click", stopCounter);
    startBtn.style.transform = "scale(1)";
    stopBtn.style.transform = "scale(1.2)";
  } else {
    startBtn.addEventListener("click", startCounter);
    stopBtn.removeEventListener("click", stopCounter);
    startBtn.style.transform = "scale(1.2)";
    stopBtn.style.transform = "scale(1)";
  }
}

// ----------------------------------------------------------
time = document.getElementById("time");
date = document.getElementById("date");
day = document.getElementById("day");
setInterval(getTime, 1000);

function getTime() {
  let today = new Date();
  hour = today.getHours();
  minutes = today.getMinutes();
  seconds = today.getSeconds();
  today_day = today.getDay();

  switch (today_day) {
    case 0:
      today_day = "Sunday";
      break;

    case 1:
      today_day = "Monday";
      break;

    case 2:
      today_day = "Tuesday";
      break;

    case 3:
      today_day = "Wednesday";
      break;

    case 4:
      today_day = "Thrusday";
      break;

    case 5:
      today_day = "Friday";
      break;

    case 6:
      today_day = "Saturday";
      break;
  }

  ampm = "AM";
  if (hour == 0) {
    hour = 12;
    getDate();
    if (minutes == 0 && seconds == 0) {
      ampm = "AM";
    }
  }
  if (hour < 12) {
    ampm = "AM";
    if (hour < 10) hour = "0" + hour;
  }
  if (hour == 12 && minutes == 0 && seconds == 0) {
    ampm = "PM";
  }
  if (hour > 12) {
    hour = hour - 12;
  }
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  time.textContent = `${hour} : ${minutes} : ${seconds} ${ampm}`;

  day.textContent = today_day;
}

function getDate() {
  var today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let todayDate = today.getDate();

  if (todayDate < 10) todayDate = "0" + todayDate;

  switch (month) {
    case 1:
      month = "Jan";
      break;
    case 2:
      month = "Feb";
      break;

    case 3:
      month = "Mar";
      break;
    case 4:
      month = "Apr";
      break;

    case 5:
      month = "May";
      break;
    case 6:
      month = "Jun";
      break;

    case 7:
      month = "Jul";
      break;
    case 8:
      month = "Aug";
      break;

    case 9:
      month = "Sep";
      break;
    case 10:
      month = "Oct";
      break;

    case 11:
      month = "Nov";
      break;
    case 12:
      month = "Dec";
      break;
  }
  date.textContent = `${todayDate} ${month} ${year}`;
}

getTime();
getDate();

setInterval(getTime, 1000);

// ------------------------------------------------------
const clockHr = document.querySelector(".clock-hr");
const clockMin = document.querySelector(".clock-min");
const clockSec = document.querySelector(".clock-sec");

let today = new Date();
let secondsAg = today.getSeconds();
let minutesAg = today.getMinutes();
let hourAg = today.getHours();

if (hourAg >= 12) hourAg = hourAg - 12;

let rotateSec = 6 * secondsAg;
let rotateMin = 6 * minutesAg;
console.log(hourAg + " " + minutesAg);
let rotateHr = 30 * hourAg + minutesAg * 0.5;

let lastMin = minutesAg;
updateClockAg();

setInterval(updateClockAg, 1000);

function updateClockAg() {
  today = new Date();
  minutesAg = today.getMinutes();

  rotateSec = rotateSec + 6;

  if (lastMin != minutesAg) {
    rotateMin = rotateMin + 6;
    rotateHr = rotateHr + 0.5;
  }

  clockSec.style.setProperty("--rotation", rotateSec);
  clockMin.style.setProperty("--rotation", rotateMin);
  clockHr.style.setProperty("--rotation", rotateHr);

  lastMin = minutesAg;
}

// ---------------------------------------------------------

const calBox = document.querySelector(".cal-box");
const result = document.getElementById("result");
const io = document.querySelector(".output input");
let ioString = io.value;
let calString = "0";
document.addEventListener("keydown", function (e) {
  e.preventDefault();
  press(e.key);
});

document.addEventListener("keyup", function (e) {
  e.preventDefault();
  remove(e.key);
});

function clickFn(k) {
  navigator.vibrate(100);
  result.style.backgroundColor = "aliceblue";
  if (ioString == "Error" || ioString == "NaN" || ioString == "Infinity") {
    ioString = "";
    calString = "";
  }

  console.log(k);
  if (k == "b") {
    ioString = ioString.slice(0, -1);
    calString = calString.slice(0, -1);
  } else if (k == "c") {
    ioString = "0";
    calString = "0";
  } else if (k == "/") {
    ioString = ioString + "÷";
    calString = calString + "/";
  } else if (k == "=") {
    try {
      ioString = eval(calString);

      if (ioString.toFixed(0) != ioString) {
        // ioString = ioString.toFixed(10);
        ioString = Math.round((ioString + Number.EPSILON) * 1e10) / 1e10;
      }

      ioString = ioString.toString();
      calString = ioString;
    } catch {
      ioString = "Error";
      result.style.backgroundColor = "#f08080";
    }
  } else {
    ioString = ioString + k;
    calString = calString + k;
  }
  if (ioString[0] == "0" && ioString.length > 1 && ioString[1] != ".") {
    ioString = ioString.substring(1);
    calString = calString.substring(1);
  }
  if (ioString == "") {
    ioString = "0";
    calString = "0";
  }
  io.value = ioString;
  console.log(calString);
}

function getElem(key) {
  if (key == "Backspace") {
    return calBox.children[1];
  } else if (key == "/") {
    return calBox.children[3];
  } else if (key == "*") {
    return calBox.children[4];
  } else if (key == "-") {
    return calBox.children[5];
  } else if (key == "+") {
    return calBox.children[6];
  } else if (key == "=" || key == "Enter") {
    return calBox.children[7];
  } else if (key == ".") {
    return calBox.children[8];
  } else if (key == "0") {
    return calBox.children[9];
  } else if (key == "1") {
    return calBox.children[10];
  } else if (key == "2") {
    return calBox.children[11];
  } else if (key == "3") {
    return calBox.children[12];
  } else if (key == "4") {
    return calBox.children[13];
  } else if (key == "5") {
    return calBox.children[14];
  } else if (key == "6") {
    return calBox.children[15];
  } else if (key == "7") {
    return calBox.children[16];
  } else if (key == "8") {
    return calBox.children[17];
  } else if (key == "9") {
    return calBox.children[18];
  } else {
    return 0;
  }
}

function press(key) {
  let temp = getElem(key);
  if (temp) {
    temp.click();
    temp.id = "pressed";
  }
}
function remove(key) {
  let temp = getElem(key);
  if (temp) temp.removeAttribute("id");
}
