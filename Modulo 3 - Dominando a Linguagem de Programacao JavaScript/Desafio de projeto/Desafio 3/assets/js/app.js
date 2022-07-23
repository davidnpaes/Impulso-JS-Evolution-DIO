"use strict";
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
const saldoInicial = 0;
if (campoSaldo)
    campoSaldo.innerHTML = saldoInicial.toString();
function somarAoSaldo(soma) {
    let novoSaldo = soma + Number(campoSaldo.innerHTML);
    campoSaldo.innerHTML = novoSaldo.toString();
}
function limparSaldo() {
    campoSaldo.innerHTML = '0';
}
botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
