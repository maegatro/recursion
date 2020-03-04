/* exported rockPaperScissors */

const rockPaperScissors = (rounds = 3) => {
  let result = [];
  let gameItems = ["rock", "paper", "scissors"];
  let game = function(rounds, gameResult = []){
    if (rounds < 1){
      result.push(gameResult);
      return;
    }
    //recursive case goes below the exit case
    //for SOME REASON I CANNOT FATHOM
    for (let i = 0; i < gameItems.length; i++){
      let gameItem = gameItems[i];
      game(rounds -1, gameResult.concat(gameItem));
    }
  };
  game(rounds);
  return result;
};
