const removeFromArray = function (arr, ...n) {
    const len = arr.length;
    const newArr = arr.filter(function (i) {
        if (n.includes(i) == false) {
            return true;
        }
    })
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;