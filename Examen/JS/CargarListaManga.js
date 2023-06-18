var portada = document.getElementById("PortadaAnime");
var titulo = document.getElementById("TituloAnime");
var sinopsis = document.getElementById("SinopsisAnime");

var ep1 = document.getElementById("Cap1");
var ep2 = document.getElementById("Cap2");
var ep3 = document.getElementById("Cap3");
var ep4 = document.getElementById("Cap4");
var ep5 = document.getElementById("Cap5");


var TituloAnime = localStorage.getItem('TituloAnime');
console.log('ID del enlace clickeado:', TituloAnime);

    if (TituloAnime != null) {
        if (TituloAnime == "OnePiece") {
            portada.src = "./imagenes/op1.jpg";
            titulo.textContent = "One Piece";
            sinopsis.textContent = "Gol D. Roger era conocido como el \"Rey Pirata\", el ser más fuerte e infame que había navegado en Grand Line. La captura y ejecución de Roger por parte del Gobierno Mundial trajo un cambio en todo el mundo. Sus últimas palabras antes de su muerte revelaron la existencia del mayor tesoro del mundo, One Piece. Fue esta revelación la que provocó la Gran Edad de los Piratas, hombres que soñaban con encontrar One Piece, que promete una cantidad ilimitada de riquezas y fama, y ​​posiblemente el pináculo de la gloria y el título del Rey Pirata. Ingrese Monkey D. Luffy, un niño de 17 años que desafía su definición estándar de pirata. En lugar de ser el personaje popular de un pirata malvado, endurecido y sin dientes que saquea aldeas por diversión, la razón de Luffy para ser un pirata es pura maravilla: la idea de una aventura emocionante que lo lleva a personas intrigantes y, en última instancia, el tesoro prometido. Siguiendo los pasos de su héroe de la infancia, Luffy y su tripulación viajan a través de Grand Line, experimentando aventuras locas, descubriendo misterios oscuros y luchando contra enemigos fuertes, todo para alcanzar la fortuna más codiciada: One Piece.";
        } else if(TituloAnime == "BlueLock"){
            portada.src = "./imagenes/Blue1.png";
            titulo.textContent = "Blue Lock";
            sinopsis.textContent = "Después de una derrota desastrosa en la Copa del Mundo de 2018, el equipo de Japón lucha por reagruparse. Pero, ¿qué falta? Un Ace Striker absoluto, que puede guiarlos hacia la victoria. La Unión de Fútbol de Japón está empeñada en crear un delantero que tenga hambre de goles y sed de victoria, y que pueda ser el instrumento decisivo para darle la vuelta a un partido perdido... y para hacerlo, ha reunido a 300 de los mejores de Japón. y jugadores juveniles más brillantes. ¿Quién surgirá para liderar el equipo... y será capaz de superar en fuerza y ego a todos los que se interpongan en su camino?";
        } else if(TituloAnime == "Kaguya"){
            portada.src = "./imagenes/kg1.jpg";
            titulo.textContent = "Kaguya-sama wa Kokurasetai";
            sinopsis.textContent = "El presidente del consejo estudiantil, Miyuki Shirogane, y la vicepresidenta Kaguya Shinomiya parecen ser la pareja perfecta. Kaguya es la hija de un rico conglomerado familiar, y Miyuki es el mejor alumno de la escuela y es bien conocido en toda la prefectura. Aunque se gustan, son muy orgullosos como para confesar su amor, ya que creen que quien lo haga primero estará por debajo de quien reciba la confesión. La historia sigue sus múltiples esquemas para hacer que el otro se confiese.";
        } else if(TituloAnime == "OshiNoKo"){
            portada.src = "./imagenes/Oshi1.jpg";
            titulo.textContent = "Oshi No Ko";
            sinopsis.textContent = "Cuando una joven estrella embarazada aparece en la clínica médica rural de Gorou Amemiya, el médico se encarga de dar a luz de forma segura (y en secreto) al hijo de Ai Hoshino para que pueda regresar al escenario sin escándalos. Pero ninguna buena acción queda sin castigo, y en la víspera de su parto, se encuentra asesinado a manos del acosador engañado de Ai, ¡y posteriormente renace como el hijo de Ai, Aquamarine Hoshino! El brillo y el glamour del mundo del espectáculo ocultan la parte más oscura de la industria del entretenimiento, y amenazan con opacar el brillo de su estrella favorita. ¿Podrá ayudar a su nueva madre a llegar a lo más alto de las listas? ¿Y qué hará cuando ocurra un desastre impensable?";
        } else if(TituloAnime == "AssassinsPride"){
            portada.src = "./imagenes/ap1.jpg";
            titulo.textContent = "Assassins Pride";
            sinopsis.textContent = "En el mundo donde solo los aristócratas tienen el poder de luchar contra el monstruo: el maná, un joven llamado Kufa es enviado como tutor para encontrar el talento de Mareida, una chica molesta nacida en la familia de un duque. Si no tiene talento, asesínela. ese es el lado oscuro de su tarea.";
        } else if(TituloAnime == "FairyTail"){
            portada.src = "./imagenes/ft1.jpg";
            titulo.textContent = "Fairy Tail";
            sinopsis.textContent = "Fairy Tail cuenta la historia de un joven mago llamado Natsu en la búsqueda de su maestro y padre adoptivo Igneel que resulta ser un dragón. Por ello se unió a Fairy Tail, un gremio de magos que es famoso por los destrozos y daños que provocan en diversas ciudades (lo cual no debería ser así). El mundo de Fairy Tail gira alrededor de los magos (los cuales poco tienen que ver con la idea general del mago común) que realizan encargos a cambio de dinero, similar a un cazarecompensas. Natsu conoce a Lucy, una guapa muchacha cuyo sueño era ingresar a un gremio de magos, específicamente, a Fairy Tail, lo cual consigue gracias a la ayuda de Natsu. De ahí en adelante, la historia sigue los movimientos de esta pareja de magos los cuales se ven envueltos en un sin número de aventuras antes de conseguir la meta final de encontrar a Igneel.";
        } else if(TituloAnime == "OPM"){
            portada.src = "./imagenes/opm1.png";
            titulo.textContent = "One Punch Man";
            sinopsis.textContent = "La historia tiene lugar en una metrópolis ficticia conocida como Ciudad Z, en Japón. El mundo se ve invadido por extraños monstruos que aparecen misteriosamente y que causan numerosos desastres a la población. Saitama es un poderoso superhéroe calvo que derrota fácilmente a los monstruos u otros villanos con un único golpe de su puño. Debido a esto, Saitama ha encontrado aburrida su fuerza y siempre está tratando de encontrar rivales más poderosos que le puedan igualar.";
        } else if(TituloAnime == "TrinitySeven"){
            portada.src = "./imagenes/tr1.jpg";
            titulo.textContent = "Trinity Seven";
            sinopsis.textContent = "Arata Kasuga vivía una infancia normal junto a su mejor amiga y supuesta prima, Hijiri Kasuga, en un pequeño pueblo. Todo cambió el día del sol negro, cuando un mago apareció ante él. El sol negro destruyó la ciudad en la que vivía y a todos sus habitantes con ella. Sin embargo, su vida normal es reconstruida por un grimorio que Hijiri Kasuga le da antes de desaparecer. Al comienzo todo parece normal pero el protagonista empieza a sospechar cuando nota que el sol aún es negro. Entonces, una maga aparece ante él. Gracias a ella comprende que todo es falso y vuelve a ver la ciudad destruida. Esto le hace tomar la decisión de convertirse en mago.";
        }
    }

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
            localStorage.setItem('Capitulo',id);
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