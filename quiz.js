let Quiz = function(){
  this.questions = this.addDefaultQuestions();
  this.questionsAttempted = 0;
  this.correctAnswers = 0;
  this.currentQuestion = 0;
}

Quiz.prototype.addDefaultQuestions = function(){
  let question1 = new Question('what is capital of India','NewDelhi',['Newdelhi','Mumbai','Bengaluru','None']);
  let question2 = new Question('2+3=','5',['1','6','5','4']);
  return this.questions = [question1,question2];
}

Quiz.prototype.getScore = function(){
  return `${this.correctAnswers}/${this.questionsAttempted}`;
}

Quiz.prototype.addQuestion = function(question){
  return this.questions.push(question);
}

Quiz.prototype.getNextQuestion = function(){
  this.currentQuestion+=1;
  let nextQuestionNumber = this.currentQuestion;
  return this.questions[nextQuestionNumber];
}

Quiz.prototype.changeQuestion = function(){
  let question = document.getElementById('questionsBlock');
  question.innerText = 'questionChanged';
}
