/* exported rockPaperScissors */

const rockPaperScissors = (n) => {
  // Your code here
  let rounds = (n === undefined) ? 3 : n;
  const results = [];
  
  const weapons = ['rock', 'paper', 'scissors'];
  
  function recurse(played, roundsLeft) {
    if(roundsLeft === 0) {
      results.push(played);
      return;
    }
    for(let i = 0; i < weapons.length; i++) {
      const current = weapons[i];
      recurse(played.concat(current), roundsLeft-1);
    }
  };
  recurse([], rounds);
  return results;
};

// ('', 2)
//   i=0
//     (r, 1)  
//       i=0 
//         (rr, 0) return
//       i=1 
//         (rp, 0) return
//       i=2 
//         (rs, 0) return

//   i=1   
//     (p, 1)
//      i=0 
//         (pr, 0) return
