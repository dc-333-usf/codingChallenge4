//Task 1 If statements
let purchaseAmount = 70; //declare purchase amount
if (purchaseAmount > 100) {
    finalAmount = purchaseAmount * 0.9;
} else {
    finalAmount = purchaseAmount;
}; //write if statement for a 10 percent discount if order amount is over 100
console.log(`Final amount: ${finalAmount}`); //log final purchase amount

//Task 2 For loop
let sales = [90, 115, 85, 230, 160]; //declare array
let total = 0; //create variable for total
for (let num of sales) {
    total += num;
}; //calculate total of array using for of loop
console.log(total); //log array total

//Task 3 While loop
let stock = 10; //declare stock
while (stock > 0, console.log(`Stock: ${stock}`), stock--); //use while loop to decrease stock by 1 and log each

//Task 4 Do...While loop
let responses = 0;
do {
    responses++;
    console.log(`Responses: ${responses}`);
} while (responses < 3); //create do while loop that increases the value of the responses variable by 1 each loop

//Task 5 For...In loop
let employee = {
    name: "Alice",
    position: "Manager",
    salary: 75000
}; //declare employee object
for (let property in employee) {
    console.log(`${property}: ${employee[property]}`);
}; //use For In loop to log the property, followed by the value of the property

//Task 6 For...Of loop
let products = ["Chair", "Sofa", "Table"]; //declare array
for (let inst of products) {
    console.log(inst);
}; //create For Of loop to log each instance

//Task 7 foEach() method
let orders = [101, 102, 103]; //declare array
orders.forEach(ord => console.log(ord)); //go through array and print

//Task 8 Function declaration
function calculateTax(amnt,rate) {
    tax = (amnt * rate);
    return tax;
}; //create function to calculate tax amount based on rate and total
console.log(`Tax on $100: $${calculateTax(100,0.1)}`); //log example

//Task 9 Function expressions
let applyDiscount = function(price,disper) {
    let disprc = price * disper;
    console.log(`Discounted Price: ${disprc}`);
};
