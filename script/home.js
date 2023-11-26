let intervalId;
let time = JSON.parse(localStorage.getItem('time')) || {
  seconds: 0,
  minutes: 0,
  hour: 0,
};
let seconds = time.seconds;
let minutes = time.minutes;
let hour = time.hour;
let isCounting = false;

document.querySelector('.js-start-btn').addEventListener('click', () => {
  if (!isPlaying) {
    isPlaying = true;
    intervalId = setInterval(() => {
      changeTime();
    }, 1000);

    document.querySelector('.js-start-btn').disabled = true;
  }
});

function changeTime() {
  seconds++;
  document.getElementById('seconds').innerText =
    seconds < 10 ? `0${seconds}` : `${seconds}`;

  if (seconds > 59) {
    seconds = 0;
    minutes++;

    document.getElementById('minutes').innerText =
      minutes < 10 ? `0${minutes}` : `${minutes}`;

    if (minutes > 59) {
      minutes = 0;
      hour++;
      document.getElementById('hour').innerText =
        hour < 10 ? `0${hour}` : `${hour}`;
    }
  }

  localStorage.setItem('time', JSON.stringify({ seconds, minutes, hour }));
}

document.querySelector('.js-stop-btn').addEventListener('click', () => {
  clearInterval(intervalId);
  isPlaying = false;

  document.querySelector('.js-start-btn').disabled = false;
  document.querySelector('.js-start-btn').textContent = 'Resume';
});

document.querySelector('.js-reset-btn').addEventListener('click', () => {
  clearInterval(intervalId);
  seconds = 0;
  minutes = 0;
  hour = 0;
  document.getElementById('hour').innerText = `00`;
  document.getElementById('minutes').innerText = `00`;
  document.getElementById('seconds').innerText = `00`;
  localStorage.setItem('time', JSON.stringify({ seconds, minutes, hour }));

  document.querySelector('.js-start-btn').disabled = false;
  document.querySelector('.js-start-btn').textContent = 'Start';
});
