'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const displayMovements = function (movements, sort = false) {

  containerMovements.innerHTML = '';

  const sortedMovements = sort ? movements.slice().sort((x, y) => x - y) : movements;

  sortedMovements.forEach(function (mov, i) {

    const type = (mov > 0 ? 'deposit' : 'withdrawal');

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}€</div>
  </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  })
};


const createUserName = function (accounts) {

  accounts.forEach(function (account) {
    account.username = account.owner.toLocaleLowerCase().split(' ').map((word) => word[0]).join('');
  });
};

createUserName(accounts);
console.log(accounts);

const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((x, y) => (x + y), 0);
  labelBalance.textContent = `${account.balance} €`;
};


const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((movement) => movement > 0)
    .reduce((x, y) => x + y, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = acc.movements
    .filter((movement) => movement < 0)
    .reduce((x, y) => x + y, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = acc.movements
    .filter((movement) => movement > 0)
    .map((deposit) => deposit * acc.interestRate / 100)
    .filter((interest) => interest > 1)
    .reduce((x, y) => x + y, 0)
  labelSumInterest.textContent = `${interest}`
}


const EurToUsd = 1.1;

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


// //Equality
// console.log(movements.includes(-130));


// //Condition
// console.log(movements.some((mov)=> mov > 0));
// console.log(movements.some((mov)=> mov > 5000));

//EVERY
// console.log(movements.every((movement)=> movement > 0));
// console.log(account4.movements.every((movement)=> movement > 0));

//Separate Callback

// const deposit = mov => mov>0;

// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// max value
const maxValue = movements.reduce((x, y) => {
  return (x > y) ? x : y;
}, movements[0]);

//Pipeline
// const totalDepositsUsd = movements.filter(mov => mov > 0).map(mov => mov * EurToUsd).reduce((x, y) => x + y, 0);
// console.log(totalDepositsUsd);

const updateUI = function (currentAccount) {
  //Display Movements
  displayMovements(currentAccount.movements);

  // Display Balance
  calcDisplayBalance(currentAccount);

  //Display Summary
  calcDisplaySummary(currentAccount);

}

//Event handler
let currentAccount;

btnLogin.addEventListener('click', function (event) {
  //Prevent form from submitting
  event.preventDefault();
  currentAccount = accounts.find((account) => account.username === inputLoginUsername.value);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and Welcome message
    labelWelcome.textContent = (`Welcome, ${currentAccount.owner.split(' ')[0]} `);
    containerApp.style.opacity = 100;

    // Clear Input Fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //Update UI
    updateUI(currentAccount)
    console.log('Login')
  } else {
    containerApp.style.opacity = 0;
    alert('Wrong');
  };
});


btnTransfer.addEventListener('click', ((e) => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts?.find((account) => account.username === inputTransferTo.value);

  inputTransferAmount.value = inputTransferTo.value = '';

  if (amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAccount.username !== currentAccount.username) {
    //Doing Transfer
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);
    updateUI(currentAccount);

  }
}))


btnClose.addEventListener('click', (e) => {
  e.preventDefault();

  if (currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)) {

    const index = accounts.findIndex((index) => index.username === currentAccount.username);
    console.log(index);

    //Delete Account
    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;

    // Clear inputs
    inputCloseUsername.value = inputClosePin.value = '';

  } else {
    console.log('Wrong username or password');
  }

});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some((movement) => movement >= 0.10 * amount)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
    inputLoanAmount.value = '';

  } else {
    console.log('Call the mananger');
  }
});

let sorted = false;
btnSort.addEventListener('click', (e) => {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});




// const account = accounts.find((acc) => acc.owner==='Jessica Davis');
// console.log(account);

// accounts.forEach((account)=>{
//   if (account.owner === 'Jessica Davis'){
//     return console.log(account);
//   } 
// })


// const deposits = movements.filter(movement => (movement > 0));
// console.log(deposits);

// const depositsFor = []
// for (let movement of movements) {
//   (movement > 0 ? depositsFor.push(movement) : null);
// }
// console.log(depositsFor);


// const withdrawal = movements.filter((movement) => movement < 0);

// console.log(withdrawal);

