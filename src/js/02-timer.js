import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";


const refs = {
    startBtn: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
    input: document.querySelector('#datetime-picker')
};

let intervalId = null;

deactivateBtn();

addEventListener('DOMContentLoaded', onRefreshPageResetTimer);

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
        refs.startBtn.addEventListener('click', startTimer)
      function startTimer() {
        timer(selectedDates[0])
        }
  },
};



function timer(choosedDates) {
    
  intervalId = setInterval(() => {
        const currentDate = Date.now();
        const timeDiff = choosedDates - currentDate;
        const convertedTimeInObj = convertMs(timeDiff);
        renderTimer(convertedTimeInObj);
  }, 1000)
  deactivateBtn()
  refs.input.disabled = true;
  }

function onRefreshPageResetTimer() {
    clearInterval(intervalId);
}

flatpickr('#datetime-picker', options);

// refs.startBtn.addEventListener('click',)

function renderTimer({days, hours, minutes, seconds}) {
  refs.days.textContent = days.toString().padStart(2,0);
        refs.hours.textContent = hours.toString().padStart(2,0);
        refs.minutes.textContent = minutes.toString().padStart(2,0);
        refs.seconds.textContent = seconds.toString().padStart(2,0);
}

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

function deactivateBtn() {
  refs.startBtn.disabled = true;
}