/* Aqi estoy creando mi primer modeo de datos */
/* Aqui creo la clase question que es basicamente un plano de un objeto,
   es decir me permite crear un objeto pero defiir que va a tener ese objeto dentro
   en este caso tiene las propiedades text,choices,answer 
*/


//Con this hago referencia al objeto que se esta creando
export class Question{

   /**
    * @param {string} text Es el texto de la pregunta
    * @param {string[]} choices Es el array de las opciones de la pregunta
    * @param {string} answer Es la respuesta de la pregunta
    */

      constructor(text, choices, answer){
         this.text = text;
         this.choices = choices;
         this.answer = answer;
      }

      
      /**
       * 
       * @param {string} choice es algun texto para adivinar
       * @returns {boolean} return Rretorna si la respuesta es correcta o no
       */
      /* Aqui creo un metodo llamado correctAnswer y 
         verifico si la rspuesta es correcta o no*/
      correctAnswer(choice){
         return choice === this.answer;
      }
}


