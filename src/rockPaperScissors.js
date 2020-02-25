/* exported rockPaperScissors */

const rockPaperScissors = (n = 3) => {
  const weapons = ["rock", "paper", "scissors"];
  const numRounds = n;
  const possibleThrows = [];

  //recurisve function
  let play = (numRounds, currentRound) => {
    if (numRounds === 0) {
      possibleThrows.push(currentRound);
      return;
    }

    weapons.forEach((weapon) => {
      play(numRounds - 1, currentRound.concat(weapon));
    });
  };

  play(numRounds, []);
  return possibleThrows;
};
