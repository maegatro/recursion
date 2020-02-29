/* exported rockPaperScissors */

const rockPaperScissors = (rounds = 3) => {
  const output = []
  const hands = ['rock', 'paper', 'scissors']
  const play = (rounds, result = []) => {
    console.log(rounds)
    if (rounds === 0) {
      console.log('ending round')
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
