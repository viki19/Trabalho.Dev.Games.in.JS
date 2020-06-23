var modo = document.querySelector("#select");
var btnComecar = document.querySelector("#btnComecar");
var erro = document.querySelector("#erro");
var x = document.querySelector("#radio1");
var o = document.querySelector("#radio2");
var radio = document.querySelector("#radio");

btnComecar.onclick = function () {

    erro.innerHTML = '';

    switch (modo.value) {

        //SINGLEPLAYER
        case 'Singleplayer':
            erro.className = '';

            //VERIFICAÇÃO DO RADIO.CHECK
            if (radio1.checked) {

                /* var col = document.querySelector(".col");
                var img = document.createElement('img');
                img.src = "img/x.png";
                img.style.width = "150px";
                img.className = 'd-block mx-auto'
                col.appendChild(img);
                img = 'img.x.png'; */


            } else if (radio2.checked) {



            } else {
                erro.appendChild(document.createTextNode("Erro! Selecione 'X' ou 'O' para prosseguir!"));
                erro.className = 'alert alert-danger mx-auto w-50 text-center d-block mt-3';
            }

            break;

        //MULTIPLAYER
        case 'Multiplayer':
            erro.className = '';

            //VERIFICAÇÃO DO RADIO.CHECK
            if (radio1.checked) {



            } else if (radio2.checked) {



            } else {
                erro.appendChild(document.createTextNode("Erro! Selecione 'X' ou 'O' para prosseguir!"));
                erro.className = 'alert alert-danger mx-auto w-50 text-center d-block mt-3';
            }

            break;

        //DEFAULT ERRO
        default:
            erro.appendChild(document.createTextNode("Erro! Selecione um modo de jogo!"));
            erro.className = 'alert alert-danger mx-auto w-50 text-center d-block mt-3';

    }

};