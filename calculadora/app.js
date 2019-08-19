// Definimos las variables que usaremos en el proyecto
let box = document.getElementById('box');
let value1;
let value2;
let resultado;
let operador = '';

// Función de añadir numero a a caja
function addValue(number) {
    // comprueba si ambos valores estan llenos SIRVE PARA EJECUTAR OPERACIONES SIN PRESIONAR =
    if(value1 != undefined && value2 != undefined && box.value) {
        // Si ambos estan llenos añade el resultado al value1 y limpia value2
        value1 = resultado;
        value2 = undefined;
        // Limpia la caja
        clearBox('full');
    }
    // Verifica si la tecla presionada es un punto, y si aún no hay un punto (decimal) en el numero ingresado
    if( number == '.' && box.value.indexOf('.') != -1 ) {
        // Si no hay decimales aún, añade el decimal
        box.value += '';
    } else {
        // Si no es un decimal entonces es un número, por ende lo añade a la caja
        box.value += number;
    }
    // Pone el valor de resultado igual al de la caja
    resultado = box.value;

}


// Función de limpiar caja
function clearBox(toggle) {
    // Verifica si es full o 1char
    if(toggle == 'full') {
        // Si es full limpia el número completo
        box.value = '';
    } else if(toggle == '1char') {
        // Si es 1char limpia número por número
        let newBox = box.value.split("").reverse().join("").substring(1);
        box.value = newBox.split("").reverse().join("");
        resultado = box.value;
    }
}

// Limpiar memoria
function clearMemory() {
    // Resetea los valores y limpia la caja en modo full
    value1 = undefined;
    value2 = undefined;
    clearBox('full');
}

// Se ejecuta al pulsar el boton de igual o enter
function igual() {
    // Switch para verificar en que estado está el operador
    switch(operador){
        // Dependiendo del estado ejecuta resolver() con su respectiva operación
        case 'suma':
            resolver('suma');
            break;
        case 'resta':
            resolver('resta');
            break;
        case 'multiplicacion':
            resolver('multiplicacion');
            break;
        case 'division':
            resolver('division');
            break;
        case 'raiz':
            raiz();
            break;
        case 'potencia':
            resolver('potencia');
            break;
        case 'porcentaje':
            resolver('porcentaje');
            break;
        case 'error':
            alert('ingrese un numero');
            break;
    }
    // Luego de ejecutar la operación pone el valor de resultado en la caja y resetea los valores 
    box.value = resultado;
    value1 = undefined;
    value2 = undefined;
}

// Función para resolver las operaciones
function resolver(operadorParam) {
    // Verifica si el valor 1 esta vacío (o undefined) y si hay algo en la caja
    if(value1 == undefined && box.value) {
        // Si la condición se cumple setea el valor del operador al valor que se le pase por el parametro
        operador = operadorParam;
        // Pone el valor que hay en la caja en el valor 1
        value1 = parseFloat(box.value);
        // Limpia la caja en modo full
        clearBox('full');
        console.log('if 1');
        // Verifica si el valor 2 está vacío o undefined y si hay algo en la caja
    } else if(value2 == undefined && box.value) {
        // Pone el valor que hay en la caja en el valor 2
        value2 = parseFloat(box.value);
        console.log('if 2');
        // Limpia la caja en modo full
        clearBox('full');
        // Switch para ver que operación se ejecuta
        switch(operador) {
            // Se ejecuta la operación dependiendo del valor de operador
            case 'suma':
                resultado = value1 + value2;
                break;
            case 'resta':
                resultado = value1 - value2;
                break;
            case 'multiplicacion':
                resultado = value1 * value2;
                break;
            case 'division':
                resultado = value1 / value2;
                break;
            case 'potencia':
                resultado = Math.pow(value1, value2);
                break;
            case 'porcentaje':
                resultado = value2 * (value1 / 100);
                break;
        }
        // Muestra el resultado en la caja
        box.value = resultado;
        // Si hay un nuevo valor para el operador lo añade
        operador = operadorParam;
        console.log(operador);

        // VERIFICAR SI ES NECESARIO ESTE IF
    } else if(value1 != undefined && value2 != undefined && box.value) {
        value1 = resultado;
        console.log('if 3');
        value2 = undefined;
        clearBox('full');
    }
}

// Función para resolver operaciones "avanzadas" (raiz, seno, coseno, tangente)
function resolverAvanzado(operadorParam) {
    // Chequea que haya un valor en la caja
    if(box.value) {
        // Setea el valor del operador con el pasado por el parametro
        operador = operadorParam;
        // Swithc para verificar el estado del operador
        switch(operador){
            // Dependiendo del estado del operador ejecuta su respectiva operación al valor que haya en la caja y asigna el resultado a a variable "resultado"
            case 'raiz':
                resultado = Math.sqrt(parseFloat(box.value));
                break;
            case 'sin':
                resultado = Math.sin(parseFloat(box.value));
                break;
            case 'cos':
                resultado = Math.cos(parseFloat(box.value));
                break;
            case 'tan':
                resultado = Math.tan(parseFloat(box.value));
                break;
                
        }
        // Muestra el valor de resultado en la caja
        box.value = resultado;
    }
}

// Dunción parw detectar las presiones del teclado físico
function keyDown (event) {
    // Verifica si ambos valores estan llenos SIRVE PARA EJECUTAR OPERACIONES SIN PRESIONAR =
    if(value1 != undefined && value2 != undefined && box.value) {
        // le da el valor de resultado a value 1
        value1 = resultado;
        console.log('if 3');
        // Limpia el valor de value 2 y la caja en modo full
        value2 = undefined;
        clearBox('full');
    }
    // Switch para verificar que tecla se presionó
    switch(event.key) {
        // Ejecuta la función de resolver seteando el operador respectivamente
        case '+':
            resolver('suma');
            break;
        case '-':
            resolver('resta');
            break;
        case '*':
            resolver('multiplicacion');
            break;
        case '/': 
            resolver('division');
            break;
        case 'Enter':
            igual();
            break;
    }
}