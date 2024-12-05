const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function () {
        // Seleciona o elemento com a classe "ativo" e remove a classe
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        // Adiciona a classe "ativo" no próximo passo
        document.getElementById(proximoPasso).classList.add('ativo');
    });
});