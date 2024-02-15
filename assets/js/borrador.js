let btnJugar = document.getElementById("btnJugar");
btnJugar.addEventListener("click", function (e) {
  e.preventDefault();
  jugar();
});
function jugada() {
  
}
function jugar() {
  let opciones = ["piedra", "papel", "tijera"];
  let resultadoRonda = "";
  let resultadoFinal = "";
  let marcadorJugador = "";
  let marcadorComputadora = "";
  let i = 0;

  /* Evaluador de condición WHILE */
  for (let i = 0; i < nroJuegos; i++) {
    /* Jugada del jugador */
    let opcionJugador1 = document.getElementById(".btnPiedra");
    let opcionJugador2 = document.getElementById(".btnPapel");
    let opcionJugador3 = document.getElementById(".btnTijera");
    opcionJugador1.addEventListener("click", jugada)
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
    resultadoFinal = "El Jugador gana la partida!";
  } else if (marcadorJugador < marcadorComputadora) {
    resultadoFinal = "La computadora gana la partida";
  } else {
    resultadoFinal = "La partida es un Empate!!";
  }
  document.getElementById("resultadoFinal").innerText = resultadoFinal;
}

function jugada() {
  let piedra = document.getElementById("btnPiedra").value;
  let papel = document.getElementById("btnPapel").value;
  let tijera = document.getElementById("btnTijera").value;

  console.log(piedra)
  console.log(papel)
  console.log(tijera)
}