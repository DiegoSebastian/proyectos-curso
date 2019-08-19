// Definimos variables
let cell = document.getElementsByClassName('cell');
let game = false;

console.log('cell :', cell);

// Función parta empezar el juego
function startGame() {
    // Activa el juego
    game = true;
    // Ciclo for para recorrer todas las celdas y limpiarlas
    for (let i = 0; i < cell.length; i++) {
        cell[i].innerHTML = '';
    }

    // Ejecuta como primer turno a la maquina
    machine();

}

// Inteligencia de la maquina
function machine() {
    if (game) {
        // Genera un numero aleatorio entre el 0 y 9 (excluye 9)
        let randomIndex = Math.floor(Math.random() * (9 - 0) + 0);
        console.log('randomIndex :', randomIndex);
        // Verifica si la celda pulsada está disponible
        if (cell[randomIndex].innerHTML == 'x' || cell[randomIndex].innerHTML == 'o') {
            // Si no está disponible vuelve a ejecutar machine() hasta encontrar una disponible
            machine();
        } else {
            // Si esta disponible inserta la 'x'
            cell[randomIndex].innerHTML = 'x';
        }
        gameState();
    }
}

// Función de juego para el humano
function human(number) {
    // Solo si el modo de juego está activado se ejecuta la función
    if (game) {
        console.log(cell[number - 1].innerHTML);
        // Verifica si la celda pulsada esta vacía
        if (cell[number - 1].innerHTML == 'x' || cell[number - 1].innerHTML == 'o') {
            // Si no esta vacía muestra el mensaje y pierde el turno
            alert('Ya se ha usado esa celda, perdiste el turno el turno');
        } else {
            // Sio esta disónible inserta la 'o'
            cell[number - 1].innerHTML = 'o';
        }
        // Efecto de que la maquina está "pensando"
        setTimeout(() => {
            console.log('Pensando...');
            // Turno de la maquina
            machine();
        }, 500);
        gameState();
    } else {
        alert('Comienza un juego nuevo');
    }
}

// Función para verificar si alguien ganó el juego o hubo empate
function gameState() {
    if (game) {
        // Verifica si la maquina ganó en forma de cuadro
        if (cell[0].innerHTML == 'x' && cell[1].innerHTML == 'x' && cell[2].innerHTML == 'x' || cell[0].innerHTML == 'o' && cell[1].innerHTML == 'o' && cell[2].innerHTML == 'o') {
            cell[0].innerHTML == 'x' ? alert('Ha ganado la maquina') : alert('Ha ganado el humano');
            gameOver();

        } else if (cell[2].innerHTML == 'x' && cell[5].innerHTML == 'x' && cell[8].innerHTML == 'x' || cell[2].innerHTML == 'o' && cell[5].innerHTML == 'o' && cell[8].innerHTML == 'o') {

            cell[2].innerHTML == 'x' ? alert('Ha ganado la maquina') : alert('Ha ganado el humano');
            gameOver();

        } else if (cell[6].innerHTML == 'x' && cell[7].innerHTML == 'x' && cell[8].innerHTML == 'x' || cell[6].innerHTML == 'o' && cell[7].innerHTML == 'o' && cell[8].innerHTML == 'o') {

            cell[6].innerHTML == 'x' ? alert('Ha ganado la maquina') : alert('Ha ganado el humano');
            gameOver();

        } else if (cell[0].innerHTML == 'x' && cell[3].innerHTML == 'x' && cell[6].innerHTML == 'x' || cell[0].innerHTML == 'o' && cell[3].innerHTML == 'o' && cell[6].innerHTML == 'o') {

            cell[0].innerHTML == 'x' ? alert('Ha ganado la maquina') : alert('Ha ganado el humano');
            gameOver();

            // Verifica si la maquina ganó en forma de equis
        } else if (cell[2].innerHTML == 'x' && cell[4].innerHTML == 'x' && cell[6].innerHTML == 'x' || cell[2].innerHTML == 'o' && cell[4].innerHTML == 'o' && cell[6].innerHTML == 'o') {

            cell[2].innerHTML == 'x' ? alert('Ha ganado la maquina') : alert('Ha ganado el humano');
            gameOver();

        } else if (cell[0].innerHTML == 'x' && cell[4].innerHTML == 'x' && cell[8].innerHTML == 'x' || cell[0].innerHTML == 'o' && cell[4].innerHTML == 'o' && cell[8].innerHTML == 'o') {

            cell[0].innerHTML == 'x' ? alert('Ha ganado la maquina') : alert('Ha ganado el humano');
            gameOver();

            // Verifica si la máquina ganó en forma de  cruz
        } else if (cell[1].innerHTML == 'x' && cell[4].innerHTML == 'x' && cell[7].innerHTML == 'x' || cell[1].innerHTML == 'o' && cell[4].innerHTML == 'o' && cell[7].innerHTML == 'o') {

            cell[1].innerHTML == 'x' ? alert('Ha ganado la maquina') : alert('Ha ganado el humano');
            gameOver();

        } else if (cell[3].innerHTML == 'x' && cell[4].innerHTML == 'x' && cell[5].innerHTML == 'x' || cell[3].innerHTML == 'o' && cell[4].innerHTML == 'o' && cell[5].innerHTML == 'o') {

            cell[3].innerHTML == 'x' ? alert('Ha ganado la maquina') : alert('Ha ganado el humano');
            gameOver();

        }
    }

}

function gameOver() {
    // Deshabilita el modo de juego
    game = false;
    // Recorre todos los elementos de cell, si es par inserta x, si es impar inserta o
    for (let i = 0; i < cell.length; i++) {
        if (i % 2 == 0) {
            cell[i].innerHTML = 'x';
        } else if (i % 2 != 0) {
            cell[i].innerHTML = 'o';
        }
    }
}