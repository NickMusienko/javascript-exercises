const leapYears = function(year) {
    let div4 = year % 4 === 0;
    let div100 = year % 100 === 0;
    let div400 = year % 400 === 0;

    if (div4 && (!div100 || div400)) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
