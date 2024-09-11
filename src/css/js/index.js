const botoaMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll ('.projeto:not(.ativo)');

botoaMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProejetos();

    
    esconderBotao();

});

function esconderBotao() {
    botoaMostrarProjetos.classList.add('remover');
}

function mostrarMaisProejetos() {
    projetosInativos.forEach(projetosInativo => {
        projetosInativo.classList.add('ativo');
    });
}

