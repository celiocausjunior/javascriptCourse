const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

function printForeCast(arr, arrLenght) {
    for (let i = 0; i < arrLenght; i++) {
        console.log(`${arr[i]} ' ºC in ' ${[i + 1] } 'days'`);
    }
}

printForeCast(data1, data1.length);
printForeCast(data2, data2.length);
