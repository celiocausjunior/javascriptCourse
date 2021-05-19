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


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/* const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;
console.log(gk,fieldPlayers);
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
//const {team1, x:draw, team2} =  game.odds;
const {odds: {team1, x:draw, team2}} = game;
console.log(team1, draw, team2);



const printGoals = function (...names){
  let goals = names.length;
  console.log(names, goals);
}
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
console.log(printGoals(...game.scored));

(game.odds.team1 < game.odds.team2) && console.log('Team1 is more likely to win');
(game.odds.team1 > game.odds.team2) && console.log('Team2 is more likely to win'); 

 */


//Exercise 2
for (const [goal, playerName] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${playerName}`);
}

//

let sum = 0;
let average = 0;
const oddEntries = Object.values(game.odds)

for (const OddValue of oddEntries) {
  sum += OddValue;
  average = sum / oddEntries.length
}
console.log(`Odd Average: ${average}`);

//

/* const { odds: { team1, x: draw, team2 } } = game;
console.log(`Odd of victory ${game.team1}: ${team1}. \nOdd of victory ${game.team2}: ${team2}\nOdd of draw: ${draw}`); */

const ratioOdds = Object.entries(game.odds);
console.log(ratioOdds);

for (const [team, ratio] of ratioOdds){
  const victory = team === 'x' ? 'Odd of draw' : 'Odd of ' + game[team];

  console.log(`${victory}: ${ratio}`);

}

//

const scorers = {
  'Lewandowski': 1,
  'Gnarby': 2,
  'Lewandowski': 1,
  'Hummels': 1
}
