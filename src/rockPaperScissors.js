/* exported rockPaperScissors */

const rockPaperScissors = (rounds) => {
  let out = [];
  const weapons = ["rock", "scissors", "paper"];
  const play = (rounds, result = []) => {
    if (rounds < 1) {
      out.push(result);
      return out;
    }
    weapons.map((weapon) => play(rounds - 1, result.concat(weapon)));
  };
  if (rounds == undefined) {
    play(3);
  } else {
    play(rounds);
  }
  return out;
};
