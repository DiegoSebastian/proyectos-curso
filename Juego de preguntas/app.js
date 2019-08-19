// Definimos variables
let lifes = 3;
    lifesBox = document.getElementsByClassName('lifes');
    lifesBox = lifesBox[0];
    score = 0;
    scoreBox = document.getElementsByClassName('score');
    scoreBox = scoreBox[0];
    time = 60;
    timeBox = document.getElementsByClassName('time');
    timeBox = timeBox[0];
    game = false;
    question = document.getElementsByClassName('question');
    question = question[0];
    answers = document.getElementsByClassName('answer');
    randomIndex = 0;
    randomQuestion = '';
    questionsSet = [];
    clock = '';

// Clase para definir las preguntas 
class Set {
    constructor(question, answer1, answer2, answer3, answer4, correct) {
        this.question = question;
        this.answers = [answer1, answer2, answer3, answer4];
        this.correct = correct;
    }
};

// Definimos las preguntas y sus respectivas respuestas, así como el índice donde esta la respuesta correcta
questionsSet.push(new Set('¿Donde vivían los vikingos?', 'America', 'Asia', 'Perú', 'Escandinavia', 4), 
                  new Set('¿Como se llama nuestra galaxia vecina?', 'Andromeda', 'Via Láctea', 'Via no Láctea', 'Alfa Centauri', 1),
                  new Set('¿Que se mide con años luz?', 'Tiempo', 'Peso', 'Distancia', 'Volumen', 3),
                  new Set('Un vaso y una cuchara cuestan juntos $1,10. El vaso cuesta 1$ más que la cuchara, ¿Cuanto cuesta la cuchara?', '10 centavos', '5 centavos', '1 dolar', '50 centavos', 2)
                  );
// Pantalla de inicio
let defaultScreen = new Set('Adivina la pregunta!', '¿Que tanto sabes?', 'pon tus habilidades a prueba!', 'Aprende con Alien Academy', 'Curso de introducción a la programación');


//   Función de comenzar el juego
function startGame() {
    // Verifica que solo se pueda comenzar el juego cuando este deshabilitado
    if(!game) {
        // Habilita la fuinción de juego
        game = true;
        // Genera una pregunta aleaotria
        generateQuestion();

        // Pone el tiempo en el marcador
        refreshScoreboard();
        clock = setInterval(() => {
            time--;
            timeBox.innerHTML = time + ' seg';
            gameStatus();
        }, 1000);

    }
}

// Genera una pregunta aleatoria y pone los valores en sus respectivas cajas
function generateQuestion() {
    if(game) {
        randomIndex = Math.floor(Math.random() * (questionsSet.length));
        randomQuestion = questionsSet[randomIndex];
        question.innerHTML = randomQuestion.question;
        for (let i = 0; i < randomQuestion.answers.length; i++) {
            answers[i].innerHTML = randomQuestion.answers[i];
        }
    }
}

// Se ejecuta cuando el juagor intenta adivinar la respuesta
function selectAnswer(index) {
    // Verifica que el modo de juego esté habilitado
    if(game) {
        // Si acerta la pregunta
        if(randomQuestion.correct == index) {
            // Muestra el mensaje de 'correcto'
            alert('respuesta correcta');
            // Añade 10 pts al score y 5 segundos al tiempo
            score+=10;
            time+=5;
            // Sí no acertó
        } else {
            // Muestra el mensaje de 'incorrecto'
            alert('Respuesta incorrecta');
            // Quita 10 seg al tiempo y una vida
            time-=10;
            lifes--;
        }
        // Refresca el marcadore
        refreshScoreboard();
        // Genera una nueva pregunta
        generateQuestion();
    }
}

// Función para refrescar el marcador
function refreshScoreboard() {
    timeBox.innerHTML = time + ' seg'; 
    lifesBox.innerHTML = lifes;
    scoreBox.innerHTML = score;
    // Chquéa el status del juego luego de actualizar el marcador
    gameStatus();
}

function gameStatus() {
    // Si el score es o igual a 100
    if(score >= 100) {
        // Muestra el mensaje de 'has ganado'
        alert('Has ganado el juego');
        // Resetea el juego y los marcadores
        resetGame();
    }

    // Si las vidas son menores o iguales a 0 o el tiempo es menor o igual a cero
    if(lifes <= 0 || time <= 0) {
        // Ejecuta el mensaje de 'has perdido'
        alert('Has perdido el juego');
        // Reseta el juego y los marcadores
        resetGame();
    }
}


// Función para resetear juego
function resetGame() {
    // Deshabilita la función de juego
    game = false;
    // Resetea los marcadores
    lifes = 3;
    score = 0;
    time = 60;
    // Refresca el marcador con los nuevos valores
    refreshScoreboard();
    // Limpia el intérvalo para que no siga contando el tiempo
    clearInterval(clock);
    // Imprime la pantalla de inicio
    question.innerHTML = defaultScreen.question;
    for (let i = 0; i < answers.length; i++) {
        answers[i].innerHTML = defaultScreen.answers[i];
        
    }

}

