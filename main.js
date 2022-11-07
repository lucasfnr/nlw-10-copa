function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("20/11", "DOMINGO", createGame("catar", "13:00", "equador")) +
  createCard(
    "21/11",
    "segunda-feira",
    createGame("inglaterra", "10:00", "ira") +
      createGame("senegal", "13:00", "holanda") +
      createGame("estadosunidos", "14:00", "gales")
  ) +
  createCard(
    "22/11",
    "terça-feira",
    createGame("argentina", "07:00", "arabiasaudita") +
      createGame("dinamarca", "10:00", "tunisia") +
      createGame("mexico", "13:00", "polonia") +
      createGame("franca", "16:00", "australia")
  ) +
  createCard(
    "23/11",
    "quarta-feira",
     createGame("marrocos", "07:00", "croacia") +
     createGame("alemanha", "10:00", "japao") +
     createGame("espanha", "13:00", "costarica") +
     createGame("belgica", "16:00", "canada")
  )
