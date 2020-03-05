/* exported rockPaperScissors */

const rockPaperScissors = (rounds = 3) => {
  const result = [];
  const weapons = ["rock", "paper", "scissors"];

  function recurse(rounds, combinations = []) {
    if (rounds === 0) {
      result.push(combinations);
      return;
    }
    for (let i = 0; i < weapons.length; i++) {
      recurse(rounds - 1, combinations.concat(weapons[i]));
    }
    return result;
  }

  return recurse(rounds);
};
