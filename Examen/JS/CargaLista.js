var portada = document.getElementById("PortadaAnime");
var titulo = document.getElementById("TituloAnime");
var sinopsis = document.getElementById("SinopsisAnime");

var ep1 = document.getElementById("Ep01");
var ep2 = document.getElementById("Ep02");
var ep3 = document.getElementById("Ep03");
var ep4 = document.getElementById("Ep04");
var ep5 = document.getElementById("Ep05");
var ep6 = document.getElementById("Ep06");
var ep7 = document.getElementById("Ep07");
var ep8 = document.getElementById("Ep08");
var ep9 = document.getElementById("Ep09");
var ep10 = document.getElementById("Ep10");
var ep11 = document.getElementById("Ep11");
var ep12 = document.getElementById("Ep12");

var TituloAnime = localStorage.getItem('TituloAnime');
console.log('ID del enlace clickeado:', TituloAnime);

    if (TituloAnime != null) {
        if (TituloAnime == "OnePiece") {
            portada.src = "./imagenes/one-piece.jpg";
            titulo.textContent = "One Piece";
            sinopsis.textContent = "Gol D. Roger era conocido como el \"Rey Pirata\", el ser más fuerte e infame que había navegado en Grand Line. La captura y ejecución de Roger por parte del Gobierno Mundial trajo un cambio en todo el mundo. Sus últimas palabras antes de su muerte revelaron la existencia del mayor tesoro del mundo, One Piece. Fue esta revelación la que provocó la Gran Edad de los Piratas, hombres que soñaban con encontrar One Piece, que promete una cantidad ilimitada de riquezas y fama, y ​​posiblemente el pináculo de la gloria y el título del Rey Pirata. Ingrese Monkey D. Luffy, un niño de 17 años que desafía su definición estándar de pirata. En lugar de ser el personaje popular de un pirata malvado, endurecido y sin dientes que saquea aldeas por diversión, la razón de Luffy para ser un pirata es pura maravilla: la idea de una aventura emocionante que lo lleva a personas intrigantes y, en última instancia, el tesoro prometido. Siguiendo los pasos de su héroe de la infancia, Luffy y su tripulación viajan a través de Grand Line, experimentando aventuras locas, descubriendo misterios oscuros y luchando contra enemigos fuertes, todo para alcanzar la fortuna más codiciada: One Piece.";
            ep1.src = "./imagenes/one-piece.jpg";
            ep2.src = "./imagenes/one-piece.jpg";
            ep3.src = "./imagenes/one-piece.jpg";
            ep4.src = "./imagenes/one-piece.jpg";
            ep5.src = "./imagenes/one-piece.jpg";
            ep6.src = "./imagenes/one-piece.jpg";
            ep7.src = "./imagenes/one-piece.jpg";
            ep8.src = "./imagenes/one-piece.jpg";
            ep9.src = "./imagenes/one-piece.jpg";
            ep10.src = "./imagenes/one-piece.jpg";
            ep11.src = "./imagenes/one-piece.jpg";
            ep12.src = "./imagenes/one-piece.jpg";
        } else if(TituloAnime == "Shingeki"){
            portada.src = "./imagenes/shingeki-no-kyojin-the-final-season-part-2.jpg";
            titulo.textContent = "Shingeki no Kyojin: The Final Season Part 2";
            sinopsis.textContent = "Aquel día, la humanidad recibió un triste recordatorio. Vivíamos asustados de los titanes y caímos en la deshonra de vivir en aquellas cajas que llamamos muros. La humanidad vive dentro de tres murallas para protegerse de los titanes, y sólo una pequeña fuerza de reconocimiento se aventura fuera de estos para buscar conquistar nuevos territorios.";
            ep1.src = "./imagenes/shingeki-no-kyojin-the-final-season-part-2.jpg";
            ep2.src = "./imagenes/shingeki-no-kyojin-the-final-season-part-2.jpg";
            ep3.src = "./imagenes/shingeki-no-kyojin-the-final-season-part-2.jpg";
            ep4.src = "./imagenes/shingeki-no-kyojin-the-final-season-part-2.jpg";
            ep5.src = "./imagenes/shingeki-no-kyojin-the-final-season-part-2.jpg";
            ep6.src = "./imagenes/shingeki-no-kyojin-the-final-season-part-2.jpg";
            ep7.src = "./imagenes/shingeki-no-kyojin-the-final-season-part-2.jpg";
            ep8.src = "./imagenes/shingeki-no-kyojin-the-final-season-part-2.jpg";
            ep9.src = "./imagenes/shingeki-no-kyojin-the-final-season-part-2.jpg";
            ep10.src = "./imagenes/shingeki-no-kyojin-the-final-season-part-2.jpg";
            ep11.src = "./imagenes/shingeki-no-kyojin-the-final-season-part-2.jpg";
            ep12.src = "./imagenes/shingeki-no-kyojin-the-final-season-part-2.jpg";
        } else if(TituloAnime == "BlackClover"){
            portada.src = "./imagenes/black-clover.jpg";
            titulo.textContent = "Black Clover";
            sinopsis.textContent = "Cuando la humanidad estaba a punto de caer por el Rey Demonio, un único mago la salvó y lo derrotó. Más tarde ese mago se convirtió en una leyenda y fue nombrado rey mago. Después de ese suceso, el Reino del Trébol gozó de paz a través de generaciones de reyes magos y nueve órdenes mágicas sobordinándolos. Asta y Yuno son huérfanos que fueron criados juntos desde su nacimiento después de ser abandonados en un orfanato de la iglesia de Hage, ubicada en la zona olvidada del Reino del Trébol al mismo tiempo. En un mundo donde todos tienen Poder Mágico, cuya habilidad de controlarlo es de manera natural; Asta es la única persona nacida sin magia, lo que lo lleva a entrenar físicamente como compensación. Por el contrario, Yuno nació como un prodigio con un inmenso poder mágico y el talento para controlarlo.";
            ep1.src = "./imagenes/black-clover.jpg";
            ep2.src = "./imagenes/black-clover.jpg";
            ep3.src = "./imagenes/black-clover.jpg";
            ep4.src = "./imagenes/black-clover.jpg";
            ep5.src = "./imagenes/black-clover.jpg";
            ep6.src = "./imagenes/black-clover.jpg";
            ep7.src = "./imagenes/black-clover.jpg";
            ep8.src = "./imagenes/black-clover.jpg";
            ep9.src = "./imagenes/black-clover.jpg";
            ep10.src = "./imagenes/black-clover.jpg";
            ep11.src = "./imagenes/black-clover.jpg";
            ep12.src = "./imagenes/black-clover.jpg";
        } else if(TituloAnime == "ChainsawMan"){
            portada.src = "./imagenes/chainsaw-man.jpg";
            titulo.textContent = "Chainsaw Man";
            sinopsis.textContent = "Denji es un adolescente que vive con un demonio motosierra llamado Pochita. Debido a la deuda que dejó su padre, ha estado viviendo una vida por los suelos mientras paga su deuda recolectando cadáveres de demonios con Pochita. Un día, Denji es traicionado y asesinado. A medida que su conciencia se desvanece, hace un contrato con Pochita y revive como Chainsaw Man, un hombre con un corazón de diablo.";
            ep1.src = "./imagenes/chainsaw-man.jpg";
            ep2.src = "./imagenes/chainsaw-man.jpg";
            ep3.src = "./imagenes/chainsaw-man.jpg";
            ep4.src = "./imagenes/chainsaw-man.jpg";
            ep5.src = "./imagenes/chainsaw-man.jpg";
            ep6.src = "./imagenes/chainsaw-man.jpg";
            ep7.src = "./imagenes/chainsaw-man.jpg";
            ep8.src = "./imagenes/chainsaw-man.jpg";
            ep9.src = "./imagenes/chainsaw-man.jpg";
            ep10.src = "./imagenes/chainsaw-man.jpg";
            ep11.src = "./imagenes/chainsaw-man.jpg";
            ep12.src = "./imagenes/chainsaw-man.jpg";
        } else if(TituloAnime == "JujutsuKaisen"){
            portada.src = "./imagenes/jujutsu-kaisen.jpg";
            titulo.textContent = "Jujutsu Kaisen";
            sinopsis.textContent = "Un niño lucha... por la muerte justa. Dificultad, arrepentimiento, vergüenza: los sentimientos negativos que sentimos los humanos se convierten en Maldiciones que acechan en nuestra vida diaria. Las maldiciones corren desenfrenadas por todo el mundo, capaces de llevar a la gente a una terrible desgracia e incluso a la muerte. Además, las maldiciones solo pueden ser exorcizadas por otra maldición. Itadori Yuji es un chico con una fuerza física tremenda, aunque vive una vida de escuela secundaria completamente normal. Un día, para salvar a un amigo que ha sido atacado por Maldiciones, se come el dedo del Espectro de Doble Cara, llevándose la Maldición a su propia alma. A partir de entonces, comparte un cuerpo con el Espectro de Doble Cara. Guiado por el más poderoso de los hechiceros, Gojo Satoru, Itadori es admitido en la Escuela Superior Técnica Metropolitana de Hechicería de Tokio, una organización que lucha contra las maldiciones ... y así comienza la heroica historia de un niño que se convirtió en una maldición para exorcizar una maldición. , una vida de la que nunca podría volver atrás.";
            ep1.src = "./imagenes/jujutsu-kaisen.jpg";
            ep2.src = "./imagenes/jujutsu-kaisen.jpg";
            ep3.src = "./imagenes/jujutsu-kaisen.jpg";
            ep4.src = "./imagenes/jujutsu-kaisen.jpg";
            ep5.src = "./imagenes/jujutsu-kaisen.jpg";
            ep6.src = "./imagenes/jujutsu-kaisen.jpg";
            ep7.src = "./imagenes/jujutsu-kaisen.jpg";
            ep8.src = "./imagenes/jujutsu-kaisen.jpg";
            ep9.src = "./imagenes/jujutsu-kaisen.jpg";
            ep10.src = "./imagenes/jujutsu-kaisen.jpg";
            ep11.src = "./imagenes/jujutsu-kaisen.jpg";
            ep12.src = "./imagenes/jujutsu-kaisen.jpg";
        } else if(TituloAnime == "Kimetsu"){
            portada.src = "./imagenes/kimetsu-no-yaiba-yuukaku-hen.jpg";
            titulo.textContent = "Kimetsu no Yaiba: Yuukaku-hen";
            sinopsis.textContent = "Tanjiro y sus amigos acompañan al Hashira Tengen Uzui a un distrito de entretenimiento donde las agentes ninja de Tengen estaban reuniendo información sobre un demonio antes de que desaparecieran repentinamente. ¡Para investigar, Tanjiro y los demás se disfrazan de mujeres para colarse! Mientras se acercan a su objetivo, ¡el demonio se acerca a las cortesanas del distrito!";
            ep1.src = "./imagenes/kimetsu-no-yaiba-yuukaku-hen.jpg";
            ep2.src = "./imagenes/kimetsu-no-yaiba-yuukaku-hen.jpg";
            ep3.src = "./imagenes/kimetsu-no-yaiba-yuukaku-hen.jpg";
            ep4.src = "./imagenes/kimetsu-no-yaiba-yuukaku-hen.jpg";
            ep5.src = "./imagenes/kimetsu-no-yaiba-yuukaku-hen.jpg";
            ep6.src = "./imagenes/kimetsu-no-yaiba-yuukaku-hen.jpg";
            ep7.src = "./imagenes/kimetsu-no-yaiba-yuukaku-hen.jpg";
            ep8.src = "./imagenes/kimetsu-no-yaiba-yuukaku-hen.jpg";
            ep9.src = "./imagenes/kimetsu-no-yaiba-yuukaku-hen.jpg";
            ep10.src = "./imagenes/kimetsu-no-yaiba-yuukaku-hen.jpg";
            ep11.src = "./imagenes/kimetsu-no-yaiba-yuukaku-hen.jpg";
            ep12.src = "./imagenes/kimetsu-no-yaiba-yuukaku-hen.jpg";
        } else if(TituloAnime == "BNH"){
            portada.src = "./imagenes/boku-no-hero-academia-6th-season.jpg";
            titulo.textContent = "Boku no Hero Academia 6th Season";
            sinopsis.textContent = "Midoriya Izuku es un joven que vive en un mundo donde los héroes existen, y es una profesión como todas las demás, gracias a las particularidades. El sueño de nuestro protagonista es ser como el héroe al que más admira, pero Midoriya no tiene ninguna particularidad, truncando su sueño, hasta que cierto día tiene un encuentro con alguien que cambiará su destino.";
            ep1.src = "./imagenes/boku-no-hero-academia-6th-season.jpg";
            ep2.src = "./imagenes/boku-no-hero-academia-6th-season.jpg";
            ep3.src = "./imagenes/boku-no-hero-academia-6th-season.jpg";
            ep4.src = "./imagenes/boku-no-hero-academia-6th-season.jpg";
            ep5.src = "./imagenes/boku-no-hero-academia-6th-season.jpg";
            ep6.src = "./imagenes/boku-no-hero-academia-6th-season.jpg";
            ep7.src = "./imagenes/boku-no-hero-academia-6th-season.jpg";
            ep8.src = "./imagenes/boku-no-hero-academia-6th-season.jpg";
            ep9.src = "./imagenes/boku-no-hero-academia-6th-season.jpg";
            ep10.src = "./imagenes/boku-no-hero-academia-6th-season.jpg";
            ep11.src = "./imagenes/boku-no-hero-academia-6th-season.jpg";
            ep12.src = "./imagenes/boku-no-hero-academia-6th-season.jpg";
        } else if(TituloAnime == "HxH"){
            portada.src = "./imagenes/hunter-x-hunter-2011.jpg";
            titulo.textContent = "Hunter x Hunter";
            sinopsis.textContent = "En un mundo muy parecido al nuestro hay un grupo de personas más conocidas como Hunters. Los Hunters son personas preparadas para arriesgar su vida con el objetivo de encontrar nuevas especies u objetos raros o de gran valor. Para convertirse en Hunter, es necesario aprobar un examen al que se presentan miles de personas de las cuales tan sólo se seleccionarán unas pocas y que solo se celebra una vez al año. Gon Freecss siempre pensó que sus padres murieron en un accidente cuando el tan sólo era un bebé, pero un día en el bosque se encuentra con Kaito, un Hunter profesional. Kaito es un discípulo del padre de Gon: Ging Freecss, uno de los mejores Hunters profesionales. Desde ese momento, Gon entrena duramente durante tres años para presentarse al examen de Hunter y buscar a su padre. Gon tendrá que pasar unas pruebas muy duras, pero también conocerá a sus mejores amigos y algunos de sus peores enemigos.";
            ep1.src = "./imagenes/hunter-x-hunter-2011.jpg";
            ep2.src = "./imagenes/hunter-x-hunter-2011.jpg";
            ep3.src = "./imagenes/hunter-x-hunter-2011.jpg";
            ep4.src = "./imagenes/hunter-x-hunter-2011.jpg";
            ep5.src = "./imagenes/hunter-x-hunter-2011.jpg";
            ep6.src = "./imagenes/hunter-x-hunter-2011.jpg";
            ep7.src = "./imagenes/hunter-x-hunter-2011.jpg";
            ep8.src = "./imagenes/hunter-x-hunter-2011.jpg";
            ep9.src = "./imagenes/hunter-x-hunter-2011.jpg";
            ep10.src = "./imagenes/hunter-x-hunter-2011.jpg";
            ep11.src = "./imagenes/hunter-x-hunter-2011.jpg";
            ep12.src = "./imagenes/hunter-x-hunter-2011.jpg";
        } else if(TituloAnime == "KamiNoTou"){
            portada.src = "./imagenes/kami-no-tou-tower-of-god.png";
            titulo.textContent = "Kami no Tou: Tower of God";
            sinopsis.textContent = "Llega a la cima y todo será tuyo. En la cima de la torre existe todo en este mundo, y todo puede ser tuyo. Puedes convertirte en un dios. Esta es la historia del principio y el fin de Rachel, la niña que subió a la torre para poder ver las estrellas, y Bam, el niño que no necesitaba nada más que ella.";
            ep1.src = "./imagenes/kami-no-tou-tower-of-god.png";
            ep2.src = "./imagenes/kami-no-tou-tower-of-god.png";
            ep3.src = "./imagenes/kami-no-tou-tower-of-god.png";
            ep4.src = "./imagenes/kami-no-tou-tower-of-god.png";
            ep5.src = "./imagenes/kami-no-tou-tower-of-god.png";
            ep6.src = "./imagenes/kami-no-tou-tower-of-god.png";
            ep7.src = "./imagenes/kami-no-tou-tower-of-god.png";
            ep8.src = "./imagenes/kami-no-tou-tower-of-god.png";
            ep9.src = "./imagenes/kami-no-tou-tower-of-god.png";
            ep10.src = "./imagenes/kami-no-tou-tower-of-god.png";
            ep11.src = "./imagenes/kami-no-tou-tower-of-god.png";
            ep12.src = "./imagenes/kami-no-tou-tower-of-god.png";
        } else if(TituloAnime == "Mushoku"){
            portada.src = "./imagenes/mushoku-tensei-isekai-ittara-honki-dasu-2nd-cour.jpg";
            titulo.textContent = "Mushoku Tensei: Isekai Ittara Honki Dasu";
            sinopsis.textContent = "La historia sigue a un hombre de 34 años que muere después de intentar salvar a alguien de ser atropellado por un automóvil. Pronto se encuentra reencarnado en un mundo mágico como Ludeus Greyrat, excepto que reinicia toda su vida, comenzando como un bebé. Con todo su conocimiento de su vida anterior, y una nueva ayuda de habilidad mágica, Ludeus se convierte rápidamente en un guerrero formidable listo para la aventura. Oh, y sigue siendo un total pervertido.";
            ep1.src = "./imagenes/mushoku-tensei-isekai-ittara-honki-dasu-2nd-cour.jpg";
            ep2.src = "./imagenes/mushoku-tensei-isekai-ittara-honki-dasu-2nd-cour.jpg";
            ep3.src = "./imagenes/mushoku-tensei-isekai-ittara-honki-dasu-2nd-cour.jpg";
            ep4.src = "./imagenes/mushoku-tensei-isekai-ittara-honki-dasu-2nd-cour.jpg";
            ep5.src = "./imagenes/mushoku-tensei-isekai-ittara-honki-dasu-2nd-cour.jpg";
            ep6.src = "./imagenes/mushoku-tensei-isekai-ittara-honki-dasu-2nd-cour.jpg";
            ep7.src = "./imagenes/mushoku-tensei-isekai-ittara-honki-dasu-2nd-cour.jpg";
            ep8.src = "./imagenes/mushoku-tensei-isekai-ittara-honki-dasu-2nd-cour.jpg";
            ep9.src = "./imagenes/mushoku-tensei-isekai-ittara-honki-dasu-2nd-cour.jpg";
            ep10.src = "./imagenes/mushoku-tensei-isekai-ittara-honki-dasu-2nd-cour.jpg";
            ep11.src = "./imagenes/mushoku-tensei-isekai-ittara-honki-dasu-2nd-cour.jpg";
            ep12.src = "./imagenes/mushoku-tensei-isekai-ittara-honki-dasu-2nd-cour.jpg";
        } else if(TituloAnime == "BlueLock"){
            portada.src = "./imagenes/bluelock.png";
            titulo.textContent = "Blue Lock";
            sinopsis.textContent = "Después de una derrota desastrosa en la Copa del Mundo de 2018, el equipo de Japón lucha por reagruparse. Pero, ¿qué falta? Un Ace Striker absoluto, que puede guiarlos hacia la victoria. La Unión de Fútbol de Japón está empeñada en crear un delantero que tenga hambre de goles y sed de victoria, y que pueda ser el instrumento decisivo para darle la vuelta a un partido perdido... y para hacerlo, ha reunido a 300 de los mejores de Japón. y jugadores juveniles más brillantes. ¿Quién surgirá para liderar el equipo... y será capaz de superar en fuerza y ego a todos los que se interpongan en su camino?";
            ep1.src = "./imagenes/bluelock.png";
            ep2.src = "./imagenes/bluelock.png";
            ep3.src = "./imagenes/bluelock.png";
            ep4.src = "./imagenes/bluelock.png";
            ep5.src = "./imagenes/bluelock.png";
            ep6.src = "./imagenes/bluelock.png";
            ep7.src = "./imagenes/bluelock.png";
            ep8.src = "./imagenes/bluelock.png";
            ep9.src = "./imagenes/bluelock.png";
            ep10.src = "./imagenes/bluelock.png";
            ep11.src = "./imagenes/bluelock.png";
            ep12.src = "./imagenes/bluelock.png";
        } else if(TituloAnime == "Kaguya"){
            portada.src = "./imagenes/kaguya-sama-wa-kokurasetai-ultra-romantic.jpg";
            titulo.textContent = "Kaguya-sama wa Kokurasetai";
            sinopsis.textContent = "El presidente del consejo estudiantil, Miyuki Shirogane, y la vicepresidenta Kaguya Shinomiya parecen ser la pareja perfecta. Kaguya es la hija de un rico conglomerado familiar, y Miyuki es el mejor alumno de la escuela y es bien conocido en toda la prefectura. Aunque se gustan, son muy orgullosos como para confesar su amor, ya que creen que quien lo haga primero estará por debajo de quien reciba la confesión. La historia sigue sus múltiples esquemas para hacer que el otro se confiese.";
            ep1.src = "./imagenes/kaguya-sama-wa-kokurasetai-ultra-romantic.jpg";
            ep2.src = "./imagenes/kaguya-sama-wa-kokurasetai-ultra-romantic.jpg";
            ep3.src = "./imagenes/kaguya-sama-wa-kokurasetai-ultra-romantic.jpg";
            ep4.src = "./imagenes/kaguya-sama-wa-kokurasetai-ultra-romantic.jpg";
            ep5.src = "./imagenes/kaguya-sama-wa-kokurasetai-ultra-romantic.jpg";
            ep6.src = "./imagenes/kaguya-sama-wa-kokurasetai-ultra-romantic.jpg";
            ep7.src = "./imagenes/kaguya-sama-wa-kokurasetai-ultra-romantic.jpg";
            ep8.src = "./imagenes/kaguya-sama-wa-kokurasetai-ultra-romantic.jpg";
            ep9.src = "./imagenes/kaguya-sama-wa-kokurasetai-ultra-romantic.jpg";
            ep10.src = "./imagenes/kaguya-sama-wa-kokurasetai-ultra-romantic.jpg";
            ep11.src = "./imagenes/kaguya-sama-wa-kokurasetai-ultra-romantic.jpg";
            ep12.src = "./imagenes/kaguya-sama-wa-kokurasetai-ultra-romantic.jpg";
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