let box = document.getElementById('box');
let value1 = 0;
let value2 = 0;
let resultado;
let operador = '';

function addValue(number) {
    if(value1 != 0 && value2 != 0 && box.value) {
        value1 = resultado;
        console.log('if 3');
        value2 = 0;
        clearBox('full');
    }
    if(box.value.indexOf('.') != -1 && number == '.') {
        box.value += '';
    } else {
        box.value += number;
    }
    resultado = box.value;

}

function clearBox(toggle) {
    if(toggle == 'full') {
        box.value = '';
    } else if(toggle == '1char') {
        let newBox = box.value.split("").reverse().join("").substring(1);
        box.value = newBox.split("").reverse().join("");
        resultado = box.value;
    }
}

function clearMemory() {
    value1 = 0;
    value2 = 0;
    clearBox('full');
}

function igual() {
    switch(operador){
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
        case 'potencia':
            resolver('potencia');
            break;
        case 'error':
            alert('ingrese un numero');
            break;
    }
    box.value = resultado;
    value1 = 0;
    value2 = 0;
}

function resolver(operadorParam) {
    if(value1 == 0 && box.value) {
        operador = operadorParam;
        value1 = parseFloat(box.value);
        clearBox('full');
        console.log('if 1');
    } else if(value2 == 0 && box.value) {
        value2 = parseFloat(box.value);
        console.log('if 2');
        clearBox('full');
        switch(operador) {
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
        }
        box.value = resultado;
        operador = operadorParam;
        console.log(operador);
    } else if(value1 != 0 && value2 != 0 && box.value) {
        value1 = resultado;
        console.log('if 3');
        value2 = 0;
        clearBox('full');
    }
}

function keyDown (event) {
    if(value1 != 0 && value2 != 0 && box.value) {
        value1 = resultado;
        console.log('if 3');
        value2 = 0;
        clearBox('full');
    }
    switch(event.key) {
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