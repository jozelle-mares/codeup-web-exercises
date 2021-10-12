console.log("Hello from external Javascript.")

alert = ("Welcome to my website!");

var favoriteColor = prompt("Whats your favorite color?");
alert ("Great,my favorite color is " +  favoriteColor  + " too!");

alert ("Movies will cost $3 per day they are rented.");


var littleMermaid = parseFloat(prompt("How many days have you rented the Little Mermaid?"));

var brotherBear = parseFloat(prompt("How many days have you rented Brother Bear?"));

var herCules = parseFloat(prompt("How many days have you rented Hercules?"));

var moviePrice = (littleMermaid + brotherBear + herCules) * 3;

alert ("You have paid $" + moviePrice + " for your movies.");

var gooGle = 400
var amaZon = 380
var faceBook = 350

var hoursGoogle = parseFloat(prompt("How many hours did you work this week at Google?"));

var googPay = parseFloat(prompt( "How much do you get paid hourly at Google?"));

var hoursAmazon = parseFloat(prompt("How many hours did you work this week at Amazon?"));

var amaPay = parseFloat(prompt( "How much do you get paid hourly at Amazon?"));

var hoursFacebook = parseFloat(prompt("How many hours did you work this week at Facebook?"));

var facePay = parseFloat(prompt( "How much do you get paid hourly at Facebook?"));

var totalPay = (googPay * hoursGoogle) + (amaPay * hoursAmazon) + (facePay * hoursFacebook);

alert("Way to go, you made $" + totalPay + " this week!")

var classRoom = confirm("Is there room in the Intro to KPOP class?");

var yourSchedule = confirm("Do you have classes on Thursday's at 1pm?");

alert("Student is able to register for class:" + (classRoom && yourSchedule));

var primeMem = ("Do you have a prime membership?");

var itemAmount =

