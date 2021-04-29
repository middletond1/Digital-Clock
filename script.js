const docTime = document.querySelector('#time');
const docDate = document.querySelector('#date');
const d = new Date();

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

function printDate() {
    return docDate.textContent = `${setDay()}, ${setMonth()} ${setDate()} ${setYear()}`
}

printDate();
