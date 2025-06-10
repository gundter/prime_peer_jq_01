import $ from 'jquery';

//Utility function
//A simple random number generator
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}
var i;
var femaleNames = [ "Cici", "Estelle", "Hazel", "Jodie", "Jules", "Immy", "Doris", "Fion", "Gabriella", "Ester" ];
var maleNames = [ "Niko", "Rufus", "Rex", "Herman", "Iggy", "Jett", "Link", "Zeke", "Zuriel", "Tex" ];

function Person() {
	this.age = randomNumber(1, 100);
	this.weight = randomNumber(1, 100);
	this.sex = function() {
		num = randomNumber(1, 2);
		return this.sexType = num == 1 ? "Male" : "Female";
	};
	this.name = function() {
		if (this.sexType == "Male") {
			var nameNum = randomNumber(0, 9);
			return maleNames[nameNum];
		} else {
			var nameNum = randomNumber(0, 9);
			return femaleNames[nameNum];
		}
	}
}

$(document).ready(function (){
	$("#makePeople").on("click", function() {
		var person1 = new Person();
		person1.sex();
			$("#personTable").prepend("<tr><td>Name: " + person1.name() +"</td><td>Age: " + person1.age + "</td><td>Weight: " + person1.weight + "</td><td>Sex: " + person1.sexType + "</td></tr><br>");
	});
});