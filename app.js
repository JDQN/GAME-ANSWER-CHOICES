import {questions} from "./data/questions.js";
import  {Quiz} from './models/Quiz.js';
import {Buttons} from './models/Buttons.js';


/**
 * 
 * @param {Quiz} quiz El main es un objeto de la clase Quiz
 * @param {Buttons} buttons 
 */
const renderPage = (quiz, buttons) => {
   if(quiz.isEnded()){
      buttons.showScore(quiz.score);
   }else{
      buttons.showQuestion(quiz.getQuestionIndex().text);
      buttons.showProgress(quiz.questionIndex + 1, quiz.questions.length);
      buttons.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => {
      quiz.guess(currentChoice);
      renderPage(quiz, buttons);
   });
   }
}

function main(){
   const quiz = new Quiz(questions);
   const buttons = new Buttons();
   renderPage(quiz, buttons);
}

main();
