// // /***

// if you get more then 80 then inside your friend score. 
//     If your friend get more than 80. then go for a lunch. 
//     if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
//     if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
//     if your friend get less than 40, block your friend
// if you get less than 80 go to home and sleep and act sad

// Note: 
// use nested if-else-if-else
// /

const mymark=86;
const pkmark=87;

// Lets go to the condition
if(pkmark>=80){
    if(mymark>=80)
        console.log("We are going fo lunch")
}
else if(pkmark<80 && pkmark>=60){
    if (mymark>=80) console.log("Better luck next time")
}
else if (pkmark<60 && pkmark>=40){
    if(mymark>=80)
        console.log("Iam going to his home to give cosole")
}
else if(pkmark<40){
    if (mymark>=40)
        console.log("Comee to me and take suggetion for next exam")
}
else{console.log("we both have to improve")}