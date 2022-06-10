import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
// addEventListener('DOMContentLoaded', onRefreshPageResetTimer)
const refs = {
    startBtn: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
};

refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        const currentTimeInMs = Date.now();
        const selectedDateInMs = selectedDates[0].getTime();

        if (selectedDateInMs < currentTimeInMs) {
            window.alert("Please choose a date in the future");
        } else
        refs.startBtn.disabled = false;
        refs.startBtn.addEventListener('click', timer(selectedDateInMs))
      },
};
console.log(Date.now())
let intervalId = null;
function timer(choosedDate) {
    
   intervalId = setInterval(() => {
        const currentDate = Date.now();
        const timeDiff = choosedDate - currentDate;
        const convertedTimeInObj = convertMs(timeDiff);
        refs.days.textContent = String(convertedTimeInObj.days).padStart(2,0);
        refs.hours.textContent = String(convertedTimeInObj.hours).padStart(2,0);
        refs.minutes.textContent = String(convertedTimeInObj.minutes).padStart(2,0);
        refs.seconds.textContent = String(convertedTimeInObj.seconds).padStart(2,0);
   }, 1000)}

function onRefreshPageResetTimer() {
    clearInterval(intervalId);
}

flatpickr('#datetime-picker', options);

// refs.startBtn.addEventListener('click',)


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
