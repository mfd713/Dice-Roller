/*
Dev name: Madeline Friend
Date Started: 12/3/18
Last Updated: 12/4/18

Reddit Daily Programming Challenge #364: Easy Dice Roller
Will take user input in the form of the number of rolls and the type of die (ex: 3 rolls of d6 would be 3d6) 
and return the combined value of those rolls.
*/

//what to do when user clicks the submit button.
//Runs the necessary methods and displays the results
var rollList =[];
function myFunction(){
	var finalResult;
	var rawInput = document.getElementById("userInput").value;
	var total = roll(rawInput);
	if (typeof total == "string")
		finalResult = total;
	if (typeof total == "number")
		finalResult = "You rolled: "  + rollList.toString() + "</br>"
		+ "Total: " + total;
	else
		alert("Error. Please check your input again");
	document.getElementById("display").innerHTML= finalResult;
}


function roll(x){
	var numTimes, dType;
	var	totalSum = 0;
	//checks that input includes the d (lol)
	if(x.indexOf("d") == -1)
		return "Oops! There should be a \'d\' in the middle of your input.";
	numTimes = parseInt(x.slice(0, x.indexOf("d")), 10);
	//checks that input starts with a number
	if(isNaN(numTimes))
		return "Oops! Please make sure your input starts with a number.";
	dType = parseInt(x.slice(x.indexOf("d")+1), 10);
	//checks that input ends with a number
	if(isNaN(dType))
		return "Oops! Please make sure your input ends with a number.";
	//checks number of dice sides is valid
	if(dType <= 1)
		return "You can't have a " +dType+ "-sided die!";
	for (var i = 0; i < numTimes; i++){
		rollList[i]= Math.floor(Math.random() * dType) + 1;
		totalSum += rollList[i];
	}
	return totalSum;
}