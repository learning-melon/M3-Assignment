let num = prompt("Enter a number between 1 and 100")
let grade

while(num < 1 || num > 100)
    num = prompt("Please make sure to enter a number between 1 and 100.\nEnter a number between 1 and 100")

switch(true){
    case num >= 60 && num < 70:
        grade = "a D"
        break
    case num >= 70 && num < 80:
        grade = "a C"
        break
    case num >= 80 && num < 90:
        grade = "a B"
        break
    case num >= 90 && num < 101:
        grade = "an A"
        break
    default: //less than 60
        grade = "an F"
        break
}

console.log("You received " + grade)
