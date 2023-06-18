var reproductor = document.getElementById("Reproductor");
var titulo = document.getElementById("ReproductorTitulo");
var episodeo = document.getElementById("Episodeo");

var TituloAnime = localStorage.getItem('TituloAnime');
console.log('ID del enlace clickeado:', TituloAnime);

if (TituloAnime != null) {
    if (TituloAnime == "OnePiece") {
        reproductor.src = "videos/OnePiece.mp4";
        titulo.textContent = "One Piece";
        episodeo.textContent = "Episodeo - X";

    } else if(TituloAnime == "Shingeki"){
        reproductor.src = "./videos/Shingeki.mp4";
        titulo.textContent = "Shingeki no Kyojin: The Final Season Part 2";
        episodeo.textContent = "Episodeo - X";

    } else if(TituloAnime == "BlackClover"){
        reproductor.src = "./videos/BlackClover.mp4";
        titulo.textContent = "Black Clover";
        episodeo.textContent = "Episodeo - X";

    } else if(TituloAnime == "ChainsawMan"){
        reproductor.src = "./videos/ChainsawMan.mp4";
        titulo.textContent = "Chainsaw Man";
        episodeo.textContent = "Episodeo - X";

    } else if(TituloAnime == "JujutsuKaisen"){
        reproductor.src = "./videos/JujutsuKaisen.mp4";
        titulo.textContent = "Jujutsu Kaisen";
        episodeo.textContent = "Episodeo - X";

    } else if(TituloAnime == "Kimetsu"){
        reproductor.src = "./videos/kimetsu.mp4";
        titulo.textContent = "Kimetsu no Yaiba: Yuukaku-hen";
        episodeo.textContent = "Episodeo - X";

    } else if(TituloAnime == "BNH"){
        reproductor.src = "./videos/BNH.mp4";
        titulo.textContent = "Boku no Hero Academia 6th Season";
        episodeo.textContent = "Episodeo - X";

    } else if(TituloAnime == "HxH"){
        reproductor.src = "./videos/HxH.mp4";
        titulo.textContent = "Hunter x Hunter";
        episodeo.textContent = "Episodeo - X";

    } else if(TituloAnime == "KamiNoTou"){
        reproductor.src = "./videos/KamiNoTou.mp4";
        titulo.textContent = "Kami no Tou: Tower of God";
        episodeo.textContent = "Episodeo - X";

    } else if(TituloAnime == "Mushoku"){
        reproductor.src = "./videos/Mushoku.mp4";
        titulo.textContent = "Mushoku Tensei: Isekai Ittara Honki Dasu";
        episodeo.textContent = "Episodeo - X";

    } else if(TituloAnime == "BlueLock"){
        reproductor.src = "./videos/BlueLock.mp4";
        titulo.textContent = "Blue Lock";
        episodeo.textContent = "Episodeo - X";

    } else if(TituloAnime == "Kaguya"){
        reproductor.src = "./videos/kaguya.mp4";
        titulo.textContent = "Kaguya-sama wa Kokurasetai";
        episodeo.textContent = "Episodeo - X";

    }
}

var menu = document.getElementById("menu");
    var estado = false;

    function desplegar() {
        if(estado == false){
            menu.style.display = "block";
            estado = true;
        } else{
            menu.style.display = "none";  
            estado = false;
        }
      }