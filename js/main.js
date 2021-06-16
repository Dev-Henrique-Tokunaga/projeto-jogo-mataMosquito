let largura = 0
let altura = 0
let vidas = 1
let tempo = 10


let criaMosqTempo = 1500

let nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
    criaMosqTempo = 1500
} else if (nivel === 'dificil') {
    criaMosqTempo = 1000
} else if (nivel === 'impossivel') {
    criaMosqTempo = 750
}

function redimencionarTela() {
    largura =  window.innerWidth
    altura = window.innerHeight
}
redimencionarTela()

let cronometro = setInterval(function() {
    tempo -= 1
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo   
    }
}, 1000) 

function posXYRandom() {
    let idMosq = document.getElementById('mosquito')
    if (idMosq) {
        idMosq.remove()
        if (vidas > 5) {
            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById('c' + vidas).src = 'img/coracao_vazio.png'
            vidas++ 
        }
    } 
    

    let posX = Math.floor(Math.random() * largura) -180
    let posY = Math.floor(Math.random() * altura) -180

    posX = posX < 0 ? 0 : posX
    posY = posY < 0 ? 0 : posY

    let img_mosquito = document.createElement('img')
    img_mosquito.src = 'img/mosca.png'
    img_mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    img_mosquito.style.left = posX + 'px'
    img_mosquito.style.top = posY + 'px'
    img_mosquito.style.position = 'absolute'
    img_mosquito.id = 'mosquito'
    img_mosquito.onclick = function() {
        this.remove()
    }

    document.body.append(img_mosquito)
}

function tamanhoAleatorio() {
    let classeMosq = Math.floor(Math.random() * 3)

    switch(classeMosq) {
        case 0: 
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio() {
    let classeLadoAlea = Math.floor(Math.random() * 2)

    switch(classeLadoAlea) {
        case 0: 
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}



