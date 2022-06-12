// function expression
// function anonymous

total = 0
// Parâmetro (parameters)
const sum = function(number1, number2) {
    let total = number1 + number2
    return total
}

// sum(2, 2) // Arguments - argumento
// sum(2, 4)
// sum(2, 6)

let numberOne = 34
let numberTwo = 25
sum(numberOne, numberTwo)

console.log(`o número 1 é ${numberOne}`)
console.log(`o número 2 é ${numberTwo}`)
console.log(`a soma é ${sum(numberOne, numberTwo)}`)
console.log(total)
