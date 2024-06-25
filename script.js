// "let" er ett nøkkelord for å lage en ny variabel
// "greeting" er et vavlgfritt navn
// "=" lagre verdien på høyre side i navnet på venstre
// 'God Morgen Kodeloftet' er verdien som blir lagret
let greeting = 'God Morgen Kodeloftet'

// Skriv innholdet i "greeting" variablen til konsollen
console.log(greeting)

let numberA = 10
let numberB = 32

console.log("Tall A:")
console.log(numberA)

console.log("Tall B:")
console.log(numberB)

let numberC = numberA / numberB + numberA - numberB

console.log("Tall C:")
console.log(numberC)

// Grunnleggende Data Typer

// Stringer (tekst)
let stringA = "Hello"
let stringB = 'World'
let stringC = `!!!`

let stringD = " Lets 'Go'!"
console.log(stringD)

let newLine = "Hello\n\n\nWorld"
console.log(newLine)
let multiLine = `
Testing
testing
testing
`
console.log(multiLine)

// Number
let a = 10

// Boolean
let boolTrue = true
let boolFalse = false

let isPasswordValid = false

let x = 10
let y = 20
let isEqual = x === y
console.log("is the numbers equal")
console.log(isEqual)

let nameA = "Lars"
let nameB = "Tanja"
let isNamesEqual = nameA === nameB
console.log("is the names equal")
console.log(isNamesEqual)

// Udefinert
let thisIsUndefined
console.log("This is undefined")
console.log(thisIsUndefined)

// Null
let doesNotYetHaveValue = null
console.log("The following does not yet have a value:")
console.log(doesNotYetHaveValue)


// Komplekse/Sammensatte Data Typer

// Array (Lists)
let arrayA = [
    "Per",
    "Pål",
    "Espens",
    "Martha",
]

console.log("This is a array (list)")
console.log(arrayA)

console.log("Accessing a single entry")
console.log(arrayA[1])

// Object

let personA = {
    name: "Espen",
    proffesion: "Adventurer",
    age: 18,
    eyeColor: "blue"
}
console.log("This is a collection of variables (Object)")
console.log(personA)

console.log("Accessing a single entry in an object")
console.log(personA["proffesion"])
console.log(personA.eyeColor)

// Inbuilt objects
console.log(console)
console.error("This is a error")
