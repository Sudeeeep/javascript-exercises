const repeatString = function (str, num) {

    let modStr = "";

    for (let i = 0; i < num; i++) {
        modStr = modStr + str;
    }
    console.log(modStr);
};

// Do not edit below this line
module.exports = repeatString;