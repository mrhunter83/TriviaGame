$(document).ready(function(){
var questions = ["What does 'wubaluba dub dub' mean?", "Who does Morty have a crush on?", "What was Rick's favorite exhibit in Anatomy Park?", "What does Jerry attempt to use as a gun at a wedding?", 
"In the pilot, why did Rick want to blow up Earth?", "What is Scary Terry's child named?", "How long did Rick leave Beth?", 
"Morty's role as sidekick is necessary because his 'Morty brainwaves' cancel out Rick's what?", "What is Rick's last name?", "What season is the show currently in?"];

var answers = ["I am in great pain", "Pirates of the Pancreas"];
var countdown;
var i = 0;

	$("#startbtn").one("click", function() {
		countdown = setTimeout(function() {}, 10);
		$("#questionbox").html(questions[0]);
		$("#answer1").append(answers[0]);
	})
})