var dateDisplayEl = document.getElementById('date-display');

var events = {
    hour8: '',
    hour9: '',
    hour10: '',
    hour11: '',
    hour12: '',
    hour13: '',
    hour14: '',
    hour15: '',
    hour16: '',
    hour17: '',
    hour18: '',
};

// handle displaying the time
function displayDate() {
    var rightNow = moment().format('MMM DD, YYYY');
    dateDisplayEl.textContent=(rightNow);
}

displayDate();

function setBGColor() {
    var currentHour = moment().format('H');
    var divHour;

    
}

function getEvents() {

}