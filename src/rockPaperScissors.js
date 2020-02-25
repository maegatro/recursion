/* exported rockPaperScissors */

const rockPaperScissors = (rounds = 3) => {
  let result = [];
  let choices = ["rock", "paper", "scissors"];

  function play(roundsLeft, played) {

    if (roundsLeft === 0) {
      result.push(played);
      return;
    } 

    choices.forEach(weapon => {
      play(roundsLeft-1, played.concat(weapon));
    })

  };

  play(rounds, []);
  return result;
};