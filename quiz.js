let Quiz = function(){
  this.questions = [];
  this.questionsAttempted = 0;
  this.correctAnswers = 0;
  this.currentQuestion = 0;
}

Quiz.prototype.getScore = function(){
  return `${this.correctAnswers}/${this.questionsAttempted}`;
}

Quiz.prototype.addQuestion = function(question){
  return this.questions.push(question);
}

Quiz.prototype.getNextQuestion = function(){
  this.currentQuestion+=1
  let nextQuestionNumber = this.currentQuestion;
  return this.questions[nextQuestionNumber];
}
