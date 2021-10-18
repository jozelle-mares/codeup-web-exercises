'use strict';
// 2
function showMultiplicationTable(num) {
    for (var i = 1; i <= 10; i++) {
        console.log(num + " x " + " = " + (num*i));

    }
}
showMultiplicationTable(7)

// 3


for (var x=1; x<= 10; x++){
    var randomNum = Math.floor(Math.random() * (200 - 20 + 1) + 20)
    if (randomNum % 2 === 0) {
        console.log(randomNum+ " is even");
    } else {
        console.log(randomNum + " is Odd");
    }
}

// 4

var totalNumberOfRows = 9;
var output ="";
for (var i = 1; i <= totalNumberOfRows; i++) {
    for (var j = 1; j <= i; j++) {
        output += j + " ";
    }
    console.log(output);
    output = "";
}

// 5
for (i = 100; i > 0; i-=5){
    console.log(i);
}





