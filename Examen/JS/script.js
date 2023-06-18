/*
var portada = document.getElementById("portada");

var boton = document.getElementById("boton");

var boton2 = document.getElementById("boton2");

boton2.addEventListener("click", function(){
    portada.src = "imagenes/Anime.jpg";
}); 

boton.addEventListener("click", function(){
    portada.src = "imagenes/Manga.jpg";
}); 
*/
 
  var imagenes = [
    "../HtmlManga/Imagenes/1/0.jpg",
    "../HtmlManga/Imagenes/1/01.png",
    "../HtmlManga/Imagenes/1/003.jpg",
    "../HtmlManga/Imagenes/1/04.png",
    "../HtmlManga/Imagenes/1/05.png",
    "../HtmlManga/Imagenes/1/06.png",
    "../HtmlManga/Imagenes/1/07.png",
    "../HtmlManga/Imagenes/1/08.png",
    "../HtmlManga/Imagenes/1/09 copia.png",
    "../HtmlManga/Imagenes/1/10.png"
  ];
  var indice = 0;
  var cont = 1;

  var imagen = document.getElementById("imagen");
  var contador = document.getElementById("contador");
  var contador2 = document.getElementById("contador2");

  function anterior() {
    if (cont >= 2) {
        var imagen = document.getElementById("imagen");
        var contador = document.getElementById("contador");
        var contador2 = document.getElementById("contador2");
        indice = (indice - 1);
        cont = (cont - 1)
        imagen.src = imagenes[indice];
        contador.textContent = "Pagina " + cont;
        contador2.textContent = "Pagina " + cont;
    }
  }
  
  function siguiente() {
    if (cont <10) {
      var imagen = document.getElementById("imagen");
      var contador = document.getElementById("contador");
      var contador2 = document.getElementById("contador2");
      indice = (indice + 1);
      cont = (cont + 1)
      imagen.src = imagenes[indice];
      contador.textContent = "Pagina " + cont;
      contador2.textContent = "Pagina " + cont;
    }
  }

  imagen.src = "../HtmlManga/imagenes/Manga/"+TituloAnime+"/"+Capitulo+"/Oshi no Ko - 1 ("+cont+").jpg";



  
  




    
