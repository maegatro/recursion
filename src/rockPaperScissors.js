/* exported rockPaperScissors */
//debugger;
const rockPaperScissors = (n=3) => {
  // Your code here
let options = ['rock','paper','scissors']
let hands = [];
let current = ''

  function play(n,result=[]){
    if (n === 0){
      //something that ends recursion
      hands.push(result)
      return;
    } else {
      for(let i = 0; i< options.length; i++){
        current = options[i];
        play(n - 1, result.concat(current));
      }
    }
  }
  play(n);
  return hands;
};

//console.log(rockPaperScissors(3));
//console.log(rockPaperScissors(4));