function printTime() {
    const time = new Date();
    const seconds = addLeadingZero(time.getSeconds());
    const minutes = addLeadingZero(time.getMinutes());
    const hours = time.getHours();
    const isAm = hours < 12 || hours === 0;
    let amPm = isAm ? 'AM' : 'PM';
    document.querySelector('#time').textContent = `${hoursToStandard(hours)}:${minutes}:${seconds} ${amPm}`;
}

function hoursToStandard(hour) {
    hour = hour >= 13 ? hour - 12 : hour;
    hour = hour === 0 ? hour + 12 : hour;
    return hour;
}

function addLeadingZero(number) {
    return number < 10 ? '0' + number : number;
}

function printDate() {
    const date = new Date();
    const day = setDay(date.getDay());
    const month = setMonth(date.getMonth());
    const dateToday = setDate(date.getDate());
    const year = date.getFullYear();
    document.querySelector('#date').textContent = `${day}, ${month} ${dateToday} ${year}`
}

function setDay(day) {
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];
    return days[day];
}

function setMonth(month) {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
    return months[month];
}

function setDate(date) {
    if(date < 10 || date > 20) {
        switch (date % 10) {
            case 1:
                return `${date}st`;
            case 2:
                return `${date}nd`;
            case 3:
                return `${date}rd`;
        }
    }
    return `${date}th`
}

printTime()
printDate()
setInterval(() => {
    printTime();
    printDate();
}, 1000);
