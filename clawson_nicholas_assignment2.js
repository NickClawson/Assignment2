//Author: Nick Clawson
//Date 5/9/12
//Assignment: Deliverable 2

//Variable Declaration and Assignment
var jediMaster = 'Rai Chell',
	sithPrisoners = 1,
	sithTargets = ['Teenal','Jax','Trick','Fanad','N\'ix']
;

//Procedure
var loginTerminal = function (user){
	if (user === 'Rai Chell'){
		console.log('Welcome, Master Rai Chell');
	}
	else {
	console.log("You are not an authorized user!");
	}
}

//Boolean Function
var checkTargets = function (prisoners, list){
	if (!(prisoners < list.length) || list.length === 0) {
		console.log("There are currently no targets available.");
		return false;
	}
	else{
	console.log("There are still targets to capture! Good hunting!");
	return true;
	}
}

//Number Function
var countSithFree = function (amountCaptured){
	var allSith = sithTargets.length;
	while (amountCaptured < allSith){
		sithLeft = allSith - amountCaptured;
		if (sithLeft > 1){
			console.log("There are " + sithLeft + " Sith to capture!");
		}
		else {
			console.log("There is only " + sithLeft + " Sith to capture!");
		}
		console.log("You caught one!");
		amountCaptured++;
	}
	console.log("All Sith captured!");
	return amountCaptured;
}

//String Function
var identifyPrisoner = function (user, i){
	var prisonerName = sithTargets[i];
	console.log(user + " caught Darth " + prisonerName + "!");
	return prisonerName;
}

alert("JavaScript works!");