var id;

var enlaces = document.getElementsByTagName('a');
    for (var i = 0; i < enlaces.length; i++) {
        enlaces[i].addEventListener('click', function(event) {
            // Evita que se siga el enlace normalmente
            //event.preventDefault();
            
            // Obtiene el ID del enlace clickeado
            id = this.id;
            
            // Puedes hacer lo que desees con el ID, por ejemplo, mostrarlo en la consola
            console.log('ID del enlace clickeado:', id);
            localStorage.setItem('TituloAnime',id);
            // Redirige a la URL del enlace si es necesario
            // window.location.href = this.href;
        });
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