// Opciones del juego
const choices = ["Piedra", "Papel", "Tijeras"];

// Selección de elementos del DOM
const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const gameResultDisplay = document.getElementById("game-result");
const messageDisplay = document.getElementById("message");
const resetButton = document.getElementById("reset");

// Función para elegir aleatoriamente la opción de la computadora
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Función para determinar el resultado del juego
function getResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "Empate";
  }

  if (
    (userChoice === "Piedra" && computerChoice === "Tijeras") ||
    (userChoice === "Papel" && computerChoice === "Piedra") ||
    (userChoice === "Tijeras" && computerChoice === "Papel")
  ) {
    return "¡Ganaste!";
  } else {
    return "Perdiste...";
  }
}

// Función principal que se ejecuta cuando el jugador hace una elección
function playGame(userChoice) {
  // Genera la elección de la computadora
  const computerChoice = getComputerChoice();

  // Muestra las elecciones
  userChoiceDisplay.textContent = userChoice;
  computerChoiceDisplay.textContent = computerChoice;

  // Determina y muestra el resultado del juego
  const result = getResult(userChoice, computerChoice);
  gameResultDisplay.textContent = result;

  // Actualiza el mensaje
  messageDisplay.textContent =
    "Elige de nuevo para seguir jugando, o reinicia el juego.";

  // Mostrar el botón de reinicio
  resetButton.style.display = "inline-block";
}

// Función para reiniciar el juego
function resetGame() {
  userChoiceDisplay.textContent = "-";
  computerChoiceDisplay.textContent = "-";
  gameResultDisplay.textContent = "-";
  messageDisplay.textContent = "¡Haz tu elección!";
  resetButton.style.display = "none"; // Ocultar botón de reinicio
}

// Asociar eventos de clic a los botones de opción
document.getElementById("rock").addEventListener("click", function () {
  playGame("Piedra");
});

document.getElementById("paper").addEventListener("click", function () {
  playGame("Papel");
});

document.getElementById("scissors").addEventListener("click", function () {
  playGame("Tijeras");
});

// Asociar el evento de clic al botón de reinicio
resetButton.addEventListener("click", resetGame);
