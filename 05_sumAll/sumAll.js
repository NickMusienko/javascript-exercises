const sumAll = function(endPt1, endPt2) {
    let tempSum = 0;
    if (endPt1 <= 0 || endPt2 <= 0 || !Number.isInteger(endPt1) || !Number.isInteger(endPt2)) {
        return "ERROR";
    }
    for (let i = Math.min(endPt1, endPt2); i <= Math.max(endPt1, endPt2); i++) {
        tempSum += i;
    }
    return tempSum;
};

// Do not edit below this line
module.exports = sumAll;
