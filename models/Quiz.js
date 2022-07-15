//@ts-chck
import {Question} from './Question.js';


export class Quiz{

      questionIndex = 0;
      score = 0;
      
      /**
       * 
       * @param {Question[]} questions 
       */
      constructor(questions){
         this.questions = questions;
      }


      /**
       * 
       * @returns {Question} Aqui retorna la pregunta encontrada
       */
      getQuestionIndex(){
         return this.questions[this.questionIndex];
      }

      
      /**
       * 
       * @returns {boolean} Esto retorna si el quiz termino o no
       */
      isEnded(){
         return this.questions.length === this.questionIndex;
      }


      /**
       * 
       * @param {string} answer (respuesta) este es el campo seleccionado por el usuario
       */
      guess(answer){
         if(this.getQuestionIndex().correctAnswer(answer)){
            this.score++;
         }
         this.questionIndex++;
      }

}

