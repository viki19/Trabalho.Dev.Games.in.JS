var modo = document.querySelector("#select");
var btnComecar = document.querySelector("#btnComecar");
var erro = document.querySelector("#erro");
var x = document.querySelector("#radio1");
var o = document.querySelector("#radio2");
var radio = document.querySelector("#radio");

btnComecar.onclick = function () {

    erro.innerHTML = '';

    switch (modo.value) {

        case 'Singleplayer': //SINGLEPLAYER

            erro.className = '';

            if (radio1.checked){



            } else if (radio2.checked){



            } else {
                
                erro.appendChild(document.createTextNode("Erro! Selecione 'X' ou 'O' para prosseguir!"));
                erro.className = 'alert alert-danger mx-auto w-50 text-center d-block mt-3'

            }

            break;
        case 'Multiplayer': //MULTIPLAYER

            erro.className = '';

            if (radio1.checked){

                function selecionar(){

                    var sel = document.getElementsByClassName('col').style.backgroud-color = 'red';
                    //ajustar efeito hover através de JS

                }

                });


            } else if (radio2.checked){



            } else {
                
                erro.appendChild(document.createTextNode("Erro! Selecione 'X' ou 'O' para prosseguir!"));
                erro.className = 'alert alert-danger mx-auto w-50 text-center d-block mt-3'

            }

            break;
        default: //DEFAULT
            erro.appendChild(document.createTextNode('Erro! Selecione um modo de jogo para prosseguir!'));
            erro.className = 'alert alert-danger mx-auto w-50 text-center d-block mt-3';
    }

};