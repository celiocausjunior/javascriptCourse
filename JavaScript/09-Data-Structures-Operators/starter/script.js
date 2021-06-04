/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/


// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// /* const [players1, players2] = game.players;
// const [gk, ...fieldPlayers] = players1;
// console.log(gk,fieldPlayers);
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);
// //const {team1, x:draw, team2} =  game.odds;
// const {odds: {team1, x:draw, team2}} = game;
// console.log(team1, draw, team2);



// const printGoals = function (...names){
//   let goals = names.length;
//   console.log(names, goals);
// }
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// console.log(printGoals(...game.scored));

// (game.odds.team1 < game.odds.team2) && console.log('Team1 is more likely to win');
// (game.odds.team1 > game.odds.team2) && console.log('Team2 is more likely to win'); 

//  */


// //Exercise 2
// for (const [goal, playerName] of game.scored.entries()) {
//   console.log(`Goal ${goal + 1}: ${playerName}`);
// }

// //

// let sum = 0;
// let average = 0;
// const oddEntries = Object.values(game.odds)

// for (const OddValue of oddEntries) {
//   sum += OddValue;
//   average = sum / oddEntries.length
// }
// console.log(`Odd Average: ${average}`);

// //

// /* const { odds: { team1, x: draw, team2 } } = game;
// console.log(`Odd of victory ${game.team1}: ${team1}. \nOdd of victory ${game.team2}: ${team2}\nOdd of draw: ${draw}`); */

// const ratioOdds = Object.entries(game.odds);
// console.log(ratioOdds);

// for (const [team, ratio] of ratioOdds){
//   const victory = team === 'x' ? 'Odd of draw' : 'Odd of ' + game[team];

//   console.log(`${victory}: ${ratio}`);

// }

// //

// const scorers = {
//   'Lewandowski': 1,
//   'Gnarby': 2,
//   'Lewandowski': 1,
//   'Hummels': 1
// }


// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
// */

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// console.log(gameEvents);
// const setGameEvents = new Set([...gameEvents.values()]);
// const events = [...setGameEvents];
// console.log(events);

// gameEvents.delete(64)
// console.log(gameEvents);

// console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

// gameEvents
//   .set(true, '[FIRST HALF]')
//   .set(false, '[SECOND HALF]')


// console.log(gameEvents);

// for (const [minutes, event] of gameEvents) {
//   if (typeof minutes == 'number')
//     console.log(`${gameEvents.get(minutes < 45)} ${minutes}: ${event}`)

// }



// const capitalizedName = function (name) {
//   const nome = name.split(' ');
//   const nomeNormalized = []
//   for (const itemNome of nome) {
//     nomeNormalized.push(itemNome[0].toUpperCase() + itemNome.slice(1))
//   }
//   console.log(nomeNormalized.join(' '));

// }

// capitalizedName('celio caus junior');

// Coding Challenge #4


// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   console.log(rows);

//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLocaleLowerCase().trim().split('_');
//     const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`
//     console.log(`${output.padEnd(20)}${'🙈'.repeat(i + 1)}`);
//   }
// });



//   console.log(ola);
// }))
// /* 
// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

// The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

/* THIS TEST DATA (pasted to textarea)

underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)

underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

*/

// HINT 1: Remember which character defines a new line in the textarea 😉
// HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
// HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
// HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

// Afterwards, test with your own test data!

// GOOD LUCK 😀 

// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = function (str){
  return str.slice(0,3).toUpperCase();
}

for (const flight of flights.split('+')){
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll(
    '_', ' '
    )} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(30);
  console.log(output);
}