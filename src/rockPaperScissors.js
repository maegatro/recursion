/* exported rockPaperScissors */

const rockPaperScissors = (rounds = 3) => {
  // Declare variable for final output and weapons
  let allPatterns = [];
  let weapons = ["rock", "paper", "scissors"];

  const playGame = (rounds, result = []) => {
  // Write Base Case here
    // When number of rounds is less than 0

    if(rounds < 1){
      allPatterns.push(result);
      return;
    }

  // Write Recusive Case here
    // 4 round for all three patterns: rock, paper and scissors
    for(let i = 0; i< weapons.length; i++){
      const weapon = weapons[i];
      playGame(rounds - 1, result.concat(weapon));
    }
  }

  playGame(rounds);

  console.log(allPatterns);

  // allPatterns.forEach(el => {
  //   tmp = el.filter(weapon => weapon !== undefined)
  // });

  // console.log(tmp);
  return allPatterns;
};
