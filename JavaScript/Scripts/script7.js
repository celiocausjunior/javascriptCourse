const mark = {
    fullName : 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI : function () {
        this.bmi = this.mass/this.height ** 2;
    }
}

const john = {
    fullName : 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI : function () {
        this.bmi = this.mass/this.height ** 2;
    }
}

mark.calcBMI();
john.calcBMI();

console.log(`Johns's BMI ${john.bmi} is ${john.bmi>mark.bmi ? '' : 'not'} higher than Mark's ${mark.bmi}!`);