// const balance = movements.reduce((x, y) => x + y, 0);
// console.log(balance);

// let total = 0;
// for (let mov of movements){
//   total += mov;
// }
// console.log(total);

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// LECTURES
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);


/////////////////////////////////////////////////


// let arr = ['a', 'b', 'c', 'd', 'e'];


//SLICE
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice());
// console.log([...arr]);

// SPLICE // MUTATES THE ORIGINAL ARRAY

// arr.splice(-1);
// console.log(arr);
// console.log(arr.splice(1, 2));

// REVERSE  // MUTATES THE ORIGINAL ARRAY

// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];

// console.log(arr2.reverse());


//CONCAT

// let letters = arr.concat(arr2);
// console.log(letters);

// letters = [...arr, ...arr2];
// console.log(letters);


// // JOIN
// console.log(letters.join(' - '));



// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [index, movement] of movements.entries()) {
//   console.log(movement > 0 ? `Movement number: ${index + 1}. You've deposited ${Math.abs(movement)}` : `Movement number: ${index + 1}. You've withdrawn ${index, Math.abs(movement)}`);
// };

// movements.forEach(function(movement, index){
//   console.log(movement > 0 ? `Movement number: ${index + 1}. You've deposited ${Math.abs(movement)}` : `Movement number: ${index + 1}. You've withdrawn ${index, Math.abs(movement)}`);

// });


