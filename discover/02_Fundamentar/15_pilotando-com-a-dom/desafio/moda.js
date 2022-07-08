
function abrirJanela(){
    const abrir = document.querySelector('.modal-wrapper')
    abrir.classList.remove('invisible')
}

function fecharJanela(){
    const fechar = document.querySelector('.modal-wrapper')
        fechar.classList.add('invisible')
}