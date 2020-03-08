/* exported rockPaperScissors */

const rockPaperScissors = (rounds = 3) => {
  const combinations = [];
  const weapons = ["rock", "paper", "scissors"];

  const game = (roundsLeft, choicesMade) => {
    if (roundsLeft === 0) {
      combinations.push(choicesMade);
      return;
    } else {
      for (let i = 0; i < weapons.length; i++) {
        let weapon = weapons[i];
        game(roundsLeft - 1, choicesMade.concat(weapon));
      }
    }
  };
  game(rounds, []);
  return combinations;
};
