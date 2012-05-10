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

alert("JavaScript works!");