const reverseString = function(str) {
    tempStr = "";
    for (let i = str.length; i >= 0; i--) {
        tempStr += str.charAt(i);
    }
    return tempStr;
};

// Do not edit below this line
module.exports = reverseString;
