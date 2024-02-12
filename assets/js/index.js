function jugar() {
  let cantidadJuegos = parseInt(prompt("¿Cuantas veces quieres jugar?"));
  if (!Number(cantidadJuegos) || cantidadJuegos <= 0) {
    alert("Por favor, ingresa una cantidad de juegos válida");
  }
  while (!Number(cantidadJuegos) || cantidadJuegos <= 0) {
    cantidadJuegos = parseInt(prompt("¿Cuántas veces quieres jugar?"));
    if (!Number(cantidadJuegos) || cantidadJuegos <= 0) {
      alert("Por favor, ingresa una cantidad de juegos válida");
    }
  }
  let opciones = ["piedra", "papel", "tijera"];
  let resultadoRonda = "";
  let resultadoFinal = "";
  let marcadorJugador = "";
  let marcadorComputadora = "";
  let i = 0;

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
    let resultado = "";
    /* Reglas del juego */
    if (opcionJugador === opcionComputadora) {
      resultado = "Es un Empate!";
    } else if (
      (opcionJugador === "piedra" && opcionComputadora === "tijera") ||
      (opcionJugador === "papel" && opcionComputadora === "piedra") ||
      (opcionJugador === "tijera" && opcionComputadora === "papel")
    ) {
      resultado = "Ganaste!";
      marcadorJugador++;
    } else {
      resultado = "La computadora gana!";
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
