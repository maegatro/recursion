/* exported rockPaperScissors */

const rockPaperScissors = (rounds = 3) => {
  const hands = ["rock", "paper", "scissors"]
  let output = []

  function game(rounds, handsPlayed = []){
  if (rounds < 1) {
    output.push(handsPlayed)
    return output
  } else
    for (let i = 0; i < hands.length; i++) {
      let nowHand = hands[i]
      game(rounds - 1, handsPlayed.concat(nowHand))
    }
  }
  game(rounds)
  return output
};
