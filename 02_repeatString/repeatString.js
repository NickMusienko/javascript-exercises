const repeatString = function(string, num) {
    let tempStr = "";
    if (num < 0) {
        tempStr = "ERROR"
    }
    else {
        for (let i = 1; i <= num; i++) {
            tempStr += string;
        }
    };
    return tempStr;
};

// Do not edit below this line
module.exports = repeatString;
