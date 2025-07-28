// Ticket fare Calculator
//     - Children (age < 10): free
//     - Students get a 50% discount
//     - Senior citizens (age >= 60) gets a 15% Discount
//     - Otherwise Regular ticket fare 800 tk

var age=60;
// var isstudent=true;
var isstudent=false;

if(!isstudent){
    console.log("Fare is 50%")
}
else if(age<10){
    console.log("you can travel free")
}
else if(age>=60){
    console.log("your Have recived 15% Discount")
}
else(console.log("Your have to pay regular fare"))