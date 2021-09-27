var cartas = [
    viuva_negra = {
        nome: "Viúva Negra",
        imagem: "https://uploads.metropoles.com/wp-content/uploads/2021/03/23164246/viuva-negra-3.jpg",
        atributos : {
            forca: 4,
            poder: 0,
            agilidade: 9,
        }
    },
    capita_marvel = {
        nome: "Capitâ Marvel",
        imagem: "https://s2.glbimg.com/7dnrun_eiBNA_Ln0_siH6_9UdlE=/top/i.glbimg.com/og/ig/infoglobo1/f/original/2019/03/08/capita.jpg",
        atributos : {
            forca: 9,
            poder: 8,
            agilidade: 5,
        }
    },
    pepper_potts = {
        nome: "Pepper Potts",
        imagem: "https://wallpaperaccess.com/full/2110239.jpg",
        atributos : {
            forca: 4,
            poder: 5,
            agilidade: 4,
        }
    },
    feiticeira_escarlate = {
        nome: "Feiticeira Escarlate",
        imagem: "https://epipoca.com.br/wp-content/uploads/2020/12/feiticeira-escarlate.jpeg",
        atributos : {
            forca: 3,
            poder: 10,
            agilidade: 6,
        }
    },
    gamora = {
        nome: "Gamora",
        imagem: "https://img.quizur.com/f/img5f3585f05502b6.72897926.jpg?lastEdited=1597343221",
        atributos : {
            forca: 5,
            poder: 0,
            agilidade: 10,
        }
    },
    mulher_thor = {
        nome: "Mulher Thor",
        imagem: "https://uploads.jovemnerd.com.br/wp-content/uploads/2019/07/thor-4-mulher-760x428.png",
        atributos : {
            forca: 7,
            poder: 10,
            agilidade: 6,
        }
    },
    mulher_hulk = {
        nome: "Mulher Hulk",
        imagem: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/07/mulher-hulk-she-hulk-1200x900-foto-hq.jpg",
        atributos : {
            forca: 10,
            poder: 10,
            agilidade: 4,
        }
    },
    mulher_invisivel = {
        nome: "Mulher Invisível",
        imagem: "https://i.pinimg.com/originals/1e/6a/3a/1e6a3ae186858c89bea11085b404b152.jpg",
        atributos : {
            forca: 6,
            poder: 10,
            agilidade: 7,
        }
    },
    wolverina = {
        nome: "X-23",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/3/36/Laura_Kinney.jpg",
        atributos : {
            forca: 10,
            poder: 8,
            agilidade: 5,
        }
    },
    shuri = {
        nome: "Shuri",
        imagem: "https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2020/10/legiao_VEuizFa_XA72.png.jpeg",
        atributos : {
            forca: 4,
            poder: 0,
            agilidade: 8,
        }
    }
];

var cartaMaquina;
var cartaPlayer;

function sortearCarta() { //sorteando numero aleatoria, procurando esse indice na array
    var numeroCartaMaquina = parseInt(Math.random() * 10);
    cartaMaquina = cartas[numeroCartaMaquina];

    var numeroCartaPlayer = parseInt(Math.random() * 10);
    while (numeroCartaMaquina == numeroCartaPlayer) {
        numeroCartaPlayer = parseInt(Math.random() * 10);
    }
    cartaPlayer = cartas[numeroCartaPlayer];

    console.log(cartaPlayer);
    console.log(cartaMaquina)

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirCartasPlayer()
}

function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes")
    var opcoesTexto = ""

    for (var atributo in cartaPlayer.atributos) {
    opcoesTexto += "<input type='radio'name='atributo' value='"+ atributo + "'>" + atributo;
    }
    opcoes.innerHTML = opcoesTexto
}

function obtemAtributoSelecionado () {
    var radioSelecionado = document.getElementsByName("atributo");

    for (var i = 0; i < radioSelecionado.length; i++) {
        if (radioSelecionado[i].checked){
return radioSelecionado[i].value
        }
    }
}
function jogar () {
    var atributoSelecionado = obtemAtributoSelecionado ()
    var elementoResultado = document.getElementById("resultado")
    var valorCartaPlayer = cartaPlayer.atributos[atributoSelecionado]
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]
    
    if(valorCartaPlayer > valorCartaMaquina) {
        htmlResultado = "<p class='resultado-final'>Venceu</p>"
    } else if (valorCartaMaquina > valorCartaPlayer) {
        htmlResultado = "<p class='resultado-final'>Perdeu</p>"
    }else {
        htmlResultado = "<p class='resultado-final'>Empate</p>"
    }
    elementoResultado.innerHTML = htmlResultado

    document.getElementById("btnSortear").disabled = false;
    document.getElementById("btnJogar").disabled = true;

    exibirCartaMaquina()
}
function exibirCartasPlayer() {
    var divCartaPlayer = document.getElementById("carta-jogador")
    divCartaPlayer.style.backgroundImage=`url(${cartaPlayer.imagem})`
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';

    var tagHTML = "<div id='opcoes' class='carta-status'>"

    var opcoesTexto = ""

    for (var atributo in cartaPlayer.atributos) {
    opcoesTexto += "<input type='radio'name='atributo' value='"+ atributo + "'>" + atributo + " " + cartaPlayer.atributos[atributo] + "<br>";
    var nome = `<p class="carta-subtitle">${cartaPlayer.nome}</p>`
    }
    divCartaPlayer.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"

}
function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';

    var tagHTML = "<div id='opcoes' class='carta-status'>"

    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
    opcoesTexto += "<p type='radio' name='atributo' value='"+ atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    }
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"

}