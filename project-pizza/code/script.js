// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

let person = prompt ("Please enter your name")

alert (
  `Welcome ${person}`
)

// Step 2 - Food choice
// Your code goes here
let Food = prompt ("Please enter your choice of food. Enter a number 1.Pizza 2.Pasta 3.Salad")

//If the choice is 1, it is pizza
//If the choice is 2, it is Pasta
//If the choice is 3, it is Salad
if (Food ===1) {
 console.log ('Pizza')
}
else if (Food ===2) {
  console.log ('Pasta')
}
else if (Food ===3) {
  console.log ('Salad')
}
alert (
  `You chosen ${Food}`
)
const validateOrderName = (orderName) => {
  if (Food !== Pizza && Food !== 2 && Food !== 3) {
  alert("Select a number from the menu")
  orderName()
} else {
  return true
}
}


// Step 3 - Subtype choice
// Your code goes here
let subtype  = prompt ("What kind do you want?")

let confirmation = prompt ("Are you sure?")

// Step 4 - Age
// Your code goes here
let age = prompt ('Type your age in numbers')

alert (
  'You ordered ${Food} ${Subtype} 
)

let confirmation = prompt ("Place your order")

// Step 5 - Order confirmation
// Your code goes here
