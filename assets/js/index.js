const btnJugar = document.getElementById("btnJugar");
btnJugar.addEventListener("click", function (e) {
  e.preventDefault();
  jugar();
});
const piedra = document.getElementById("btnPiedra");
const papel = document.getElementById("btnPapel");
const tijera = document.getElementById("btnTijera");
piedra.addEventListener("click", function (e) {
  e.preventDefault();
  jugada(e.target.value);
});
papel.addEventListener("click", function (e) {
  e.preventDefault();
  jugada(e.target.value);
});
tijera.addEventListener("click", function (e) {
  e.preventDefault();
  jugada(e.target.value);
});
function jugada(opcion) {
  let opcionJugador = opcion;
  console.log("Tu opción es", opcion);
  return resultado;
}
function jugar() {
  let inputJuegos = document.getElementById("inputJuegos").value;
  let opciones = ["piedra", "papel", "tijera"];
  let resultadoRonda = "";
  let resultadoFinal = "";
  let marcadorJugador = 0;
  let marcadorComputadora = 0;
  let nroJuegos = Number(inputJuegos);
  let errorMsj = document.getElementById("error");
  if (nroJuegos <= 0) {
    errorMsj.textContent = "Ingresa un numero entre 1 y 10";
  }
  /* Bucle for que genera la cantidad de partidas ingresadas */
  for (let i = 0; i < nroJuegos; i++) {
    /* Jugada del jugador */
    opcionJugador = resultado;
    console.log(opcionJugador);
    /* Jugada de la maquina */
    let opcionComputadora =
      opciones[Math.floor(Math.random() * opciones.length)];
    /* Resultando de la ronda */
    let resultado = "";
    /* Reglas del juego */
    if (opcionJugador === opcionComputadora) {
      resultado = "Esta ronda es un Empate!";
    } else if (
      (opcionJugador === "piedra" && opcionComputadora === "tijera") ||
      (opcionJugador === "papel" && opcionComputadora === "piedra") ||
      (opcionJugador === "tijera" && opcionComputadora === "papel")
    ) {
      resultado = "Ganaste la ronda!";
      marcadorJugador++;
    } else {
      resultado = "La computadora gana la ronda!";
      marcadorComputadora++;
    }
    /* Alert de resultado inmediato de partida */
    alert(
      "Juego: " +
        (i + 1) +
        ". Seleccionaste: " +
        opcionJugador +
        ". La Computadora jugó: " +
        opcionComputadora +
        ". " +
        "\n" +
        resultado +
        "." +
        "\n"
    );

    /* Texto HTML del resumen de partidas */
    resultadoRonda +=
      "Juego: " +
      (i + 1) +
      ". Seleccionaste: " +
      opcionJugador +
      ". La Computadora jugó: " +
      opcionComputadora +
      ". " +
      "\n" +
      resultado +
      "." +
      "\n";
    document.getElementById("resultado").innerText = resultadoRonda;
  }
  /* Resultado final del juego */
  if (marcadorJugador > marcadorComputadora) {
    resultadoFinal = "El Jugador gana la partida!!!";
  } else if (marcadorJugador < marcadorComputadora) {
    resultadoFinal = "La computadora gana la partida!!";
  } else if (marcadorJugador === 0 && marcadorComputadora === 0) {
    resultadoFinal = "No hubo partida :(";
  } else {
    resultadoFinal = "La partida es un Empate!!";
  }
  document.getElementById("resultadoFinal").innerText = resultadoFinal;
}
