let buttons = document.querySelectorAll(".btn_option");
let board = ["", "", "", "", "", "", "", "", ""];
let message = document.getElementById("message");
let popup = document.getElementById("popup");
let restart = document
  .getElementById("restart")
  .addEventListener("click", restartFo);
let userCount1 = document.getElementById("user_count1");
let userCount2 = document.getElementById("user_count2");

// inicializar variables en 0 por el conteo
let count1 = 0;
let count2 = 0;

let currentPlayer = "X";

let gameOver = false;

for (let i = 0; i < buttons.length; i++) {
  let btn = buttons[i];
  //   Recorrer por medio del arreglo y el evento los clicks que realiza el user
  btn.addEventListener("click", function () {
    main(btn);
  });
}

// identifica el id del button
function main(btn) {
  btn.innerHTML = currentPlayer;
  board[btn.id - 1] = currentPlayer;
  check();
  changePlayer();
}

// Si el jugador es igual a O, el jugador seleccionado es X, sino es O
function changePlayer() {
  if (currentPlayer == "O") {
    currentPlayer = "X";
  } else {
    currentPlayer = "O";
  }
}
// metodo para verificar el array de maneras diferentes
function check() {
  checkHorizontal();
  checkVertical();
  checkDiagonal();
  checkDraw();
}
// verifica si los signos son iguales de manera horizontal, para aplicar la linea de victory

function checkHorizontal() {
  if (allEqual([board[0], board[1], board[2], currentPlayer])) {
    message.innerHTML = currentPlayer + " Won";
    popup.classList.remove("hide");
    countPoints();
    gameOver = true;
  } else if (allEqual([board[3], board[4], board[5], currentPlayer])) {
    message.innerHTML = currentPlayer + " Won";
    popup.classList.remove("hide");
    countPoints();
    gameOver = true;
  } else if (allEqual([board[6], board[7], board[8], currentPlayer])) {
    message.innerHTML = currentPlayer + " Won";
    popup.classList.remove("hide");
    countPoints();
    gameOver = true;
  }
}
// verifica si los signos son iguales de manera vertical, para aplicar la linea de victory
function checkVertical() {
  if (allEqual([board[0], board[3], board[6], currentPlayer])) {
    message.innerHTML = currentPlayer + "Won";
    popup.classList.remove("hide");
    countPoints();
    gameOver = true;
  } else if (allEqual([board[1], board[4], board[7], currentPlayer])) {
    message.innerHTML = currentPlayer + " Won";
    popup.classList.remove("hide");
    countPoints();
    gameOver = true;
  } else if (allEqual([board[2], board[5], board[8], currentPlayer])) {
    message.innerHTML = currentPlayer + " Won";
    popup.classList.remove("hide");
    countPoints();
    gameOver = true;
  }
}
function checkDiagonal() {
  if (allEqual([board[0], board[4], board[8], currentPlayer])) {
    message.innerHTML = currentPlayer + " Won";
    popup.classList.remove("hide");
    countPoints();
    gameOver = true;
  } else if (allEqual([board[2], board[4], board[6], currentPlayer])) {
    message.innerHTML = currentPlayer + " Won";
    popup.classList.remove("hide");
    countPoints();
    gameOver = true;
  }
}
// la función verifica si hay empate
function checkDraw() {
  let checkifexist = board.includes("");
  if (allEqual(board) == false && checkifexist == false) {
    if (gameOver != true) {
      message.innerHTML = " Draw";
      popup.classList.remove("hide");
      gameOver = true;
    }
  }
}

function allEqual(arry) {
  const result = arry.every((element) => {
    if (element === arry[0]) {
      return true;
    }
  });
  return result;
}

// al seleccionar el evento de nuevo juego, reinicia los botones con valores vacios
function restartFo() {
  popup.classList.add("hide");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].innerHTML = "";
    board[i] = "";
  }
  gameOver = false;
}
// conteo por player
function countPoints() {
  if (currentPlayer == "O") {
    count1 += 1;
    userCount1.innerHTML = count1;
  } else {
    count2 += 1;
    userCount2.innerHTML = count2;
  }
}
