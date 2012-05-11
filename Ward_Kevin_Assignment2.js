// Author: Kevin Ward
// Date: May 7rd, 2012
// Name: Deliverable 2
// Theme: Procrastination and Schoolwork.


// Variables

var longTime = true
var reallyHungry = true
var cheeseSlices = "cheese"
var hoursLeft = 2;

// Say function for space saving code power!
var say = function(message) { console.log(message); };

// My Happy Functions

// Argument Function
var playTime = function (playingTime) {
	longTime = true;
	if (playingTime === longTime) {
		say("How long should I play for?");
		say("I'd say about 5 hours today.");
	}
	else {
		say("I shouldn't play too long.");
		say("Maybe only for like 2 hours.");
	}
	return;
};

// Double Argument Function


// Double String Function


// While-Loop Function


// For-Loop Function


// My Procrastination Adventure!

say("It\'s 10am, time to get on to my schoolwork for the week.");

say("I don\'t really feel up to it, so I make a decision to play my game console instead.");

var gameTime = playTime(true);

say("Crap, it\'s really three o\'clock, I should get started on school.");

say("But, it can wait a couple more hours, so I decide to get something to eat.");

say("Oh but what to eat?");

say("I have pasta or hamburgers, hmmm.");

if (reallyHungry === true) {
	say("Let\'s go with the hamburgers!");
} else {
	say("Pasta sounds really yummy now!");
};

say("So I start grilling up some nice, juicy hamburgers in the kitchen.");

say("Now what should I put on the buns?");

say("There\'s mayo, mustard, relish, BBQ sauce, ketchup, cheese, etc.");

if (cheeseSlices === "cheese") {
	say("I think I\'ll just put on some mayo, mustard, BBQ sauce, and cheese slices.");
} else {
	say("I\'ll just put on ketchup, mustard, relish, and cheese slices, instead.");
};

say("I eat up all the yumminess, and finally decide I\'m ready for the week\'s schoolwork.");

say("But now I only have a couple hours left in the day until it\'s due.");

say("What should I do?");

say("Cram as much as I can in the hours I have left, or procrastinate until tomorrow?");

if (hoursLeft >= 3) {
	say("I can cram it all in tonight!");
} else {
	say("Ooh Noes!!! I have to wait until tomorrow to finish.");
};

say("Number 2 sounds really good to me.");

say("The End!");


        
        
        
        
        
        
