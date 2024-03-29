
const padWithZero = (n) => { return n < 10 ? '0' + n : n; }

const timestampToDate = (timestamp) => {
    var date = new Date(timestamp);
    return (date.getFullYear() + "-" + (padWithZero(date.getMonth()+1)) + "-" + padWithZero(date.getDate()));
}

const daysSinceTimestamp = (date) => {
    var today = new Date();
    var startingDate = new Date(date);
    var timeDiff = Math.abs(today.getTime() - startingDate.getTime());
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
}

const minutesInSeconds = 60;
const hourInSeconds = 60 * minutesInSeconds;
const dayInSeconds = 24 * hourInSeconds;
const weekInSeconds = 7 * dayInSeconds;

export function formatTime(timeString) {
    if (!timeString) {
        return "";
    }

    // Check if timeString is a float (timestamp) or ISO 8601 date string
    const isFloatTimestamp = !isNaN(timeString) && timeString.toString().indexOf('.') !== -1;
    const timestamp = isFloatTimestamp ? Number(timeString) * 1000 : Date.parse(timeString);

    if (isNaN(timestamp)) {
        return "Invalid date"; // or handle invalid input as you see fit
    }

    const now = new Date();
    const dateFromEpoch = new Date(timestamp);
    const secondsPast = Math.floor((now - dateFromEpoch) / 1000);

    if (secondsPast < minutesInSeconds * 2) {
        return 'Online now';
    }

    if (secondsPast < hourInSeconds) {
        const minutes = Math.floor(secondsPast / minutesInSeconds);
        return `${minutes} minutes ago`;
    }

    if (secondsPast < dayInSeconds) {
        const hours = Math.floor(secondsPast / hourInSeconds);
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    }
    
    if (secondsPast < weekInSeconds) {
        const days = Math.floor(secondsPast / dayInSeconds);
        return `${days} day${days > 1 ? 's' : ''} ago`;
    }

    return dateFromEpoch.toLocaleDateString();
}


export { daysSinceTimestamp, padWithZero, timestampToDate };

