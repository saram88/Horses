(function(){

	function buildQuestions(){
	  
		questionIndex = 0;

		const quizContainer = document.getElementById('quiz');
		const answerContainers = quizContainer.querySelectorAll('.answers');
	  	for (let index = 0; index < myQuestions.length; index++) {
		
			var question = myQuestions[index];
			
			// Reset colors
			answerContainers[index].style.color = 'black';

			// Get question element
			var questionCont = document.getElementById('question' + (index + 1));
			questionCont.innerText = (index + 1)+ ". " + question.question;
			
			var image = document.getElementById('image'); 
		 	const answers = [];
  
			for(let letter in question.answers){
	
				// Add radio button
				answers.push(
				`<label>
					<input type="radio" name="question${index}" value="${letter}">
					${letter} :
					${question.answers[letter]}
				</label>`
				);
		  	}
			
			// Get answer element
			var answerCont = document.getElementById('answers' + (index + 1));
			answerCont.innerHTML = answers.join('');
		}
		document.getElementById('restart').style.display = 'none';
		document.getElementById('scores').style.display = 'none';
	}
	
	function nextQuestion() {
		questionIndex++;
		// Display current question
		showQuestion();
	}


	function restartQuiz(){
	
	  // Restart the quiz
	  if (confirm('Do you want to restart the quiz?')) {
	 	  
	  	buildQuestions();
	  	showQuestion();
	  }
	}
	
	function showQuestion() {
		
		for (let index = 0; index < myQuestions.length; index++) {
			
			// Show only current question
			var container = document.getElementById('container' + (index + 1));
			if (index == questionIndex) {
				container.style.display = 'table';
			}
			else
			{
				container.style.display = 'none';
			}
		}

		// Show/hide buttons
		if (questionIndex < myQuestions.length - 1)
		{
			document.getElementById('next').style.display = 'inline-block';
			document.getElementById('submit').style.display = 'none';
		}
		else
		{
			document.getElementById('next').style.display = 'none';
			document.getElementById('submit').style.display = 'inline-block';
		}

		if (questionIndex > 0) {
			document.getElementById('restart').style.display = 'inline-block';
		}
	}


	function displayResult(){
  
	  // get answers
	  const quizContainer = document.getElementById('quiz');
	  const answerContainers = quizContainer.querySelectorAll('.answers');
  
	  let correctAnswer = 0;
	  let wrongAnswer = 0;
  	  
		for (let index = 0; index < myQuestions.length; index++) {
  
		var container = document.getElementById('container' + (index + 1));
		container.style.display = 'table';

		// Get selected answer
		const answerContainer = answerContainers[index];
		const selector = `input[name=question${index}]:checked`;
		const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
		// if answer is correct
		if(userAnswer === myQuestions[index].correctAnswer){
		  	correctAnswer++;
		  	answerContainers[index].style.color = 'green';
		}
		// if answer is wrong or blank
		else {
			wrongAnswer++;
		  	answerContainers[index].style.color = 'red';
		}
	  };
  
	  // Hide submit-button
	  document.getElementById('submit').style.display = 'none';
	  
	  // show correct answers 
	  document.getElementById('scores').style.display = 'block';
	  document.getElementById("score").innerText = correctAnswer;
	  document.getElementById("incorrect").innerText = wrongAnswer;

	}
  
 
	// Variables
	var questionIndex = 0;	

	const myQuestions = [
	  {
		question: "How many legs does a horse have?",
		answers: {
		  a: "Two",
		  b: "Four",
		  c: "Six"
		},
		correctAnswer: "b"
	  },
	  {
		question: "What is the name of Zorro's horse?",
		answers: {
		  a: "Tornado",
		  b: "Marengo",
		  c: "Jolly Jumper"
		},
		correctAnswer: "a"
	  },
	  {
		question: "How many known horse breeds are there?",
		answers: {
		  a: "200",
		  b: "300",
		  c: "500",
		  d: "700"
		},
		correctAnswer: "b"
	  },
	  {
		question: "Can the horse see all colors?",
		answers: {
		  a: "Yes",
		  b: "No"
		},
		correctAnswer: "b"
	  }
	];
  
	// Start quiz
	buildQuestions();

	// Show first question
	showQuestion();

	// Event listeners
	var restartButton = document.getElementById('restart');
	restartButton.addEventListener('click', restartQuiz);

	var nextButton = document.getElementById('next');
	nextButton.addEventListener('click', nextQuestion);

	var submitButton = document.getElementById('submit');
	submitButton.addEventListener('click', displayResult);

  })();