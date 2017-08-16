$(document).ready(function(){

	triviaGame();

	function triviaGame() {

	// BELOW IS THE QUESTION ARRAY

	var questions = [
	"What does 'wubaluba dub dub' mean?", 
	"Who does Morty have a crush on?", 
	"What was Rick's favorite exhibit in Anatomy Park?", 
	"What does Jerry attempt to use as a gun at a wedding?", 
	"In the pilot, why did Rick want to blow up Earth?", 
	"What is Scary Terry's child named?", 
	"How long did Rick leave Beth?", 
	"Morty's role as sidekick is necessary because his 'Morty brainwaves' cancel out Rick's what?", 
	"What is Rick's last name?", 
	"What season is the show currently in?"
	];

	// BELOW IS THE ANSWER OBJECT.  CONTAINS ARRAYS OF ANSWERS TO EACH TRIVIA QUESTION

	var answers = {
		1: ["I am in great pain", "I don't like you", "I will kill you", "None of the above"],
		2: ["Amy", "Sarah", "Jessica", "Vanessa"],
		3: ["The Bone Train","Pirates of the Pancreas", "Spleen Mountain", "Bladder Falls"],
		4: ["T-shirt cannon", "Confetti cannon", "Super Soaker", "Potato Gun"],
		5: ["He was bored", "He was angry", "He wanted a clean start", "He wanted to accomplish something"],
		6: ["Scary Brad", "Scary Larry", "Scary Jerry", "Scary Brandon"],
		7: ["5 yeaers", "10 years", "20 years", "30 years"],
		8: ["Genius waves", "Intelligence waves", "Knowledge waves", "Smart waves"],
		9: ["Sanchez", "Douglas", "Samson", "Watson"],
		10: ["Season 1", "Season 4", "Season 2", "Season 3"]
	};

	var rightAnswers = ["I am in great pain", "Jessica", "Pirates of the Pancreas", "Confetti cannon", "He wanted a clean start", "Scary Brandon", "20 years", "Genius waves", "Sanchez", "Season 3"];
	// var rightSelections = ["selection1", "selection3", "selection2", "selection2", "selection3", "selection4", "selection3", "selection1", "selection1", "selection4"];

	// BELOW ARE MY COUNTDOWN INTERVAL, COUNTER, AND OBJECT/ARRAY ELEMENT VARIABLES

	var countingdown;
	var answerInterval;
	var counter = 20;
	var i = 1;
	var j = 0;
	selections = [];
	correctanswers = 0;
	incorrectanswers = 0;

	// DEFINE THE START BUTTON ON-CLICK FUNCTION

	
	$("#startbtn").one("click", function() {
		countdown();
	});

	// SET THE COUNTDOWN INTERVAL

	function countdown() {
		if (j === 10) {
			$("#GameOver").append("Game Over");
			$("#correct").append("You answered " + correctanswers + " correctly");
			$("#incorrect").append("You answered " + incorrectanswers + " incorrectly");
			$(".choice1").off();
			$(".choice2").off();
			$(".choice3").off();
			$(".choice4").off();
			reset = setInterval(resetGame, 5000);
			stopcountdown();
			return;
		}
		countingdown = setInterval(decrement, 1000);
	}

	// DECREMENT THE COUNTER

	function decrement() {
		if (counter === 20 && i <= 10) {
			populateQuestions();
		};
		$("#timer").html("Time Remaining: " + counter + " secs");
		counter--;
		if (counter === 0 && i <= 10) {
			stopcountdown();
			counter = 20;
			$("#answerbox").text("Time's Up! The Correct answer is " + rightAnswers[j] + ".");
			answerInterval = setInterval(clearAnswer, 2000);
		};
	}

	// CLEAR THE ANSWER THAT APPEARS WHEN COUNTER REACHES ZERO

	function clearAnswer() {
		$("#answerbox").empty();
		clearInterval(answerInterval);
		i++;
		j++;
		counter = 20;
		countdown();
	}

	function resetGame() {
		clearInterval(reset);
		$("#questionbox").empty();
		$("#GameOver").empty();
		$("#correct").empty();
		$("#incorrect").empty();
		$("#answer1").empty();
		$("#answer2").empty();
		$("#answer3").empty();
		$("#answer4").empty();
		triviaGame();
	}

	// STOP THE COUNTDOWN WHEN TIMER RUNS OUT

	function stopcountdown() {
		clearInterval(countingdown);
	}

	// POPULATE THE QUESTIONS AND ANSWERS

	function populateQuestions() {
		$("#questionbox").html(questions[j]);
		$("#answer1").text(answers[i][0]);
		$("#answer2").text(answers[i][1]);
		$("#answer3").text(answers[i][2]);
		$("#answer4").text(answers[i][3]);
	}

	// GET AND STORE THE ANSWERS TO THE TRIVIA QUESTIONS

	$(".choice1").on('click', function() {
		stopcountdown();
		selections.push($("h2[id=answer1]").text());
		console.log(selections);
		if (selections[j] === rightAnswers[j]) {
			$("#answerbox").text("That's Correct!");
			correctanswers++;
			answerInterval = setInterval(clearAnswer, 2000);
		}
		else if (selections[j] !== rightAnswers[j]) {
			$("#answerbox").text("That's Incorrect!");
			incorrectanswers++;
			answerInterval = setInterval(clearAnswer, 2000);
		}
	})
	$(".choice2").on('click', function() {
		stopcountdown();
		selections.push($("h2[id=answer2]").text());
		console.log(selections);
		if (selections[j] === rightAnswers[j]) {
			$("#answerbox").text("That's Correct!");
			correctanswers++;
			answerInterval = setInterval(clearAnswer, 2000);
		}
		else if (selections[j] !== rightAnswers[j]) {
			$("#answerbox").text("That's Incorrect!");
			incorrectanswers++;
			answerInterval = setInterval(clearAnswer, 2000);
		}
	})
	$(".choice3").on('click', function() {
		stopcountdown();
		selections.push($("h2[id=answer3]").text());
		console.log(selections);
		if (selections[j] === rightAnswers[j]) {
			$("#answerbox").text("That's Correct!");
			correctanswers++;
			answerInterval = setInterval(clearAnswer, 2000);
		}
		else if (selections[j] !== rightAnswers[j]) {
			$("#answerbox").text("That's Incorrect!");
			incorrectanswers++;
			answerInterval = setInterval(clearAnswer, 2000);
		}
	})
	$(".choice4").on('click', function() {
		stopcountdown();
		selections.push($("h2[id=answer4]").text());
		console.log(selections);
		if (selections[j] === rightAnswers[j]) {
			$("#answerbox").text("That's Correct!");
			correctanswers++;
			answerInterval = setInterval(clearAnswer, 2000);
		}
		else if (selections[j] !== rightAnswers[j]) {
			$("#answerbox").text("That's Incorrect!");
			incorrectanswers++;
			answerInterval = setInterval(clearAnswer, 2000);
		}
	})
}
})