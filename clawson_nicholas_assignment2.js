//Author: Nick Clawson
//Date 5/9/12
//Assignment: Deliverable 2

//Variable Declaration and Assignment
var jediMaster = 'Rai Chell',
	sithPrisoners = 5,
	sithTargets = ['Teenal','Jax','Trick','Fanad','N\'ix']
;

//Procedure
var loginTerminal = function (user){
	if (user === 'Rai Chell'){
		console.log('Welcome, Master Rai Chell');
	}
	else {
		console.log('You are not an authorized user!');
	}
}

//Boolean Function
var checkTargets = function (prisoners, list){
	if (!(prisoners < list.length) || list.length === 0) {
		console.log('There are currently no targets available.');
		return false;
	}
	else{
		console.log('There are still targets to capture! Good hunting!');
		return true;
	}
}

//Number Function
var captureSith = function (sithCaptured){
	var allSith = sithTargets.length;
	while (sithCaptured < allSith){
		sithLeft = allSith - sithCaptured;
		if (sithLeft > 1){
			console.log('There are ' + sithLeft + ' Sith to capture!');
		}
		else {
			console.log('There is only ' + sithLeft + ' Sith to capture!');
		}
		console.log('Sith has been detected nearby! Attack!');
		console.log('You caught Darth ' + sithTargets[sithCaptured] + '!');
		sithCaptured++;
	}
	console.log('All Sith have been captured!');
	return sithCaptured;
}

//String Function
var identifyPrisoner = function (hunter, prisoner){
	var caughtBy = 'Master ' + hunter;
	if (prisoner === undefined){
		console.log('There is no prisoner here');
	}
	else{
		console.log('Darth ' + prisoner + ' was captured by ' + caughtBy + '.');
	}
	return caughtBy;
}

//Array Function
var assignCell = function (cellsNeeded, targets){
	var prisonCell = [];
	for (var cellNumber = 0; cellNumber < cellsNeeded; cellNumber++){
		prisonCell[cellNumber] = cellNumber + 1;
		console.log('Darth ' + targets[cellNumber] +' is in cell ' + prisonCell[cellNumber] + '!');
	}
	return prisonCell;

}

//Return Value Outputs
loginTerminal(jediMaster);
console.log('Procedures return no output.')
console.log(' ');
console.log('Boolean function returns: ' + checkTargets(sithPrisoners, sithTargets) + '.');
console.log(' ');
console.log('Number function returns: ' + captureSith(sithPrisoners) + '.');
console.log(' ');
console.log('String function returns: ' + identifyPrisoner(jediMaster, sithTargets[sithPrisoners]) + '.');
console.log(' ');
console.log('Array function returns: ' + assignCell(sithTargets.length, sithTargets) + '.');

alert("JavaScript works!");