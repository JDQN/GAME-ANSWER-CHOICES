export const data =[ 
   [
      /* question 1*/
      {
         question: 'Con java ¿qué paradigmas puede trabajar?',
         choices: [
            'Programación orientada a objetos', 
            'Programación estructurada',
            'Programación funcional', 
            'Programación orientada a etiquetas'
         ],
         answer: 'Programación orientada a objetos',
      },

      /* question 2*/
      {
         question: 'Un IDE conocido es...',
         choices: ['Netbeans', 'Visual Studio Code', 'Notepad', 'World'],
         answer: 'Netbeans',
      },

      /* question 3*/
      {
         question: '¿Qué pasos debo hacer para cambiar a una rama y subir cambios a un repositorio git a la rama principal?',
         choices: [
            'git checkout main, git push',
            'git checkout main, git push origin main', 
            'git change main, git push main', 
            'git change main, git push origin main'
         ],
         answer: 'git checkout main, git push origin main',
      },

      /* question 4*/
      {
         question: 'MongoDB es una base de datos de tipo',
         choices: ['Relacional', 'No-Relacional', 'Ninguna de las anteriores', 'A y B'],
         answer: 'No-Relacional',
      },

      /* question 5*/
      {
         question: 'MySQL es una base de datos de tipo',
         choices: ['Relacional', 'No-Relacional', 'Ninguna de las anteriores', 'A y B'],
         answer: 'Relacional',
      },
      /* question 6 */
      {
         question: 'Una abstracción es',
         choices: [
            'Es una herencia de una clase maestra', 
            'Es una herencia de multiples comportamientos',
            'Es una implementación de una interfaz', 
            'Es una herencia de una clase abstracta'
         ],
         answer: 'Es una implementación de una interfaz',
      },

      /* question 7 */
      {
         question: '¿Qué ciclo de control usamos para iterar hasta 1000?',
         choices: [
            'foreach(1: 1000){}',
            'for(i=0;i<999){}', 
            'for(i=1;i<=1000;i++){}', 
            'for(i=0;i<999;j++){}'
         ],
         answer: 'for(i=1;i<=1000;i++){}',
      },

      /* question 8 */
      {
         question: 'Un método recursivo es como',
         choices: [
            'function() ⇒ function(){}',
            '() ⇒() ⇒{}', 
            'a(b())', 
            'a(a())'
         ],
         answer: 'a(a())',
      },

      /* question 9*/
      {
         question: 'Cuando hablamos de java, hablamos de un lenguaje',
         choices: ['Compilado', 'No compilado', 'Intepretados', 'No interpretado'],
         answer: 'Compilado',
      },

      /* question 10*/
      {
         question: 'Cuando hablamos de python, hablamos de una lenguaje',
         choices: ['Compilado', 'No compilado', 'Intepretados', 'No interpretado'],
         answer: 'Intepretados',
      },
      /* question 11*/
      {
         question: 'nodejs es un framework o tecnología para',
         choices: ['Compilado', 'No compilado', 'Intepretados', 'No interpretado'],
         answer: 'Intepretados',
      },
      /* question 12*/
      {
         question: '¿Podemos hacer Polimorfismo usando clases abstractas e interfaces?',
         choices: ['SI', 'NO'],
         answer: 'SI',
      },
      /* question 13*/
      {
         question: 'si ves un método con mas de 45 lineas de código, ¿qué puede decir?',
         choices: [
            'Es un método con mucho código', 
            'Hay malas practicas de programación', 
            'Tiene alta complejidad ciclomática', 
            'Tiene baja cohesión'
         ],
         answer: 'Hay malas practicas de programación',
      },
      /* question 14*/
      {
         question: 'Un full-stack debe conocer',
         choices: [
            'Frontend, backend y base de datos', 
            'Solo frontend y backend', 
            'Base de datos y backend', 
            'Base de datos y backendn'
         ],
         answer: 'Frontend, backend y base de datos',
      },
      /* question 15*/
      {
         question: 'Una de las buenas practicas de programación es poder crear código mas',
         choices: [
            'Fácil de ejecutar', 
            'Fácil de transportal', 
            'Fácil de mantener', 
            'Fácil de probar'
         ],
         answer: 'Fácil de mantener',
      },
      /* question 16*/
      {
         question: 'Un Modelo Entidad Relación (MER) nos referimos a',
         choices: [
            'Clases relacionadas', 
            'Entidades de datos relacionadas', 
            'Objectos relacionados', 
            'Entidades de clases relacionados'
         ],
         answer: 'Entidades de datos relacionadas',
      },
      /* question 17*/
      {
         question: 'Cuando hablamos de un frontend developer, nos referimos a',
         choices: [
            'Un perfil que se dedica a los elementos visuales como la UI', 
            'Un perfil que solo se dedica a trabajar HTML+CSS+Javascript', 
            'Un perfil que se orienta tanto el frontend como el backend', 
            'Ninguna de las anteriores'
         ],
         answer: 'Un perfil que se dedica a los elementos visuales como la UI',
      },
      /* question 18*/
      {
         question: 'Cuando hablamos de un backend developer, nos referimos a',
         choices: [
            'Un perfil enfocado a la capa de presentación', 
            'Un perfil mas de gestión de datos', 
            'Un perfil orientado a los servidores', 
            'Un perfil mas administrativo'
         ],
         answer: 'Un perfil orientado a los servidores',
      },
      /* question 19*/
      {
         question: '¿Qué combinaciones de join podemos hacer? para una base de datos relacional?',
         choices: [
            'join, add joins, merge join', 
            'join reverse, join combination, inner joint', 
            'inner, full, left y right', 
            'Ninguna de las anteriores'
         ],
         answer: 'inner, full, left y right',
      },
      /* question 20*/
      {
         question: 'Todas la tablas de una base de datos relacional debería tener',
         choices: [
            'Llaves de partición', 
            'Llaves primarias', 
            'Llaves compuestas', 
            'Llaves foraneas'
         ],
         answer: 'Llaves primarias',
      },
      /* question 21*/
      {
         question: '¿Qué instrucción se usa para unir tablas en una base de datos relacional?',
         choices: [
            'Combination', 
            'Joining', 
            'JOIN', 
            'UNION'
         ],
         answer: 'JOIN',
      },
      /* question 22*/
      {
         question: '¿Qué posibles tipos de base de datos existen?',
         choices: [
            'Referenciales', 
            'Relacionales', 
            'No-relacionales', 
            'No-Referenciales'
         ],
         answer: 'Relacionales',
      },
      /* question 22*/
      {
         question: 'En javascript ¿qué objeto es clave para poder acceder a los elementos del navegador?',
         choices: [
            'windows', 
            'elements', 
            'document', 
            'objects'
         ],
         answer: 'document',
      },
      /* question 23*/
      {
         question: 'Una clase final no permite',
         choices: [
            'Crear una instancia', 
            'Cambiar los estados a la interna de la clase', 
            'Usar los métodos de la clase', 
            'Extender o heredar'
         ],
         answer: 'Extender o heredar',
      },
      /* question 24*/
      {
         question: 'Un comando que se usa para poder subir cambios a un repositorio de git de manera remoto es',
         choices: [
            'commit', 
            'publish', 
            'push', 
            'upload'
         ],
         answer: 'push',
      },
      /* question 25*/
      {
         question: 'Una característica de los métodos estáticos es',
         choices: [
            'Comparte el mismo espacio de memoria', 
            'No necesita nombrar la clase', 
            'Depende de que la clase sea final', 
            'No requiere tener una instancia para poder acceder'
         ],
         answer: 'No requiere tener una instancia para poder accedersh',
      },
   ]
]