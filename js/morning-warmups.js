// October 13th
(function() {

    function returnsSeven() {
        return 7;
    }

    console.log(returnsSeven());

    if (!false) {
        console.log("Am I seen?");
    } else {
        console.log("What about me?");
    }
// October 14th
    var hadBreakfast = Boolean(Math.round(Math.random()));

    var action = (hadBreakfast) ? "Lets go have breakfast together." : "I had tacos for breakfast.";

    console.log(hadBreakfast);
    console.log(action);

// October 15th
    function typeCheck(input) {
        if (typeof input === 'string') {
            ;
            return 'Haha, it\'s a string of a string';
        } else {
            return typeof input;
        }

    }

// October 19th
//Write a program that console.logs the numbers from 1 to 100.
// But for multiples of three console.log “Fizz” instead of the number
// and for the multiples of five console.log “Buzz”. For numbers which are
// multiples of both three and five console.log “FizzBuzz”.

    for (var x = 1; x <= 100; x++) {
        if (x % 3 === 0) {
            console.log("Fizz")
        } else {
            if (x % 5 === 0) {
                console.log("Buzz")
            } else {
                if (x % 3 === 0 && x & 5 === 0) {
                    console.log("FizzBuzz")
                } else {
                    console.log(x)
                }
            }

        }
    }
// October 20th

var foods = ['pizza','chicken','burger'];
    function one(foods){
        return foods[1];
    }
console.log(one(foods));


})();
