var texto = document.querySelector(".titulo b").innerHTML;
document.querySelector(".titulo b").innerHTML = "";
var atraso = 200;
var textoElemento = document.querySelector(".titulo b");


var contadorDeLetras = 0;
function escreverTexto() {
  if (contadorDeLetras < texto.length) {
    textoElemento.textContent += texto.charAt(contadorDeLetras);
    contadorDeLetras++;
    setTimeout(escreverTexto, atraso);
  }
}

escreverTexto();