function updateClock() {
  const timeElement = document.getElementById('time');
  const amPmElement = document.getElementById('ampm');
  const now = new Date();
  
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const amPm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  timeElement.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  amPmElement.textContent = amPm;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to display the clock immediately
