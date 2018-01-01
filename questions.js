let Question = function(question,answer = 'yes',options = ['yes','no']){
  this.question = question;
  this.answer = answer;
  this.options = options;
}

Question.prototype.isCorrectAnswer = function(option){
  return this.answer == option;
}
