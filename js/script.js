function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  const timeString = `${hours}:${minutes} ${ampm}`;

  const clockElement = document.getElementById("clock");
  if (clockElement) clockElement.textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();

function updateDateAndCalendar() {
  const date = new Date();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayName = days[date.getDay()];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthToday = months[date.getMonth()];

  // Format for full date display (MM-DD-YYYY DAY)
  const formattedDate = `${month}-${day}-${year} ${dayName}`;
  // Format for calendar-style display (DD DAY)
  const dateToday = `${monthToday} ${day} ${dayName}`;

  const dateElement = document.getElementById("watch-date");
  const calendarElement = document.getElementById("calendar-date");

  if (dateElement) dateElement.textContent = formattedDate;
  if (calendarElement) calendarElement.textContent = dateToday;
}

setInterval(updateDateAndCalendar, 60000);
updateDateAndCalendar();

let count = 3; // starting count
const counter = document.getElementById("count");

const timer = setInterval(() => {
  count--;
  counter.textContent = count;

  if (count === 0) {
    clearInterval(timer);
    // redirect after countdown
    window.location.href = "sos-screen.html"; // change this to your target page
  }
}, 1000); // every 1 second

document.addEventListener("DOMContentLoaded", () => {
  // Wi-Fi
  const wifiToggle = document.getElementById("wifiToggle");
  const wifiIcon = document.querySelector(".wifi-icon");

  // Bluetooth
  const bluetoothToggle = document.getElementById("bluetoothToggle");
  const bluetoothIcon = document.querySelector(".bluetooth-icon");

  // ---- Load saved states ----
  const wifiOn = localStorage.getItem("wifiOn") === "true";
  const bluetoothOn = localStorage.getItem("bluetoothOn") === "true";

  if (wifiToggle) wifiToggle.checked = wifiOn;
  if (bluetoothToggle) bluetoothToggle.checked = bluetoothOn;

  if (wifiIcon) wifiIcon.classList.toggle("hidden", !wifiOn);
  if (bluetoothIcon) bluetoothIcon.classList.toggle("hidden", !bluetoothOn);

  // ---- Event listeners ----
  if (wifiToggle && wifiIcon) {
    wifiToggle.addEventListener("change", () => {
      const isOn = wifiToggle.checked;
      wifiIcon.classList.toggle("hidden", !isOn);
      localStorage.setItem("wifiOn", isOn);
    });
  }

  if (bluetoothToggle && bluetoothIcon) {
    bluetoothToggle.addEventListener("change", () => {
      const isOn = bluetoothToggle.checked;
      bluetoothIcon.classList.toggle("hidden", !isOn);
      localStorage.setItem("bluetoothOn", isOn);
    });
  }
});
