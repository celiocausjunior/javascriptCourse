const celio ={
    firstName : 'Celio',
    lastName : 'Júnior',
    birthYeah : 1979,
    job: 'notary public',
    friends: ['Baiano, Eric, Lincoln'],
    hasDriversLicense: true,

    getSummary : function() {
        console.log(`${this.firstName} has ${2021 - this.birthYeah} years old. He is a ${this.job} and ${(this.hasDriversLicense ? 'has' : 'has not')} driver's License.`); 
    }
};

celio.getSummary();

