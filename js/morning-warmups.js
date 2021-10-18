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
    if (typeof input === 'string'){ ;
        return 'Haha, it\'s a string of a string';
    } else {
        return typeof input;
    }

}


})();
