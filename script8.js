const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];
const billsLenght = bills.length;
let sum = 0;
let average = 0;

function calcTip(bills) {

    for (i = 0; i < billsLenght; i++) {
        (bills[i] >= 50 && bills[i] <= 300 ? (tips[i] = bills[i] * 0.15) : (tips[i] = bills[i] * 0.20));
        total[i] = bills[i] + tips[i];
        console.log("Bill # " + [i + 1] + " Value: " + bills[i] + ". Tip = " + tips[i] + ". Total: " + total[i]);
    }
    calcAverage(total);
}

function calcAverage(arr) {
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(`Average: ${(sum / arr.length)}`);
}

calcTip(bills);

// BUG