(function(){

	function buildQuestions(){
	  
	  	for (let index = 0; index < myQuestions.length; index++) {
		
			var question = myQuestions[index];
			// Get question element
			var questionCont = document.getElementById('question' + (index + 1));
			questionCont.innerText = question.question;

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
	}
  
	function displayResult(){
  
	  // get answers
	  const quizContainer = document.getElementById('quiz');
	  const answerContainers = quizContainer.querySelectorAll('.answers');
  
	  let correctAnswer = 0;
	  let wrongAnswer = 0;
  	  
		for (let index = 0; index < myQuestions.length; index++) {
  
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
		else{
			wrongAnswer++;
		  	answerContainers[index].style.color = 'red';
		}
	  };
  
	  // show correct answers 
	  document.getElementById("score").innerText = correctAnswer;
	  document.getElementById("incorrect").innerText = wrongAnswer;
	}
  
 
	// Variables
	
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
  
	// Event listeners
	const submitButton = document.getElementById('submit');
	submitButton.addEventListener('click', displayResult);

  })();