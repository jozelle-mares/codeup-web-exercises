"use strict";
let count = 2;
while (count < 16) {
    console.log(count);
    count +=( 1 * count);
}
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