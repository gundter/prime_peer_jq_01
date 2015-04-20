//Utility function
//A simple random number generator
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}
var i;
var array = [];

var Person = {
	age: randomNumber(1, 100),
	weight: randomNumber(1, 100),
	sex: function (){
		
	}
}