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
