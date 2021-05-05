let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;


function BMI(weight, height) {
    return weight / height ** 2;
}

let markBmi = BMI(markWeight, markHeight);
let johnBmi = BMI(johnWeight, johnHeight);

function isHigher(markBmi, johnBmi) {
    if (markBmi > johnBmi) {
        return console.log(`"TEST -> Mark's BMI (${markBmi}) is higher than John's BMI (${johnBmi})"`)
    } else {
        return console.log(`"TEST -> Mark's BMI (${markBmi}) is NOT higher than John's BMI (${johnBmi})"`)
    }
}
isHigher(markBmi, johnBmi);


markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;
markBmi = BMI(markWeight, markHeight);
johnBmi = BMI(johnWeight, johnHeight);
isHigher(markBmi, johnBmi);
