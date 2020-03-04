/* exported rockPaperScissors */
const rockPaperScissors = (rounds = 3) => {
  let out = [];
  const weapons = ['rock', 'scissors', 'paper'];
  const play = (rounds, result = []) => {
    if (rounds < 1) {
      out.push(result);
      return;
    }
    for (let i = 0; i < weapons.length; i++) {
      const weapon = weapons[i];
      play(rounds - 1, result.concat(weapon));
    }
  };
  play(rounds);
  return out;
};

rockPaperScissors();