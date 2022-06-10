
const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
    body: document.querySelector('body')
};
let intervalId = null;

refs.startBtn.addEventListener('click',onClickChangeBgColor)
refs.stopBtn.addEventListener('click', onClickRemoveBgActions)

refs.stopBtn.disabled = true;

function onClickChangeBgColor() {
    intervalId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
}

function onClickRemoveBgActions() {
    clearInterval(intervalId);
    refs.stopBtn.disabled = true;
    refs.startBtn.disabled = false;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}