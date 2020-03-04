/* exported rockPaperScissors */

const rockPaperScissors = (count=3) => {
 var combos =[];
 const hands=["rock", "scissors", "paper"];

var game = function(count, combo =[]){
   if (count < 1){
     combos.push(combo);
     return
   }
   else{
   for( var i= 0; i < hands.length; i++){
     var hand = hands[i];
     game(count-1,combo.concat(hand))
   }
  }
  
}
game(count);
return combos;
};
