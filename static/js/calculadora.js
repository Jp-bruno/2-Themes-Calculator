const tela = document.getElementById('current_number_display');
const memoria = document.getElementById('current_operation_display');
const numeros = Array.from(document.querySelectorAll('.btn_num'));
const operadores = Array.from(document.querySelectorAll('.operador'));
const everyButton = Array.from(document.querySelectorAll('.button'));

var contador = 0;

function writeOnScreen(ev) {
    let valor = ev.target.value;
    
    if (ev.target.value === '=') {
        let result = Number.isFinite(Number(eval(tela.value))) ? eval(tela.value) : 'Erro';

        memoria.value = tela.value + ' = ' + result;
        tela.value = result;

        contador = tela.value.length;

        if (tela.value === 'Erro') {
            setTimeout(() => {
                tela.value = '';
                memoria.value = '';
                contador = 0;
            }, 3000)
        }
    } else {
        if (operadores.find(el => el.value === ev.target.value)) { //se o botao clicado for um operador
            let valueString = tela.value.toString();

            if (operadores.some(el => el.value === valueString[valueString.length - 1])) {
                ev.preventDefault();
            } else {
                contador = 0;
                tela.value += ` ${valor} `;
            }
        }

        if (numeros.find(el => el.value === ev.target.value)) { //se o botao clicado for um numero
            if (contador >= 8) {
                ev.preventDefault();
            } else {
                contador++
                tela.value += valor;
            }
        }
    }

    if (ev.target.value === 'apagar') {
        let isOperator = / [\+\-\=\/\*] $/.test(tela.value.slice(tela.value.length - 3));

        if (isOperator) {
            let valuesBeforeOperator = tela.value.match(/^(.+) [\=\-\+\/\*]/)[1];
            contador = valuesBeforeOperator.length;
            tela.value = tela.value.replace(/ [\+\-\/\*\=] $/, '');
        } else {
            tela.value = tela.value.replace(/.$/, '');
            contador = contador - 1;
        }
    }

    if (ev.target.value === 'C') {
        contador = 0;
        tela.value = '';
        memoria.value = '';
    }
}

everyButton.forEach(el => el.addEventListener('click', writeOnScreen));
