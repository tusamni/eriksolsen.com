export function timeAgo(input) {
    const date = input instanceof Date ? input : new Date(input);
    const formatter = new Intl.RelativeTimeFormat("en");
    const ranges = {
        years: 3600 * 24 * 365,
        months: 3600 * 24 * 30,
        weeks: 3600 * 24 * 7,
        days: 3600 * 24,
        hours: 3600,
        minutes: 60,
        seconds: 1,
    };
    const secondsElapsed = (date.getTime() - Date.now()) / 1000;
    for (let key in ranges) {
        if (ranges[key] < Math.abs(secondsElapsed)) {
            const delta = secondsElapsed / ranges[key];
            return formatter.format(Math.round(delta), key);
        }
    }
}

export function formatDate(date, format = { day: "numeric", month: "long", year: "numeric" }) {
    const jsDate = new Date(date);

    return Intl.DateTimeFormat("en-US", {
        day: format.day,
        month: format.month,
        year: format.year,
        timeZone: "UTC",
    }).format(jsDate);
}

export function postgresDate(date) {
    var jsDate = new Date(date);

    var tzo = -jsDate.getTimezoneOffset(),
        dif = tzo >= 0 ? '+' : '-',
        pad = function (num) {
            return (num < 10 ? '0' : '') + num;
        };

    return jsDate.getFullYear() +
        '-' + pad(jsDate.getMonth() + 1) +
        '-' + pad(jsDate.getDate()) +
        'T' + pad(jsDate.getHours()) +
        ':' + pad(jsDate.getMinutes()) +
        ':' + pad(jsDate.getSeconds()) +
        dif + pad(Math.floor(Math.abs(tzo) / 60)) +
        ':' + pad(Math.abs(tzo) % 60);
}

export function htmlDate(date) {
    var jsDate = new Date(date);

    return jsDate.toISOString()
}