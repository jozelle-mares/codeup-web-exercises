(function() {
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names = ['Rick', 'Morty', 'Summer', 'Beth'];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names.length);
    console.log('There are ' + names.length + ' Names in the array.');
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log('The first name is: ' + names[0]);
    console.log('The second name is: ' + names[1]);
    console.log('The third name is: ' + names[2]);
    console.log('The forth name is: ' + names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
for (var x = 0; x < names.length; x++){
    console.log('The name being called  ' + x + ' is: ' + names[x])
}
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
names.forEach(function(element, index,array){
    console.log('The name at index ' + index + ' is: ' + element);
})
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */


function one(arr) {
    return arr[0];

}

function two(arr){
    return arr[1];
}

function five(arr){
    return arr[3]
}

function three(arr){
    return arr[2]
}
console.log(one(names));
console.log(two(names));
console.log(five(names));
console.log(three(names))
})();