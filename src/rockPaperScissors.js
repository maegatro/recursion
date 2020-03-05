/* exported rockPaperScissors */

const rockPaperScissors = (rounds = 3) => {
  // Your code here
  const weapons = ["rock", "paper", "scissors"];
  const final = [];

  const play = (rounds, result = []) =>{
    if (rounds === 0){
      final.push(result);
      return;
    } 
    for (let i = 0; i < 3; i++){
      let weapon = weapons[i];
      play(rounds - 1, result.concat(weapon));
    }
    // console.log(result);
  };
  play(rounds);
  // console.log(final);
  return final;
};