//MAP 
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function(value, key, map){
//   console.log(`Ticker: ${key}, Moeda: ${value}`);
// });

// //SET
// const currenciesUnique = new Set(['USD', 'BRL', 'EUR', 'EUR', 'GBP', 'GBP']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function(value, key, set){
//   console.log(key, value);
// });


///////////////////////////////////////
// Coding Challenge #1

/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const juliaDataOne = [3, 5, 2, 12, 7];
// const juliaDataTwo = [9, 16, 6, 8, 3];
// const kateDataOne = [4, 1, 15, 8, 3]
// const kateDataTwo = [10, 5, 6, 1, 4]

// const juliaNormalizeData = juliaDataOne.slice(1).concat((juliaDataTwo).slice(0, -2));
// const kateNormalizeData = [...kateDataOne, ...kateDataTwo]
// const totalData = [...juliaNormalizeData, ...kateDataOne, ...kateDataTwo];
// console.log(totalData);

// const checkDogs = function (dogsJulia, dogsKate) {
//   const checkDogAge = function (value, index) {
//     console.log(value >= 3 ? `Dog number ${index +1 } is an adult, and is ${value} years old` : `Dog number ${index + 1} is still a puppy 🐶`);
//   }
//   dogsJulia.forEach(function (value, index) {
//     checkDogAge(value, index);
//   });
//   dogsKate.forEach(function (value, index) {
//     checkDogAge(value, index);
//   });
// };

// checkDogs(juliaNormalizeData, kateNormalizeData);

// // map method 

// console.log(juliaDataOne.map((x)=> x*2));
// console.log(kateDataOne.map(function(x) {
//   return x**2
// }));

// // filter method
// console.log(juliaDataTwo.filter((x)=> x<10));
// console.log(juliaDataTwo.filter(function(x){
//   return x > 5;
// }));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);

// const EurToUsd = 1.1;

// const Eur = movements.map(function (movement) {
//   return (Math.round(movement * EurToUsd));
// });

// console.log(Eur);

// const EurArrow = movements.map(movement => (Math.round(movement * EurToUsd)));
// console.log(EurArrow);

// const arr = [];
// for (let item of movements) {
//   arr.push(Math.round(item * EurToUsd));
// };
// console.log(arr);




// const movementsDescription = movements.map((movement, index) => {
//   return (movement > 0 ? `Movement number: ${index + 1}. You've deposited ${Math.abs(movement)}`
//   :`Movement number: ${index + 1}. You've withdrawn ${index, Math.abs(movement)}`);
// });

// console.log(movementsDescription);


// Coding Challenge #2


// Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

// 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
// 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets

// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

// GOOD LUCK 😀

// const calcAverageHumanAge = (ages) =>
//   ages
//     .map((age) => age <= 2 ? age * 2 : 16 + (age * 4))
//     .filter((age) => age >= 18)
//     .reduce((x, y, i, arr) => x + y / arr.length, 0);



// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));



// const firstWithdrawal = movements.find((mov) => mov < 0);
// console.log(firstWithdrawal);


//Flat Method

// const arr = [0, 1, [2, 3, 4], [5, 6], 7, 8, 9, 10]
// const arr2 = [0, 1, [2, [3, 4]], [5, 6], 7, [[8, 9]], 10]

// console.log(arr.flat());
// console.log(arr2.flat(2));

// const accountMovements = accounts.map((account) => account.movements);
// console.log(accountMovements);
// const arrayMovements = accountMovements.flat();
// console.log(arrayMovements);

// const sumMovements = arrayMovements.reduce((x, y) => x + y, 0)
// console.log(sumMovements);

// //FlatMap Method

// const sumMovements2 = accounts.flatMap((account) => account.movements).reduce((x, y) => x + y, 0);
// console.log(sumMovements2);


// const names = ['Celio', 'Geraldo', 'Eliezer', 'Julia', 'Marcos', 'Mauricio', 'Eric', 'Jonas', 'Carlos', 'Gabriela', 'Gabrielle', 'Clayton', 'Gersino', 'Pyetra', 'Evandro', 'Jean', 'Wesley', 'Valdenir', 'Munir', 'Gersino', 'Rodrigo', 'Gilberto', 'Renan', 'Jacqueline', 'Angelica', 'Ester', 'Joao', 'Rafael'];


// //Sort mutates the array, but it works only in strings
// console.log(names.sort());

// //Numbers uses callback function
// movements.sort((x, y) => {
//   return (x > y ? 1 : -1);
// });
// console.log(movements);

// //Numbers uses callback function (simplified function)
// movements.sort((x, y) => y - x);

// console.log(movements);


// //create an Array
// const x = new Array(7);
// console.log(x);

// x.fill(2, 0, 7);
// console.log(x);


// //Array.from

// const y = Array.from({ length: 20 }, () => 1);
// console.log(y);


// //Dynamic Array
// const z = Array.from({ length: 150 }, (_, y) => y + 1);
// console.log(z);

// //Random Array
// const randomArray = Array.from({ length: 100 }, (_, __) => Math.floor(Math.random() * 101) + 1);
// console.log(randomArray);

// //Getting an element and add in array
// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(document.querySelectorAll('.movements__value'), (x) =>
//     Number(x.textContent.replace('€', ' ')));
//   console.log(movementsUI);
// })

// //Total deposits in Bank
// const bankDepositsSum = accounts.flatMap((acc) => acc.movements).filter((dep) => dep > 0).reduce((x, y) => x + y, 0);
// console.log(bankDepositsSum);


// const numDepositsOneThousand = accounts.flatMap((account) => account.movements).filter((dep) => dep >= 1000).length;
// console.log(numDepositsOneThousand);

// const numDepositsOneThousand2 = accounts.flatMap((account) => account.movements).reduce((dep, mov) => (mov >= 1000 ? ++dep : dep), 0);
// console.log(numDepositsOneThousand2);


// const { deposits, withdrawals } = accounts.flatMap((account) => account.movements).reduce((acc, cur) => {
//   // cur > 0 ? (acc.deposits += cur) : (acc.withdrawals += cur);
//   acc[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//   return acc;
// },
//   { deposits: 0, withdrawals: 0 });

// console.log(deposits, withdrawals);

// const convertTitleCase = function(title){
//   const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
//   const titleCase = title
//   .toLowerCase()
//   .split(' ')
//   .map((word)=> exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1))
//   .join(' ');
//   return titleCase;
// };

// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title and a good example'));


// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/


const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];


//1.
dogs.forEach((dog)=>{
  dog.recommendedPortion = (Math.round(dog.weight ** 0.75 * 28));
});
console.log(dogs);

//2.

const sarahsDog = dogs.filter((dog)=> dog.owners.includes('Sarah'));
const curFoodSarahDog = sarahsDog.map(((dog)=> dog.curFood));

console.log(curFoodSarahDog);


