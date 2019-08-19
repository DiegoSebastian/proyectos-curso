// 1. Definir Variables
let startButton = document.getElementById('start');
let box = document.getElementById('box');
let correct = document.getElementById('numberCorrect');
let incorrect = document.getElementById('numberIncorrect');
let word, splitWord, finalWord, asterisks, randomIndex;
let game = false;
let words = ['perro', 'robot', 'programacion', 'codigo', 'ventana', 'dinosaurio', 'monstruo', 'hacker', 'internet', 'libro'];


// Comenzar juego al presionar el botón
// startButton.addEventListener('click', startGame());

// Función para comenzar el juego
function startGame() {
    // Resetea los valores de los marcadores y habilita la funcion de juego
    correct.value = 0;
    incorrect.value = 0;
    game = true;
    // Obtiene una palabra aleatoria con la funcion getWord() y la parte en un array letra por letra
    splitWord = getWord().split('');

    // Define "asteriscos" que es la palabra seleccionada pero en lugar de letras son asteriscos
    asterisks = '';

    // Por cada letra en splitWord se añade un asterisco en "asteriscos"
    splitWord.forEach(() => asterisks += '_');

    // Genera un indice random entre la cantidad de letras de splitWord (-1 para evitar que se seleccione el ultimo elemento del array que no existe y no muestre la pista)
    randomIndex = Math.round(Math.random() * (splitWord.length - 1) + 0);

    // Guarda en finalWord el string de asteriscos y los rompe en un arrray
    finalWord = asterisks.split('');

    // Sustituye el asterisco del indice dado por el randomIndex por la letra correspondiente y luego vuelve a unir la cadena
    finalWord.splice(randomIndex, 1, splitWord[randomIndex])
    finalWord = finalWord.join('');

    // Añade el valor de la palabra final a la caja caja
    box.value = finalWord;
    console.log('randomIndex :', randomIndex);
    
}

// Genera palabra aleatoria
function getWord() {
    if(game) {
        // Algoritmo para generar un número aleatorio del 1 al 10(cantidad de palabras)
        let randNumber = Math.floor(Math.random() * 10);
        
        //Selecciona la palabra aleatoria del array words a partir del randNumber
        word = words[randNumber];

        // Devuelve/retorna el valor de word
        console.log(word);
        return word;
    } else {
        // Si el juego esta deshabilitado muestra el alert
        alert('Has perdido :( comienza un juego nuevo para volver a intentar.');
    }
}

// guessKey() se ejecuta cada vez que se presiona una letra y se intenta adivinar 
function guessKey(key) {
    // Comprueba si el juego está habilitado
    if(game) {
        // Compruba si la letra pulsada coincide con alguna letra de la palabra generada
        if(splitWord.indexOf(key) >= 0){
            // Busca en cada elementos (letra) del array (palabra)
            splitWord.find((value, index) => {
                // Comprueba si el valor de la iteración actual coincide con la letra ingresada
                if(value == key) {
                    // Rompe la palabra en cada letra
                    finalWord = finalWord.split('');
                    // Sustituye la letra ingresada por el espacio correspondiente
                    finalWord.splice(index, 1, splitWord[index]);
                    // Vuelve a unir la cadena
                    finalWord = finalWord.join('');
                    // Ingresa el nuevo valor al input
                    box.value = finalWord;
                    // Comprueba que el index de la iteración actual no se igual al random index, es decir que no coincida con la letra aleatoria que se genero para mostrar como pista
                    if(randomIndex != index) {
                        // Suma uno al marcador de correctos
                        correct.value++;
                    }
                }
            });
            //  Comprueba si la letra pulsada no coincide con ninguna de la palabra (se ingreso una letra incorrecta)
        } else {
            // Añade uno al marcador de incorrectos
            incorrect.value++;
            // Si el marcador de incorrectos es mayor o igual a 10 (se perdió el juego)
            if(incorrect.value >= 10) {
                // Muestra el mensaje de que se perdió el juego
                alert('Has perdido :( comienza un juego nuevo para volver a intentar.');
                // Deshabilita la función de juego
                game = false;
            }
        }
        // Verifica si el marcador es mayor o igual a la cantidad de letras de la palabra menos uno (-1 por la letra dada como pista)
        if(correct.value >= splitWord.length - 1){
            // Muestra que se ganó el juego, deshabilita 
            alert('Has ganado! felicitaciones');
            game = false;
            box.value = '';
            correct.value = 0;
            incorrect.value = 0;
        }
        console.log(correct.value, splitWord.length);
    }
}
