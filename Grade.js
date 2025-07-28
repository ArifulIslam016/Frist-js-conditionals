

// Grade Calculator

// Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

//     A: 90-100
//     B: 80-89
//     C: 70-79
//     D: 60-69
//     // F: 0-59



const avgMark = 86;

// lets find the grade
if (avgMark >= 90) {
  console.log("You Got A Grade");
} else if (avgMark >= 80) {
  console.log("You Got B Grade");
} else if (avgMark >= 70) {
  console.log("You got C Grade");
} else if (avgMark >= 60) {
  Console.log("You got D Grade");
}
// else if(avgMark<59){console.log("Better luck Next time")} if you dont give extra condition
else {
  console.log("Better luck Next time");
}
