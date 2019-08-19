//  Variables
let binario = [];
let traduccionBinario = '';
let texto = '';
let cadena = '';
let binBool = 1;
let binValue = 1;
let ascii = 0;

const ASCIITABLE = {
    'espacio': 32,
    '!': 33, // CARÁCTERES
    '"': 34,
    '#': 35,
    '$': 36,
    '%': 37,
    '&': 38,
    "'": 39,
    '(': 40,
    ')': 41,
    '*': 42,
    '+': 43,
    ',': 44,
    '-': 45,
    '.': 46,
    '/': 47,
    '0': 48, //NÚMEROS
    '1': 49,
    '2': 50,
    '3': 51,
    '4': 52,
    '5': 53,
    '6': 54,
    '7': 55,
    '8': 56,
    '9': 57,
    ':': 58,
    ';': 59,
    '<': 60,
    '=': 61,
    '>': 62,
    '?': 63,
    '@': 64,
    'A': 65, // LETRAS MAYUS
    'B': 66,
    'C': 67,
    'D': 68,
    'E': 69,
    'F': 70,
    'G': 71,
    'H': 72,
    'I': 73,
    'J': 74,
    'K': 75,
    'L': 76,
    'M': 77,
    'N': 78,
    'Ñ': 165,
    'O': 79,
    'P': 80,
    'Q': 81,
    'R': 82,
    'S': 83,
    'T': 84,
    'U': 85,
    'V': 86,
    'W': 87,
    'X': 88,
    'Y': 89,
    'Z': 90,
    '[': 91,
    ']': 93,
    '^': 94,
    '_': 95,
    '`': 96,
    'a': 97,
    'b': 98,
    'c': 99,
    'd': 100,
    'e': 101,
    'f': 102,
    'g': 103,
    'h': 104,
    'i': 105,
    'j': 106,
    'k': 107,
    'l': 108,
    'm': 109,
    'n': 110,
    'ñ': 164,
    'o': 111,
    'p': 112,
    'q': 113,
    'r': 114,
    's': 115,
    't': 116,
    'u': 117,
    'v': 118,
    'w': 119,
    'x': 120,
    'y': 121,
    'z': 122,


}

function textoABinario() {
    document.getElementById('binarioTraducido').innerHTML = '';
    cadena = document.getElementById('texto').value.split('');

    for (var i = 0; i < cadena.length; i++) {
        traduccionBinario = '';
        binario = cadena[i].split('');

        for (var i2 = 0; i2 < binario.length; i2++) {
            ascii = ASCIITABLE[binario[i2]]
            ascii == undefined ? ascii = 32 :
                console.log('ascii :', ascii);

            for (let iBinario = 128; iBinario >= 1; iBinario /= 2) {

                if (ascii >= iBinario) {

                    traduccionBinario += '1';
                    ascii -= iBinario;

                } else {

                    traduccionBinario += '0';

                }
            }
            traduccionBinario += ' ';
        }
        document.getElementById('binarioTraducido').innerHTML += traduccionBinario;

    }

}

function binarioATexto() {
    document.getElementById('textoTraducido').innerHTML = '';
    cadena = document.getElementById('binario').value.split(' ');

    for (let i = 0; i < cadena.length; i++) {
        ascii = 0;
        binValue = 1;
        binario = cadena[i].split('').reverse();
        for (let i = 0; i < binario.length; i++) {
            if (binario[i] == 1) {
                ascii += binValue;
            }
            binValue *= 2;
        }
        console.log('ascii :', ascii);
        document.getElementById('textoTraducido').innerHTML += '&#' + ascii + ';';
    }

}

function showTextoABinario() {
    document.getElementById('binarioATexto').className = 'hide';
    document.getElementById('textoABinario').className = 'show';
}

function showBinarioATexto() {
    document.getElementById('textoABinario').className = 'hide';
    document.getElementById('binarioATexto').className = 'show';
}

function seleccionar(el) {
    document.getElementById(el).selectionStart = 0;
}

function limpiar() {
    document.getElementById('binarioTraducido').value= '';
    document.getElementById('textoTraducido').value= '';
    document.getElementById('texto').value= '';
    document.getElementById('binario').value= '';
}