

let markHeight = 1.69;
let markWeight = 78;
let jonhHeight = 1.95;
let jonhWeight = 92;


function bmiTest(weight, height) {
    return weight / height ** 2;
}


let bmiMark = parseFloat(bmiTest(markWeight, markHeight).toFixed(2));
let bmiJonh = parseFloat(bmiTest(jonhWeight, jonhHeight).toFixed(2))

function isHigherBMI(bmiMark, bmiJonh) {
    if (bmiMark > bmiJonh)
        return true;
    else {
        return false;
    }
}

let bmiComparation = isHigherBMI(bmiMark, bmiJonh);

console.log("TEST DATA 1. Marks weights: " + markWeight + "kg and is " + markHeight + "m tall." + "BMI Mark is: " + bmiMark + "Jonh weights: " + jonhWeight + "kg and is " + jonhHeight + "m tall. BMI Jonh is " + bmiJonh + "Mark's BMI is higher than John? " + bmiComparation + "\n")


markHeight = 1.88;
markWeight = 95;
jonhHeight = 1.76;
jonhWeight = 85;

bmiMark = parseFloat(bmiTest(markWeight, markHeight).toFixed(2));
bmiJonh = parseFloat(bmiTest(jonhWeight, jonhHeight).toFixed(2))

bmiComparation = isHigherBMI(bmiMark, bmiJonh);

console.log("TEST DATA 2. Marks weights: " + markWeight + "kg and is " + markHeight + "m tall." + "BMI Mark is: " + bmiMark + "Jonh weights: " + jonhWeight + "kg and is " + jonhHeight + "m tall. BMI Jonh is " + bmiJonh + "Mark's BMI is higher than John? " + bmiComparation + "\n")
