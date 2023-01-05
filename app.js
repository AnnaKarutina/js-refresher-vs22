console.log('JS Refreshing')

// let & const

let number = 5
console.log(number)

const numbers = [1, 2, 3]
console.log(numbers)
console.log(numbers[0])
console.log(numbers[1])
console.log(numbers[2])
console.log(numbers[3])
console.log(numbers.length)

numbers.forEach(function(number, index){
    console.log(`${number} - element indeksiga ${index}`)
})

numbers.forEach((number, index) => {
    console.log(`numbers[${index}] = ${number}`)
})

const person = {
    name: 'Kertu',
    age: 25
}

console.log(person)
console.log(person.name)
console.log(person.age)