// const numbers = [1, 2, 3]
// console.log(numbers)
//
// numbers.push(4)
// console.log(numbers)

// const numbers = [1, 2, 3]
// console.log(numbers)
//
// const newNumbers = [...numbers]
// numbers.push(4)
//
// console.log(newNumbers)
// console.log(numbers)

// const newNumbers = [...numbers, 4]
// console.log(newNumbers)

// const person = {
//     name: 'Kertu'
// }
//
// const newPerson = {
//     ...person,
//     age: 25
// }
//
// console.log(person)
// console.log(newPerson)

const filter = (...args) => {
    return args.filter(el => el === 1)
}

console.log(filter(1, 2, 3, 1))