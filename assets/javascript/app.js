$(document).ready(function() {

	var questions = ["Queston 1", "Queston 2", "Queston 3", "Queston 4", "Queston 5",
						"Queston 6", "Queston 7", "Queston 8", "Queston 9", "Queston 10"]
	var question = {
		q1: ["Who is NOT a member of the Order of the Phoenix?", "Cornelius Fudge","Mad-Eye Moody", "Professory Snape", "Remus Lupin"],
		q2: ["A wizard who cannot do magic is known as a:", "Bleaker", "Squib", "Duddle", "Wizont"],
		q3: ["How many Weasley siblings are there?", 5, 10, 7, 6],
		q4: ["What did Dumbledore leave for Hermione in his will?", "A bezoar", "The Tales of Beedle the Bard", "An enchanted purse", "A lighter"],
		q5: ["Hagrid is half... ?", "Troll", "Giant","Ogre", "Squib"],
		q6: ["What is the Hogwarts motto?", "It does not do to dwell on dreams and forget to live.", "The last enemy to be destroyed is death.", "Don't tickle a sleeping dragon.", "For where your treasure is, there will your heart be also."],
		q7: ["What is the number of Harry's vault at Gringotts?", 394, 489, 687, 777],
		q8: ["When is the birthday of Harry Potter?", "October 16th", "June 4th", "May 4th", "July 31st"],
		q9: ["Who is the Master of Death?", "Lord Voldermort", "Draco Malfoy", "Harry Potter", "Albus Dumbledore"],
		q10: ["What organization did Hermione start in her 4th year?", "Soceity for the Promotion of Elfish Welfare", "Wizards Against the Dark Arts", "Witches for Equal Rights", "Dumbledore's Army"]
	}
	//console.log(question.q1);
	var clockRunning = false;
	var questionIndex = 0;
	var score = 0;
	var unanswered = 0;
	var losses = 0;
	var number;
	var questionsArray = [question.q1[0], question.q2[0], question.q3[0], question.q4[0], question.q5[0], 
			question.q6[0], question.q7[0], question.q8[0], question.q9[0], question.q10[0]]
			//console.log(questionsArray);
	var answerArray = [question.q1, question.q2, question.q3, question.q4, question.q5, 
			question.q6, question.q7, question.q8, question.q9, question.q10]

	var correctAnswers = [question.q1[1], question.q2[2], question.q3[3], question.q4[2], question.q5[2], 
			question.q6[3], question.q7[3], question.q8[4], question.q9[3], question.q10[1]]
	var answers;
	var button;
	var url = ["assets/images/source.gif", "assets/images/602043_v2.gif", "assets/images/tumblr_ld1sxmq0241qa3aiko1_500.gif", "assets/images/beedle the bard.gif", 
				"assets/images/tumblr_nzcww53IXy1tq4of6o1_500.gif", "assets/images/tumblr_myxyl0JKkN1s94thyo1_500.gif", "assets/images/Gringotts_cart_02.gif", "assets/images/tumblr_nqo112H4rJ1sfmnojo1_500.gif",
				"assets/images/ABy3q7I.gif", "assets/images/hermione_166815182.gif", "assets/images/final.gif"]
	var picture = $("<img>");

	function run() {
        intervalId = setInterval(decrement, 1000);
        console.log("run");
   	}

	function decrement(){
		number--;
		$("#time").html("<h3> Time Remaing: " + number + "<h3>");
		if (number === 0) {
			stop ();
			$(".results").show();
			$(".main2").hide();
			$(".results").html("<h3>Out of Time!</h3><h3>The correct answer was: " + correctAnswers[questionIndex] + "</h3>");
			$(".results").append(picture.attr("src", url[questionIndex]).attr("height", 150).attr("width", "auto"));
			setTimeout(newQuestion, 2000);
			setTimeout(run, 2000);
			questionIndex++;
			unanswered++;
			console.log(questionIndex);
		}
	}

	function stop() {
		clearInterval(intervalId);
	}

	function newQuestion() {
		$("#time").show();
		$(".main2").show();
		$(".final").hide();
		$(".results").hide();
		number = 16;
        if (questionIndex <= (questionsArray.length - 1)) {
          	$("#question").html(questions[questionIndex] + ": " + questionsArray[questionIndex]);
        	$(".answers").empty();

          for (var i = 0; i < answerArray[questionIndex].slice(1).length; i++) {

          	answers = $("<h4>");
          	answers.data("name", answerArray[questionIndex].slice(1)[i])
          	answers.attr("answers");
          	answers.html(answerArray[questionIndex].slice(1)[i]);
          	$(".answers").append(answers);
          }
        }

        else {
        	stop();
        	$(".final").show();
        	$("#time").hide();
        	$(".main2").hide();
		$(".results").hide();
          $(".final").html("<h1>Game Over!</h1>").css("margin-top", "-20px");
         $(".final").html("<h1>Final Score</h1><h3>Correct Answers: " + score + "<br>Incorrect Answers: " + losses + "<br>Unanswered: " + unanswered + "</h3>");
         $(".final").append(picture.attr("src", url[10]));
         setTimeout(remove, 5000);
         setTimeout(startOver, 5000);
        }
      //  setTimeout(correctAnswer, 1000 * 5);
     correctAnswer();
      }

      function correctAnswer () {
      	 $("h4").click(function () {
      		if ($(this).data("name") === correctAnswers[questionIndex]) {
      			score++;	
      			$(".results").show();
      			$(".main2").hide();
      			$(".results").html("<h3>Correct!</h3>");
      			$(".results").append(picture.attr("src", url[questionIndex]).attr("height", 150).attr("width", "auto"));
      			console.log(score);
      			stop();
      			setTimeout(newQuestion, 5000);
      			setTimeout(run, 5000);
      		}

      		else {
      			$(".results").show();
      			$(".main2").hide();
      			losses++;
      			$(".results").html("<h3>Nope!</h3><h3>The correct answer was: " + correctAnswers[questionIndex] + "</h3>");
      			$(".results").append(picture.attr("src", url[questionIndex]).attr("height", 150).attr("width", "auto"));
      			stop();
      			setTimeout(newQuestion, 5000);
      			setTimeout(run, 5000);
      		}	
      		questionIndex++;
      		console.log(questionIndex);
      	}); 
      	}

     	function startOver () {
      		button = $("<button>");
      		button.addClass("btn");
      		button.html("Try Again?");
      		$(".final").append(button);
      		questionIndex = 0;
		 	score = 0;
			unanswered = 0;
			losses = 0;
      		$(".btn").on("click", function() {
      			newQuestion();
      		});
      	}

      	function remove () {
      		picture.remove();
      	}

	$(".main").hide();

	$(".start").on("click", function() {
		$(this).hide();
		$(".main").show();
		newQuestion();
		run();
});	
});