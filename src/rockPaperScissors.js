/* exported rockPaperScissors */

const rockPaperScissors = (n = 3) => {
  // Your code here
  let rounds = n;
  let weapons = ["rock", "scissors", "paper"];
  let result = [];

  let recurse = (rounds, played) => {
    if(rounds === 0){
      result.push(played);
      return;
    } else {
      for(let i = 0; i < weapons.length; i++){
        let current = weapons[i];
        recurse(rounds -1, played.concat(current))
      }
    }
  };

  recurse(rounds, []);

  return result;
};
