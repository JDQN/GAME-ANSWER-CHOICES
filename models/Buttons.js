export class Buttons{
   constructor(){}

   showForm(display){
      const form = document.getElementById('form');
      form.style.display = display;

      form.style.display = "block";
   }

   /**
    * @param {String} text render de la pregunta
    */
   /* Metodo para mostrar la pregunta */
   showQuestion(text){
      const questionTitle = document.getElementById('question');
      questionTitle.innerText = text;
   }


   /**
    * 
    * @param {string[]} choice pasamos un array con las opciones y la respuesta correcta
    */

   
   /* Metodo para mostrar las opciones */
   showChoices(choices, callback){
      const choicesContainer = document.getElementById("choices");
      choicesContainer.innerHTML = "";

      for(let i = 0; i<choices.length; i++){

         const button = document.createElement('button');
         button.innerText = choices[i];
         button.className = "button";
         button.addEventListener("click",() => callback(choices[i]));

         choicesContainer.append(button)
      }
   }

   /**
    * 
    * @param {number} score es el total del puntaje
    */
   showScore(score){   
      if(score >= 16){
         const quizEndHTML = `<h1>Congratulations! 😎  ${score}</h1>`;
         const element = document.getElementById('quiz');
         element.innerHTML = quizEndHTML;
      }else{
         const quizEndHTML = `<h3>Vuelve a intentarlo! 😔 ${score} </h3> `;
         const element = document.getElementById('quiz');
         element.innerHTML = quizEndHTML;
      }
   }

   /**
    * 
    * @param {number} currentIndex  es el indice actual de la pregunta 
    * @param {number} total el total del quiz
    */
   showProgress(currentIndex, total){
      const element = document.getElementById('progress');
      element.innerHTML = `Question ${currentIndex} of ${total}`;
   }

   

}