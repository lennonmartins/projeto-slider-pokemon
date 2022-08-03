/*
Objetivo 1 - mostrar outro cartão ao avançar;
Objetivo 2 - mostrar o cartão anterior ao voltar;
*/

const botaoAvancar = document.getElementById('btn-avancar');

const cartoes = document.querySelectorAll('.cartao');

let cartaoAtual = 0;

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
};

function mostrarCartao(indiceCartao) {
    cartoes[indiceCartao].classList.add('selecionado');
}

botaoAvancar.addEventListener('click', () => {
    if (cartaoAtual === cartoes.length - 1)
        return;

    esconderCartaoSelecionado();
    cartaoAtual++;
    mostrarCartao(cartaoAtual);
})

const botaoVoltar = document.getElementById('btn-voltar');

botaoVoltar.addEventListener('click', () => {
    const posicaoInicialIndice = 0;

    if (cartaoAtual === posicaoInicialIndice)
        return;

    esconderCartaoSelecionado();

    cartaoAtual--;

    mostrarCartao(cartaoAtual);
})