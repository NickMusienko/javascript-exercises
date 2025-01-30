const removeFromArray = function(arrSubject, ...arrRest) {
    let arrTemp = arrSubject.slice();
    for (let i = 0; i <= arrRest.length; i++) {
        let idx = arrTemp.indexOf(arrRest[i]);
        while (idx > -1) {
            arrTemp.splice(idx, 1);
            idx = arrTemp.indexOf(arrRest[i]);
        }
    }

    return arrTemp;
};

// Do not edit below this line
module.exports = removeFromArray;
