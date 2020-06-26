var modo = document.querySelector("#select");
var btnComecar = document.querySelector("#btnComecar");
var erro = document.querySelector("#erro");
var placarX = document.querySelector("#placarX");
var placarO = document.querySelector("#placarO");
var contX = 0;
var contO = 0;

btnComecar.onclick = function () {

    erro.innerHTML = '';

    switch (modo.value) {

        //SINGLEPLAYER
        case 'Singleplayer':
            erro.className = '';

            

            break;

        //MULTIPLAYER
        case 'Multiplayer':
            erro.className = '';

            

            break;

        //DEFAULT ERRO
        default:
            erro.appendChild(document.createTextNode("Erro! Selecione um modo de jogo!"));
            erro.className = 'alert alert-danger mx-auto w-50 text-center d-block mt-3';

    }

};