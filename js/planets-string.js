(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
var planetsArray = ['Mercury','Venus','Earth','Mars','Jupiter','Saturn','Uranus','Neptune'];
console.log(planetsArray);
    // console.log(planetsArray);
// I should have used planetsString.split("|")
    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
var solarSystem = planetsArray.join("<br>");
console.log(solarSystem);

//bonus david explanation
//    var unorderedListOfPlanets = "<ul><li>" + planetsArray.join("</li><li") + "</li></ul>";
//console.log(unorderedListOfPlanets);
//document.write(unorderedListOfPlanets);

//var listOfPlanets;

//planetsArray.unshift("<ul>");
//planetsArray.push("</ul>");
//listOfPlanets = planetsArray.join(" <li> ");
//document.write(listOfPlanets);






})();