/* const dolphins = [96, 108, 89];
const koalas = [88, 91, 110];
let averageDolphins = 0;
let averageKoalas = 0;
let winner = '';
let score = 0;

for (x = 0; x < dolphins.length; x++) {
    score += dolphins[x];
    averageDolphins = score/dolphins.length
}

score =0;
for (x = 0; x < koalas.length; x++) {    
    score += koalas[x];
    averageKoalas = score/koalas.length
}

if (averageDolphins>averageKoalas){
    winner = 'Os golfinhos venceram'
} else if (averageDolphins<averageKoalas){
    winner = 'Os koalas venceram'
} else{
    winner = 'Nao houve vencedor.'
}



console.log(`A media dos golfinhos foi de ${averageDolphins}. A media dos Kolas foi de ${averageKoalas}. Resultado: ${winner}`) */
/* 
const dolphins = [97, 112, 101];
const koalas = [109, 95, 123];
let averageDolphins = 0;
let averageKoalas = 0;
let winner = '';
let score = 0;

for (x = 0; x < dolphins.length; x++) {
    score += dolphins[x];
    averageDolphins = score/dolphins.length
}

score =0;
for (x = 0; x < koalas.length; x++) {    
    score += koalas[x];
    averageKoalas = score/koalas.length
}

if (averageDolphins>averageKoalas && averageDolphins >=100){
    winner = 'Os golfinhos venceram'
} else if (averageDolphins<averageKoalas && averageKoalas >=100){
    winner = 'Os koalas venceram'
} else if (averageDolphins === averageKoalas && averageDolphins >=100 && averageKoalas >= 100){
    winner = 'Houve empate.'
} else{
    winner = 'Nao houve vencedor.'
}



console.log(`A media dos golfinhos foi de ${averageDolphins}. A media dos Kolas foi de ${averageKoalas}. Resultado: ${winner}`) */

const dolphins = [97, 112, 101];
const koalas = [109, 95, 106];
let averageDolphins = 0;
let averageKoalas = 0;
let winner = '';
let score = 0;

for (x = 0; x < dolphins.length; x++) {
    score += dolphins[x];
    averageDolphins = score/dolphins.length
}

score =0;
for (x = 0; x < koalas.length; x++) {    
    score += koalas[x];
    averageKoalas = score/koalas.length
}

if (averageDolphins>averageKoalas && averageDolphins >=100){
    winner = 'Os golfinhos venceram'
} else if (averageDolphins<averageKoalas && averageKoalas >=100){
    winner = 'Os koalas venceram'
} else if (averageDolphins === averageKoalas && averageDolphins >=100 && averageKoalas >= 100){
    winner = 'Houve empate.'
} else{
    winner = 'Nao houve vencedor.'
}



console.log(`A media dos golfinhos foi de ${averageDolphins}. A media dos Kolas foi de ${averageKoalas}. Resultado: ${winner}`)
