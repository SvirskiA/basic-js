// function repeater( str, options ) {
// console.log(options.repeatTimes)
module.exports = function repeater( str, options ) {



    let separator2;
    let result2 = '';
    let separator;
    let result = '';

    if (options.repeatTimes == undefined && options.additionRepeatTimes == undefined) {
        result = str + options.addition;
    }

    if (options.additionSeparator) {
        separator2 = options.additionSeparator;
    } else {
        separator2 = '|';
    }
    // options.additionRepeatTimes = 0;
// console.log (options.additionRepeatTimes)
    for (let i = 0; i < options.additionRepeatTimes; i += 1) {
        if (i < options.additionRepeatTimes - 1) {
            result2 += options.addition + separator2;
        }
        else {
            result2 += options.addition;
        }
    }
// console.log(result2)




    if (options.separator) {
        separator = options.separator;
    } else {
        separator = '+';
    }

    for (let i = 0; i < options.repeatTimes; i += 1) {
        if (i < options.repeatTimes - 1) {
            result += str + result2 + separator;
        }
        else {
            result += str + result2;
        }
    }

    // console.log(result)
    return result;
    // throw 'Not implemented';
    // // remove line with error and write your code here
};


// repeater('12345', { repeatTimes: 5, separator: '3 words separator' });
// repeater('TESTstr', { repeatTimes: undefined, separator: 'ds', addition: 'ADD!', additionRepeatTimes: undefined, additionSeparator: ')))000' })