module.exports = function repeater(str, options) {

    const {
        repeatTimes = 1,
            separator = '+',
            addition = '',
            additionRepeatTimes = 1,
            additionSeparator = '|'
    } = options;

    const additionCalculated = Array(additionRepeatTimes).fill('' + addition)
        .join(additionSeparator);

    return Array(repeatTimes).fill(str)
        .map(elem => '' + elem + additionCalculated)
        .join(separator);
}