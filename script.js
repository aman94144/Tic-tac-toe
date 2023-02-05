currentTurn = "X";

function play(id) {
  var idz = "" + id;
  var isnotEmpty = document.getElementById(idz).innerText != "";

  // If below condition is gets true code will not work further.
  if (isnotEmpty) {
    return;
  }

  document.getElementById(idz).innerText = currentTurn;

  if (currentTurn === "O") {
    currentTurn = "X";
  } else {
    currentTurn = "O";
  }
}

function reset() {
  //   location.reload();

  gameover = false;
  currentTurn = "X";

  for (var i = 1; i <= 9; i++) {
    document.getElementById("" + i).innerText = "";
  }
}
