const docTime = document.querySelector('#time');
const docDate = document.querySelector('#date');
const d = new Date();
let seconds = d.getSeconds();
let minutes = d.getMinutes();
let hours = d.getHours();

function setDay() {
    let day = d.getDay();
    switch (day) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
           day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
      }
    return day;
}

function setMonth() {
    let month = d.getMonth();
    switch (month) {
        case 0:
            month = 'January';
            break;
        case 1:
            month = 'February';
            break;
        case 2:
            month = 'March';
            break;
        case 3:
            month = 'April';
            break;
        case 4:
            month = 'May';
            break;
        case 5:
            month = 'June';
            break;
        case 6:
            month = 'July';
            break;
        case 7:
            month = 'August';
            break;
        case 8:
            month = 'September';
            break;
        case 9:
            month = 'October';
            break;
        case 10:
            month = 'November';
            break;
        case 11:
            month = 'December';
            break;
    }
    return month;
}

function setDate() {
    let date = d.getDate();
    if (date === 1 || date === 21 || date === 31) {
        date += 'st';
    } else if (date === 2 || date === 22) {
        date += 'nd';
    } else if (date === 3 || date === 23) {
        date += 'rd';
    } else if (date > 3 && date < 21 || date > 23 && date < 31) {
        date += 'th';
    }
    return date;
}

function setYear() {
    return d.getFullYear();  
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
    return docDate.textContent = `${setDay()}, ${setMonth()} ${setDate()} ${setYear()}`
}

printTime();
printDate();
setInterval(printTime, 1000);
setInterval(printDate, 1000);
