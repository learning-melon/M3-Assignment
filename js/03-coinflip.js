let randomNum = Math.round(Math.random())
let choice = prompt("Select Heads or Tails").toUpperCase()
let result = randomNum < 500 ? "HEADS" : "TAILS"
if(result == choice && choice == "HEADS") 
    alert("The flip was heads and you chose heads... you win!")
else{
    if(choice == "HEADS")
        alert("The flip was tails but you chose heads... you lose!")
    else if(choice == "TAILS") 
        alert("The flip was heads but you chose tails... you lose!")
    else
        alert("The flip was tails and you chose tails... you win!")
}
