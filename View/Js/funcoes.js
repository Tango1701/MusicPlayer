
var Musica = () => document.location.href = "/MULTIMIDIA/View/music.html"
var Video = () => document.location.href = "/MULTIMIDIA/View/video.html"
var Filme = () => document.location.href = "/MULTIMIDIA/View/filme.html"

window.onload = () => {
    const listaReproducao = document.getElementById("listaReproducao")
    const lista = listaReproducao.children

    const musicas = document.getElementById("musicas")
    
    lista[0].setAttribute("id", "/MULTIMIDIA/View/Audio/Pitt Kelson - Chefe Em Casa Não tem Pão.mp3")
    lista[0].innerHTML = "Pitt Kelson - Chefe Em Casa Não tem Pão.mp3"

    lista[1].setAttribute("id", "/MULTIMIDIA/View/Audio/Os Regale - ATORMENTO.mp3")
    lista[1].innerHTML = "Os Regale - ATORMENTO.mp3"

    lista[2].setAttribute("id", "/MULTIMIDIA/View/Audio/Anacleto NK - Nos Somos Bandidos.mp3")
    lista[2].innerHTML = "Anacleto NK - Nos Somos Bandidos.mp3"

    lista[3].setAttribute("id", "/MULTIMIDIA/View/Audio/Tudo de Novo - Eva Rapdiva Feat Gerilson Insrael .mp3")
    lista[3].innerHTML = "Tudo de Novo - Eva Rapdiva Feat Gerilson Insrael .mp3"

    lista[4].setAttribute("id", "/MULTIMIDIA/View/Audio/Post Malone - Wow.mp3")
    lista[4].innerHTML = "Post Malone - Wow.mp3"

    var titulo = document.getElementById("titulo")

    for (const key in lista) {
        if (Object.hasOwnProperty.call(lista, key)) {
            const item = lista[key];
            item.onclick = function () {
                musicas.setAttribute("src", item.getAttribute("id"))
                musicas.setAttribute("autoplay", "true")
                titulo.innerHTML = item.innerHTML
          }
            
        }
    }

}

function carrega(){
    const musicas = document.getElementById("musicas")
    var progressBar = document.getElementById("progresso")
    progressBar.style.width = ((musicas.currentTime/musicas.duration) *100)+"%"

}
