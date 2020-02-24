/* exported rockPaperScissors */

const rockPaperScissors = (n=3) => {
  const results = [];
  const weapons = ['rock', 'paper', 'scissors'];
  
  function recurse(roundsLeft, played) {
    if(roundsLeft === 0) {
      results.push(played);
      return;
    }
    for(let i = 0; i < weapons.length; i++) {
      const current = weapons[i];
      recurse(roundsLeft-1, played.concat(current));
    }
  };
  recurse(n, []);
  return results;
};

