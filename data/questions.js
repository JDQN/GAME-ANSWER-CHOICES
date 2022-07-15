import {Question} from '../models/Question.js';
import {data} from './data.js';

/* Desde aqui vamos arecorrer uno a uno los arreglos y los vamos a pasar a la
   clase y esto nos devuelve un objeto nuevo y para esto necesitamos un map
*/ 

/* esta funcionalidad no se a implementado aun, solo envia un mensaje por consola 
   y ese mensaje es el que debemos implementar en la vista*/

export const questions = data[Math.floor((Math.random() * (data.length-0)) + 0) 
].map(question => new Question(
      question.question, 
      question.choices, 
      question.answer
   ));

const allQuestions = questions[Math.floor((Math.random() * (questions.length-0)) + 0) 
]
   
console.log(allQuestions);



/* export const questions = data.nivelUno.map(question => new Question(
      question.question, 
      question.choices, 
      question.answer
   ));
   
console.log(questions); */

