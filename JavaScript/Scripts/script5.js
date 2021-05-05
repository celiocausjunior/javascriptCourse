const bills = [125, 555, 44];
const tips = [];
const total = [];



function calcTip(bills) {

    for (i = 0; i < 3; i++) {
        (bills[i] >= 50 && bills[i] <= 300 ? (tips[i] = bills[i] * 0.15) : (tips[i] = bills[i] * 0.20));
        total[i] = bills[i] + tips[i];
        console.log("Bill # " + [i+1] + " Value: " + bills[i] + ". Tip = " + tips[i] + ". Total: " + total[i]);
    }
}

calcTip(bills);
