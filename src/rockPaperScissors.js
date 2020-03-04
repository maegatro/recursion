/* exported rockPaperScissors */

const rockPaperScissors = () => {
  if (rounds === undefined) {
    rounds = 3;
  }
  let weapons = ["rock", "paper", "scissors"];
  let outcome = [];

  const play = (rounds, result = []) => {
    // exit case
    if (rounds < 1) {
      outcome.push(result);
      return;
    }
    // recursive case
    for (let i = 0; i < weapons.length; i++) {
      const weapon = weapons[i];
      play(rounds - 1, result.concat(weapon));
    }
  };
  play(rounds);
  return outcome;
};
