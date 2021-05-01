const docTime = document.querySelector('#time');
const docDate = document.querySelector('#date');
const d = new Date();
let day = d.getDay();
let month = d.getMonth();
let date = d.getDate();
let year = d.getFullYear();
let seconds = d.getSeconds();
let minutes = d.getMinutes();
let hours = d.getHours();

function setDay() {
    let displayDay = '';
    if (minutes === 0 && seconds === 0 && hours === 0 && day === 6) {
        day = 0;
    } else if (minutes === 0 && seconds === 0 && hours === 0) {
        day++;
    } else day;
    switch (day) {
        case 0:
          displayDay = "Sunday";
          break;
        case 1:
          displayDay = "Monday";
          break;
        case 2:
          displayDay = "Tuesday";
          break;
        case 3:
          displayDay = "Wednesday";
          break;
        case 4:
          displayDay = "Thursday";
          break;
        case 5:
          displayDay = "Friday";
          break;
        case 6:
          displayDay = "Saturday";
          break;
      }
    return displayDay;
}

function setMonth() {
    let displayMonth = '';
    if (minutes === 0 && seconds === 0 && hours === 0 && date === 31 && month === 0 || 
        minutes === 0 && seconds === 0 && hours === 0 && date === 31 && month === 2 || 
        minutes === 0 && seconds === 0 && hours === 0 && date === 31 && month === 4 || 
        minutes === 0 && seconds === 0 && hours === 0 && date === 31 && month === 6 || 
        minutes === 0 && seconds === 0 && hours === 0 && date === 31 && month === 7 || 
        minutes === 0 && seconds === 0 && hours === 0 && date === 31 && month === 9) {
        date = 1;
        month++;
    } else if (minutes === 0 && seconds === 0 && hours === 0 && date === 30 && month === 3 || 
        minutes === 0 && seconds === 0 && hours === 0 && date === 30 && month === 5 || 
        minutes === 0 && seconds === 0 && hours === 0 && date === 30 && month === 8 || 
        minutes === 0 && seconds === 0 && hours === 0 && date === 30 && month === 10) {
        date = 1;
        month++;
    } else if (minutes === 0 && seconds === 0 && hours === 0 && date === 28 && month === 1) {
        date = 1;
        month++;
    } else if (minutes === 0 && seconds === 0 && hours === 0 && date === 31 && month === 11) {
        date = 1;
        month = 0;
        year++;
    } else if (minutes === 0 && seconds === 0 && hours === 0 ) {
        date++;
    }
        switch (month) {
            case 0:
                displayMonth = 'January';
                break;
            case 1:
                displayMonth = 'February';
                break;
            case 2:
                displayMonth = 'March';
                break;
            case 3:
                displayMonth = 'April';
                break;
            case 4:
                displayMonth = 'May';
                break;
            case 5:
                displayMonth = 'June';
                break;
            case 6:
                displayMonth = 'July';
                break;
            case 7:
                displayMonth = 'August';
                break;
            case 8:
                displayMonth = 'September';
                break;
            case 9:
                displayMonth = 'October';
                break;
            case 10:
                displayMonth = 'November';
                break;
            case 11:
                displayMonth = 'December';
                break;
        }
    return displayMonth;
}

function setDate() {
    let displayDate = '';
    if (date === 1 || date === 21 || date === 31) {
        displayDate = date + 'st';
    } else if (date === 2 || date === 22) {
        displayDate = date + 'nd';
    } else if (date === 3 || date === 23) {
        displayDate = date + 'rd';
    } else if (date > 3 && date < 21 || date > 23 && date < 31) {
        displayDate = date + 'th';
    }
    return displayDate;
}

function incrementSeconds() {
    if (seconds < 59) {
    seconds++
    } else seconds = 0
    return seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
}

function incrementMinutes() {
    if (seconds === 59 && minutes < 59) {
        minutes++;
    } else if (seconds === 59 && minutes === 59) {
        minutes = 0;
    } else minutes;
    return minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
}

function incrementHours() {
    if (minutes === 59 && seconds === 59 && hours < 23) {
        hours++;
    } else if (minutes === 59 && seconds === 59 && hours === 23) {
        hours = 0;
    } 
    return hours;
}
//Setting a variable in these increment functions will cause them to reset after a minute loop.

function hoursToStandard() {
    let displayHours = incrementHours();
    switch (displayHours) {
        case 13:
            displayHours = 1
            break;
        case 14:
            displayHours = 2
            break;
        case 15:
            displayHours = 3
            break;
        case 16:
            displayHours = 4
            break;
        case 17:
            displayHours = 5
            break;
        case 18:
            displayHours = 6
            break;
        case 19:
            displayHours = 7
            break;
        case 20:
            displayHours = 8
            break;
        case 21:
            displayHours = 9
            break;
        case 22:
            displayHours = 10
            break;
        case 23:
            displayHours = 11
            break;
        case 0:
            displayHours = 12
            break;
    }
    return displayHours.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
}

function setLatin() {
    let latin = 'AM';
    if (hours > 11) {
        latin = 'PM';
    };
    return latin;
}

function printTime() {
    return docTime.textContent = `${hoursToStandard()}:${incrementMinutes()}:${incrementSeconds()} ${setLatin()}`
}

function printDate() {
    return docDate.textContent = `${setDay()}, ${setMonth()} ${setDate()} ${year}`
}

printTime();
printDate();
setInterval(printTime, 1000);
setInterval(printDate, 1000);
