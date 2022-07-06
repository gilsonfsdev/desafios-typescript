let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

let saldoTotal: number = 0;

function limparCampoSoma() {
  soma.value = "";
}
function somarAoSaldo(soma:number) {
  if (campoSaldo) {
    saldoTotal += soma
    campoSaldo.innerHTML = saldoTotal.toString();
    limparCampoSoma();
  }
}

function limparSaldo() {
  if (campoSaldo) {
      saldoTotal = 0;
      campoSaldo.innerHTML = saldoTotal.toString();
  }
}

if (botaoAtualizar) {
  botaoAtualizar.addEventListener('click', () => {
      somarAoSaldo(Number(soma.value)); 
  });
}

botaoLimpar.addEventListener('click', () => { 
  limparSaldo();
});
