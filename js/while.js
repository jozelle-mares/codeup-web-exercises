"use strict";
let count = 2;
while (count < 16) {
    console.log(count);
    count +=( 1 * count);
}
//DAVID's answer

//(function(){
//    var multipliedNum = 2;

 //       while(multipliedNum<= 65536){
 //           console.log(multipliedNum);
 //           multipliedNum *= 2;
//}











function iceCream() {
    var allCones = Math.floor(Math.random() * 50) + 50;
    console.log("Cones to sell " + allCones);

    do {
        var bought = Math.floor(Math.random() * 5) + 5;
        console.log("Purchased: " + bought);
        allCones -= bought
    } else
    {
        console.log("Cannot sell " + bought + " I only have" + allCones);
    }
    while (allCones > 0) ;
    console.log("All cones were sold!")
}

// DAVID"S answer
// var allCones = Math.floor(Math.random() * 50) +50;
//conosle.log("Opening up shop! I've got " + allCones + " comes to sell!");
//do {
    // This expression will generate a random number between 1 and 5
 //   var conesToBuy = Math.floor(Math.random() * 5) +1;
//    allCones -= comesToBuy;
//    console.log("Customer wants to buy " + comesToBuy + " cones. I have " + allCones + " cones left in stock.");
//} else {
//console.log("Sorry pal, we can't sell you " + comesToBuy + " cones. We only have " +  allCOnes + " cones left in stock")
//} while (allCones !== )0
//xonsole.log("Closing up shop!");