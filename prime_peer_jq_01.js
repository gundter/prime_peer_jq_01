//Utility function
//A simple random number generator
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}
var i;

function Person() {
	this.age = randomNumber(1, 100);
	this.weight = randomNumber(1, 100);
	this.sex = function (){
		num = randomNumber(1, 2);
		return this.sexType = num == 1 ? "Male" : "Female";
	};
}

$(document).ready(function (){
	$("#makePeople").on("click", function() {
		var person1 = new Person();
		person1.sex();
			$("#personTable").prepend("<tr><td>Age: " + person1.age + "</td><td>Weight: " + person1.weight + "</td><td>Sex: " + person1.sexType + "</td></tr><br>");
	});
});