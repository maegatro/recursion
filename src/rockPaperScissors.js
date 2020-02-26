/* exported rockPaperScissors */

const rockPaperScissors = (roundLeft=3) => {
  // Your code here
let result = [];
let weapons = ['rock','paper','scissors'];
const recurse = (roundLeft, results=[])=>{
  if(roundLeft===0){
    result.push(results)
    return;
  }else{
    for(let i=0;i<weapons.length;i++){
      const current = weapons[i]
      recurse(roundLeft-1,results.concat(current))
    }
  }
}
  recurse(roundLeft)
  return result
};

