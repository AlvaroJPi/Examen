var Capitulo = localStorage.getItem('Capitulo');
console.log('ID del enlace clickeado:', Capitulo);

var TituloAnime = localStorage.getItem('TituloAnime');
console.log('ID del enlace clickeado:', TituloAnime);

  var cont = 1;
  var numero;

  if (Capitulo == "Cap1") {
    numero = 1;
  } else if (Capitulo == "Cap2") {
    numero = 2;
  } else if (Capitulo == "Cap3") {
    numero = 3;
  } else if (Capitulo == "Cap4") {
    numero = 4;
  } else if (Capitulo == "Cap5") {
    numero = 5;
  }

  var imagen = document.getElementById("imagen");
  var contador = document.getElementById("contador");
  var contador2 = document.getElementById("contador2");

  imagen.src = "Imagenes/"+TituloAnime+"/"+Capitulo+"/"+TituloAnime+" - "+numero+" -  ("+cont+").jpg";
  contador.textContent = "Pagina " + cont;
  contador2.textContent = "Pagina " + cont;

  function anterior() {
    if (cont >= 2) {
        var imagen = document.getElementById("imagen");
        var contador = document.getElementById("contador");
        var contador2 = document.getElementById("contador2");
        cont = (cont - 1)
        imagen.src = "Imagenes/"+TituloAnime+"/"+Capitulo+"/"+TituloAnime+" - "+numero+" -  ("+cont+").jpg";
        contador.textContent = "Pagina " + cont;
        contador2.textContent = "Pagina " + cont;
    }
  }
  
  function siguiente() {
    if (cont <100) {
      var imagen = document.getElementById("imagen");
      var contador = document.getElementById("contador");
      var contador2 = document.getElementById("contador2");
      cont = (cont + 1)
      imagen.src = "Imagenes/"+TituloAnime+"/"+Capitulo+"/"+TituloAnime+" - "+numero+" -  ("+cont+").jpg";
      contador.textContent = "Pagina " + cont;
      contador2.textContent = "Pagina " + cont;
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