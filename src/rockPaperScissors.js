/* exported rockPaperScissors */

const rockPaperScissors = (rounds = 3) => {
  const output = []
  const hands = ['rock', 'paper', 'scissors']
  const play = (rounds, result = []) => {
    
    if (rounds === 0) {
    
      output.push(result)
      return
    }
    for (const el of hands) {
      play(rounds - 1, result.concat(el))
    }
  }
  play(rounds)
  return output
}
