// level 0 declare variable
var numberA = 10;
let numberB = 20;
const numberC = 0.30;

// level 1 math operator
console.log(numberA + numberB)
console.log(numberA - numberB)
console.log(numberA * numberB)
console.log(numberA / numberB)
console.log(numberA % numberB)

// level 2 string, boolean, negative number
let string = 'string'
let booleanTrue = true
let numberNegative = -1

console.log(string + booleanTrue) // return 'stringtrue'
console.log(string + numberNegative) // return 'string-1'

// level 3 combine, push, pop
let arrayNeg = [-1, -2, -3, -4]
let arrayPos = [1, 2, 3, 4]
let arrayZer = [0]

let newArrayJoin = arrayNeg.join(' ')
console.log(newArrayJoin) // return [-1 -2 -3 -4]

arrayNeg.push(arrayZer)
console.log(arrayNeg) // return [-1, -2, -3, -4, [0]]

arrayNeg.pop()
console.log(arrayNeg) // return [-1, -2, -3, -4]

arrayPos.forEach(
    x => {
        console.log(x) // return every array member
    }    
)

// level 4 declare string var
const sentenceA = "Hello world!";
const sentenceB = "Good bye!";

console.log(sentenceA); // return Hello world
console.log(sentenceB); // return Good bye

// level 5 Conc & Interpolate
const sentenceC = sentenceA + " " + sentenceB;
const sentenceD = `${sentenceA} ${sentenceB}`;

console.log(sentenceC) // return Hello world Good bye
console.log(sentenceD) // return Hello world Good bye

// level 6 Upper & lowercase
const sentenceE = sentenceA.toUpperCase()
console.log(sentenceE) // return HELLO WORLD

const sentenceF = sentenceB.toLowerCase()
console.log(sentenceF) // return good bye

// level 7 Title Case
let helloBoss = 'hello BIg Boss'
console.log(helloBoss) // return hello BIg Boss

function titleCase (word) {
    let lowerWord = word.toLowerCase () // lowercase all the words
    let lowerSplit = lowerWord.split(' ') // split every lowercased word into array member
    console.log(lowerSplit) // return ['hello', 'big', 'boss']

    for (var i = 0; i < lowerSplit.length; i++) {
        firstChar = lowerSplit[i].charAt(0) // take first character
        upperChar = firstChar.toUpperCase() // uppercase first character
        lastChar = lowerSplit[i].slice(1) // take the all char start from second char
        lowerSplit[i] = upperChar + lastChar// add first char + next char
    }

    return lowerSplit.join(' ')
}

console.log(
    titleCase(helloBoss)
)

// level 8 if else and else if
var one = 1
var two = 2
var three = 3

function ifNumber (num1, num2, num3) {
    if(num1 > num2) {
        console.log(num1+ ' is bigger than ' +num2)
    } else
    if (num3 > num1) {
        console.log(num3+ ' is bigger than ' +num1)
    } else {
        console.log('nothing to show')
    } 
} 

// level 10 ternary
ifNumber(one, two, three)

function ifSmaller (num1, num2, num3) {
    num1 === num2 ? console.log(num1+ ' is equal ' +num2) : console.log(num1+ ' is not equal as ' +num2)
}

ifSmaller (one, two, three)

// level 11 & 12 multiple conditions & arguments
var candyPrice = 10000
var clothPrice = 200000
var money = 300000

function buySomething (price1, price2, money) {
    if (price1 <= money && money > clothPrice ) {
        console.log('buy candy and cloth')
    } else 
    if (price1 <= money){
        console.log('don\'t buy anything')
    } else {
        console.log('just buy the candy')
    }
}

buySomething(candyPrice, clothPrice, money)

// level 14 15 16, operator in function

let four = 4
let five = 5

function add(num1, num2, num3, num4, num5) {console.log(num1 + num2 + num3 + num4 + num5)}
function substract(num1, num2, num3, num4, num5) {console.log(num1 - num2 - num3 - num4 - num5)}
function multiply(num1, num2, num3, num4, num5) {console.log(num1 * num2 * num3 * num4 * num5)}
function divide(num1, num2, num3, num4, num5) {console.log(num1 / num2 / num3 / num4 / num5)}
function modulo(num1, num2, num3, num4, num5) {console.log(num1 % num2 % num3 % num4 % num5)}

add(one, two, three, four, five)
substract(one, two, three, four, five)
multiply(one, two, three, four, five)
divide(one, two, three, four, five)
modulo(one, two, three, four, five)

// level 17 function

function calculateSquareArea(num1) { console.log(num1 * num1) }
function calculateSquarePerimeter(num1) { console.log(4 * num1) }
function calculateCircleArea(num1) { console.log(3.14 * (num1 * num1)) }
function calculateCircleCircumference(num1) { console.log(2 * (3.14 * num1))  }
function calculateCubeArea(num1) { console.log(6*(num1 * num1)) }
function calculateCubeVolume(num1) { console.log(num1 * 3)  }
function calculateTubeVolume(num1) { console.log(3.14 * ((num1/2)*(num1/2))) }

calculateSquareArea(three) 
calculateSquarePerimeter(three) 
calculateCircleArea(three) 
calculateCircleCircumference(three) 
calculateCubeArea(three) 
calculateCubeVolume(three) 
calculateTubeVolume(three) 

let date = new Date()
// const second = date.getSeconds()
// const minute = date.getMinutes()
// const hour = date.getHours()
// const day = date.getDay()
// const month = date.getMonth()
// const year = date.getFullYear()

function week (date) {
    switch (date) {
        case 0 :
            return 'Sunday'
            break;
        case 1 :
            return 'Monday'
            break;
        case 2 :
            return 'Tuesday'
            break;
        case 3 :
            return 'Wednesday'
            break;
        case 4 :
            return 'Thursday'
            break;
        case 5 :
            return 'Friday'
            break;
        case 6 :
            return 'Saturday'
            break;
    }
}

function month (date) {
    switch (date) {
        case 0 :
            return 'January'
            break;
        case 1 :
            return 'February'
            break;
        case 2 :
            return 'March'
            break;
        case 3 :
            return 'April'
            break;
        case 4 :
            return 'May'
            break;
        case 5 :
            return 'June'
            break;
        case 6 :
            return 'July'
            break;
        case 7 :
            return 'August'
            break;
        case 8 :
            return 'September'
            break;
        case 9 :
            return 'October'
            break;
        case 10 :
            return 'November'
            break;
        case 11 :
            return 'Desember'
            break;
    }
}

function timeCalculator (date) {
    console.log(`second : ${date.getSeconds()}`)
    console.log(`minute : ${date.getMinutes()}`)
    console.log(`hour : ${date.getHours()}`)
    console.log(`today : ${week(date.getDay())}`)
    console.log(`month : ${month(date.getMonth())}`)
    console.log(`year : ${date.getFullYear()}`)
}

timeCalculator(date)

// level 24 Adress Book

name = prompt('input your name')
people = ['patrick', 'sandy', 'squidward']

if (name != null) {
    people.push(name)
    people.forEach(
        element => {
            console.log(element)
        }
    )
}

search = prompt('search name')

result = people.filter(
    person => person === search
)
result.forEach(
    element => {
        console.log(element)
    }
)

