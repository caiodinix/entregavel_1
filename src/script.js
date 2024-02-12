function Calculadora(numero1, numero2, operador) {
  let num1 = Number(numero1);
  let num2 = Number(numero2);
  let resultado;
  let contador = 1

  switch (operador) {
    case "+":
      resultado = num1 + num2
      break;
    case "-":
      resultado = num1 - num2
      break;
    case "*":
      resultado = num1 * num2
      break;
    case "/":
      resultado = num1 / num2
      break;
    case "e":
      resultado = num1
      if (num2 == 0) {
        resultado = 1
      } else {
          for (contador; contador < num2; contador ++) {
            resultado *= num1
          }
        }
  }
  if  (resultado == undefined || resultado > 1000000) {
    resultado = "ERRO";
  }
  return resultado;
}

let visor = document.getElementById("visor");

function adicionar(tecla) {
  visor.value = visor.value + tecla;
}

function limpezatotal() {
  visor.value = "";
}

function calcular() {
  let numeros = visor.value.split(/[^0-9]/)
  let operadores = visor.value.split(/[0-9]/)
  let operador
  operadores.forEach(x => {
    if (x != "")
      operador = x
  });

  visor.value = Calculadora(numeros[0], numeros[1], operador)
}