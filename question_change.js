let quiz = new Quiz();
const changeQuestion = function(){
  let nextQuestion = quiz.getNextQuestion();
  let questionBlock = document.getElementById('questionsBlock');

console.log(nextQuestion.question);

  questionBlock.innerHTML = nextQuestion.question;
}
