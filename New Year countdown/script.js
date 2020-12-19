const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1}`);
year.innerText = currentYear + 1;

// Update countdown time
function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;
  let d = Math.floor(diff / 1000 / 60 / 60 / 24);
  let h = Math.floor(diff / 1000 / 60 / 60) % 24;
  let m = Math.floor(diff / 1000 / 60) % 60;
  let  s = Math.floor(diff / 1000) % 60;

  days.innerHTML = d;
  hours.innerHTML = h;
  minutes.innerHTML = m ;
  seconds.innerHTML = s;
}


setTimeout(() => {
  loading.remove();
  countdown.style.display = 'flex';
}, 1000);


setInterval(updateCountdown, 1000);
