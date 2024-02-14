function jugar() {
  let cantidadJuegos = parseInt(prompt("¿Cuantas veces quieres jugar?"));
  if (!Number(cantidadJuegos) || cantidadJuegos <= 0) {
    alert("Por favor, ingresa una cantidad de juegos válida");
  }
  /* Bocle del promt en caso de que no se ingrese un número más de una vez */
  while (!Number(cantidadJuegos) || cantidadJuegos <= 0) {
    cantidadJuegos = parseInt(prompt("¿Cuántas veces quieres jugar?"));
    if (!Number(cantidadJuegos) || cantidadJuegos <= 0) {
      alert("Por favor, ingresa una cantidad de juegos válida");
    }
  }
  /* Variables Globales */
  let opciones = ["piedra", "papel", "tijera"];
  let resultadoRonda = "";
  let resultadoFinal = "";
  let marcadorJugador = "";
  let marcadorComputadora = "";
  let i = 0;

  /* Evaluador de condición WHILE */
  while (i < cantidadJuegos) {
    /* Jugada del jugador */
    let opcionJugador = prompt("Elige: piedra, papel o tijera").toLowerCase();
    while (!opciones.includes(opcionJugador)) {
      opcionJugador = prompt(
        "Opción inválida. Elige: piedra, papel o tijera"
      ).toLowerCase();
    }

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
    i++;
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
