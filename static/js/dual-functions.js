// functions
console.log('loaded functions');

// get random numbers in a range
function randRangeInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
function randRangeFloat(min, max) {
	return Math.random() * (max - min) + min;
}
function posNeg() {
	return Math.round(Math.random()) * 2 - 1;
}

function xOnCircle(aCurX, aCurY, aRadius, aAngle) {
	x = aCurX + aRadius * Math.cos(aAngle);
	return x;
}
function yOnCircle(aCurX, aCurY, aRadius, aAngle) {
	y = aCurY + aRadius * Math.sin(aAngle);
	return y;
}


function randRGBa(aType='color',aOpacity=1) {
	if (aType == 'grey') {
		tRand = randRangeInt(0, 255);
		return 'rgba('+tRand+','+tRand+','+tRand+','+aOpacity+')';
	} else {
		return 'rgba('+(randRangeInt(0, 255))+','+(randRangeInt(0, 255))+','+(randRangeInt(0, 255))+','+aOpacity+')';
	}
}

function somePercentage(pct) {
	if (Math.random() * 100 <= pct) {
		return true;
	} else {
		return false;
	}
}

function chooseFromArray(nums) {
	return nums[Math.floor(Math.random() * nums.length)];
}

function getTodaysColor() {
	return todaysColors[Math.floor(Math.random() * todaysColors.length)];
}
