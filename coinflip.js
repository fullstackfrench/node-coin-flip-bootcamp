function coinFlip() {
    let possibilities = [{decision: 'Heads'}, {decision: 'Tails'}]
    let result = Math.floor(Math.random() * possibilities.length)
    return possibilities[result]
}


module.exports = { coinFlip };