"use strict";
var answer = prompt("Pick an odd number between 1 and 50")
if(answer === "27") {
    alert("Nope not that one")}
    for (var num = 1; num <= 50; num++) {
        if (num % 2 === 0) {
            continue;
        }
        console.log(num);
    }
// david's way
//(function)() {
//     var userNum;

// while (true) {
//         userNum = parseInt(prompt("Give me an odd number between 1 and 50!"));
//          if(userNum >= 1 && userNum % 2 !== 0){
//             break;
//        } for (var b = 1; b <= 50; b++){
//           if(b % 2 === 0) {
//                continue;
//            }
//          if (b === userNum){
//                console.log("we don't talk about " + usserNum + " around these parts");
//                continue;
//            }
//            console.log("heres an odd number : " + b)
