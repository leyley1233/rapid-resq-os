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
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
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