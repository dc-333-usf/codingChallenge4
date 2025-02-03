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
