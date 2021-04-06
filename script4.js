/* const dolphins = [44, 23, 71];
const koalas = [65, 54, 49];
let averageDolphins = 0;
let averageKoalas = 0;
let winner = '';
let score = 0;

averageScore = (score, animalQunatity) =>{
    return score/animalQunatity;
}


for (x = 0; x < dolphins.length; x++) {
    score += dolphins[x];
    quantity = dolphins.length;
    averageDolphins = averageScore(score, quantity);
}

score =0;
for (x = 0; x < koalas.length; x++) {    
    score += koalas[x];
    quantity = koalas.length;
    averageKoalas = averageScore(score, quantity);
}

checkWinner = (averageDolphins, averageKoalas) => {
    
    (averageDolphins > averageKoalas ? console.log("Doplhins Wins") : console.log("Koalas Wins"));
}

checkWinner(averageDolphins,averageKoalas);


console.log(`A media dos golfinhos foi de ${averageDolphins}. A media dos Kolas foi de ${averageKoalas}.`) 
 */

const dolphins = [85, 54, 41];
const koalas = [23, 34, 27];
let averageDolphins = 0;
let averageKoalas = 0;
let winner = '';
let score = 0;

averageScore = (score, animalQunatity) =>{
    return score/animalQunatity;
}


for (x = 0; x < dolphins.length; x++) {
    score += dolphins[x];
    quantity = dolphins.length;
    averageDolphins = averageScore(score, quantity);
}

score =0;
for (x = 0; x < koalas.length; x++) {    
    score += koalas[x];
    quantity = koalas.length;
    averageKoalas = averageScore(score, quantity);
}

checkWinner = (averageDolphins, averageKoalas) => {
    
    (averageDolphins > averageKoalas ? console.log("Doplhins Wins") : console.log("Koalas Wins"));
}

checkWinner(averageDolphins,averageKoalas);


console.log(`A media dos golfinhos foi de ${averageDolphins}. A media dos Kolas foi de ${averageKoalas}.`) 
