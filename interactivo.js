//Navegador burger
document.addEventListener('DOMContentLoaded', () => {

    // Obetener los elementos del navegador
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Revisar si hay elementos
    if ($navbarBurgers.length > 0) {
  
      // Agregar un click a cada elemento
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Obtener el target del atibuto "data-target"
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle en la clase "is-active" en  "navbar-burger" y"navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
  });
//Dibujo
var d = document.getElementById("dibujo");
var lienzo = d.getContext("2d");
var lineas = 34;
var i = 0;
var xi, yf;
//Ciclo de dibujo de lineas
for(i=0; i < lineas; i++){
  xi = 10 * i;
  yf = 340 - (i * 10);
  dibujarLinea(xi, 0, 0, yf);
}
//Dibujo de linea horizontal y vertical
dibujarLinea(1,1,1,340);
dibujarLinea(0,0,343,0);
//Función para iniciar y finalizar lineas de a cuerdo a coordenadas
function dibujarLinea(xinicial, yinicial, xfinal, yfinal){
  lienzo.beginPath();
  lienzo.strokeStyle = "white";
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
//Ampliar logos de habilidades
function grande(g){
  g.style.height = "140px";
  g.style.width = "140px";
//Ocultar texto
  var x = document.getElementById("habilidades");
  var y = document.getElementsByClassName("texto");
  for(var i = 0; i < y.length; i++){
    y[i].style.display = "none";
  }
  
}
//Logo normal
function normal(g){
  g.style.height = "128px";
  g.style.width = "128px";
//Monstar texto
  var x = document.getElementById("habilidades");
  var y = document.getElementsByClassName("texto");
  for(var i = 0; i < y.length; i++){
    y[i].style.display = "block";
  }
}
//Scroll contacto
window.addEventListener("scroll", function(){
  var animacion = document.getElementById("contacto");
  var posicion = animacion.getBoundingClientRect().top;
  var tamañoPantalla = window.innerHeight/3;

  if(posicion < tamañoPantalla){
    animacion.style.animation = "movimiento 3s ease-in-out";
  }
})



