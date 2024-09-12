let listaDeNmrSorteados = [];
let nmrLimit = 100;
let numeroSecret = gerarNumeroRandom();
let tentativas = 1;
const form = document.getElementById('sex');


function exibirTextoNaTela(tag, texto) {
   let campo = document.querySelector(tag);
   campo.innerHTML = texto;
}

function exibirMsgInicial(){
    exibirTextoNaTela('h1', 'Jojinhos Secretos 😈');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10 😈');

}
exibirMsgInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log('O Botão foi selecionado 😈');
    if (chute > numeroSecret) {
        exibirTextoNaTela('p', 'O número secreto é menor seu burro');
    } else{
        exibirTextoNaTela('p', 'O número secreto é maior seu animal');
    }
    if (chute == numeroSecret) {
        exibirTextoNaTela('h1', 'Acertou caraio 🔥');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Parabéns seu podre, tu acertou em ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
        return;
        
        
    }
    tentativas++;
    limparCampo();

}

function gerarNumeroRandom() {
    let numeroEscolhido = parseInt(Math.random() * nmrLimit + 1);
    let quantidadeDeElementosNaLista = listaDeNmrSorteados.length;


    if (quantidadeDeElementosNaLista == nmrLimit) {
        listaDeNmrSorteados = [];
    }

    if (listaDeNmrSorteados.includes(numeroEscolhido)) {
        return gerarNumeroRandom();
    }else {
        listaDeNmrSorteados.push(numeroEscolhido);
        console.log(listaDeNmrSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecret = gerarNumeroRandom();
    limparCampo();
    tentativas = 1;
    exibirMsgInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

form.addEventListener('submit', function(e){
    e.preventDefault();
})