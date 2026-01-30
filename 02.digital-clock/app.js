const hoursDisplay = document.querySelector("#time-text");
const minutesDisplay = document.querySelector("#minute-text");
const secondsDisplay = document.querySelector("#second-text");
const timeList = document.querySelector("#timeList");
const timeFormatToggleButton = document.querySelector("#is24Btn");

let isTwentyFourHourFormat = true;

function updateClock() {
  const currentTime = new Date();

  let hours = currentTime.getHours();
  const minutes = currentTime.getMinutes().toString().padStart(2, "0");
  const seconds = currentTime.getSeconds().toString().padStart(2, "0");

  let meridiem = "";

  if (!isTwentyFourHourFormat) {
    // 12-hour format
    meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
  } else {
    // 24-hour format - still show the time but without AM/PM
    meridiem = "";
  }

  const formattedHours = hours.toString().padStart(2, "0");

  hoursDisplay.textContent = formattedHours;
  minutesDisplay.textContent = minutes;
  secondsDisplay.textContent = seconds;


  const existingAmPm = document.querySelector("#am-pm");
  if (existingAmPm) {
    existingAmPm.remove();
  }

  if (!isTwentyFourHourFormat) {
    let createAmPm = document.createElement("span");
    createAmPm.id = "am-pm";
    createAmPm.className = "time-text";
    createAmPm.textContent = meridiem;
    timeList.appendChild(createAmPm); // ✅ DOM mein add kiya!
  }
}

function updateButtonText() {
  timeFormatToggleButton.textContent = isTwentyFourHourFormat
    ? "Switch to 12H"
    : "Switch to 24H";
}

timeFormatToggleButton.addEventListener("click", () => {
  isTwentyFourHourFormat = !isTwentyFourHourFormat;
  updateButtonText();
  updateClock();
});

// Initialize button text on page load
updateButtonText();

setInterval(updateClock, 1000);
updateClock();
