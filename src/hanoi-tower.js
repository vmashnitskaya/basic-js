module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let resultObject = {};

    let turns = Math.pow(2, disksNumber) - 1;
    let seconds = turns / (turnsSpeed / 3600);


    resultObject.turns = turns
    resultObject.seconds = seconds;

    return resultObject;
}

