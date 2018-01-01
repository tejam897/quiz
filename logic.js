const inform = function(){
  let option1 = document.getElementById('option1');;
}
const listener = function(){
  let questionButton  = document.getElementById('nextQuestion');
  questionButton.onclick = inform;
}

window.onload = listener;
