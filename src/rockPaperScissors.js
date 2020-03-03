/* exported rockPaperScissors */

const rockPaperScissors = (rounds) => {
  
  if(rounds == undefined) {
    rounds = 3;
  }

  let weapons = ["rock", "paper", "scissors"];
  let output = [];
  
  function play (rounds, result = []) {
    if (rounds < 1) {
      output.push(result);
      return;
    }

    for (let i = 0; i < weapons.length; i++) {
      let weapon = weapons[i];
      play(rounds - 1, result.concat(weapon));
    }
  }

  play(rounds);
  return output;
};
