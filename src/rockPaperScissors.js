/* exported rockPaperScissors */

const rockPaperScissors = (round = 3) => {
  const weapons = ["rock", "paper","scissors"];
  let out = [];

  const play = (round, result = []) => {
    if (round < 1){
      out.push(result);
      return;
    }else {
      for (let i = 0; i < weapons.length; i++){
        const weapon = weapons[i];
        play((round - 1), result.concat(weapon));
      }
    }
  }
  play(round);
  return out;
};