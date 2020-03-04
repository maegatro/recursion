/* exported rockPaperScissors */

const rockPaperScissors = (rounds = 3) => {
  let result = [];
  let weapons = ["rock", "scissors", "paper"];
  function play (rounds, hand) {
    if (rounds < 1) {
      result.push(hand);
      return;
    }else {
      for (let weapon of weapons) {
        play(rounds - 1, hand.concat(weapon)) 
      }  
    }
  }  
    play(rounds, [])
    return result;
};
