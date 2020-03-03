/* exported rockPaperScissors */

const rockPaperScissors = (rounds = 3) => {
  const potentialCombinations = [];
  const choices = ["rock", "paper", "scissors"];

  const game = (roundsLeft, choicesMade) => {
    if (roundsLeft === 0){
      potentialCombinations.push(choicesMade);
      return;
    } else {
      for (let i = 0; i < choices.length; i++){
        let choice = choices[i];
         game(roundsLeft - 1, choicesMade.concat(choice));
      }
    }
  };
  game(rounds, []);
  return potentialCombinations;
};

