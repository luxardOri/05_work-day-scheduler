var timeDisplayEl = document.getElementById('time-display');

// handle displaying the time
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY');
    timeDisplayEl.textContent=(rightNow);
  }

  displayTime();