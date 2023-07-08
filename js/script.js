/*Dark mode*/

const bdark = document.querySelector ("#bdark");
const nav = document.querySelector ("nav");
const body = document.querySelector ("body");
const conteiner = document.querySelector ("conteiner")
bdark.addEventListener('click', e =>{
    body.classList.toggle("darkmode");
    nav.classList.toggle("darkmode");

})

/*Botón de la info del creador*/

function Info() {alert("Hola soy Maxi Yerio el creador de esta pagina, de paso les dejo mis de redes");
["Instagram: maxi.yerio", 
"mail: Yeriomaxi11@gmail.com por si quieren enviar una sugerencia"
].forEach(alert);
}

/*Auto reproduccion de musica de fondo*/

var audio = document.getElementById("audio");
var playPauseBtn = document.getElementById("pause");

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.innerHTML;
    var ruta = "./icons/pause.png";
  } else {
    audio.pause();
    playPauseBtn.innerHTML;
    var ruta = "./icons/pause.png";
  }
}