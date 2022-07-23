let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

const saldoInicial = 0;
if(campoSaldo) campoSaldo.innerHTML = saldoInicial.toString();

function somarAoSaldo(soma: number) {
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
