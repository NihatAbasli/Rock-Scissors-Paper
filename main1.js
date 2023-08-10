let firstScoreMe = document.querySelector("#firstScoreMe");
let firstTitleMe = document.querySelector("#firstTitleMe");
let firstImgMe = document.querySelector("#firstImgMe");

let secondScoreRobot = document.querySelector("#secondScoreRobot");
let secondTitleRobot = document.querySelector("#secondTitleRobot");
let secondImgRobot = document.querySelector("#secondImgRobot");

const button = ["r", "s", "p"];

// Ilk olaraq scorlari 0 teyin edirik

let player1Score = 0;
let player2Score = 0;

let btnReset = document.querySelector("#btnReset");
btnReset.addEventListener("click", function () {
  firstScoreMe.innerHTML = "0";
  secondScoreRobot.innerHTML = "0";
});
// Arrayin Elementlerini random veren funsiya yaziriq

function randomButtonSelector(arr) {
  let randomNumber = Math.floor(Math.random() * arr.length);

  return arr[randomNumber];
}

// Window penceremizde her hansisa bir duymeni klavisde basdiqda aktivlesir

window.onkeydown = function (e) {
  const userSelect = e.key;
};

// Ele bir funsiya yaziriq ki verdiyimiz derler uygun olaraq score ve sekilleri deyissin

function showScoreImg(me, robot) {
  firstScoreMe.innerHTML = `Score: ${player1Score}`;
  secondScoreRobot.innerHTML = `Score: ${player2Score}`;
  // Sekillere uygun yazini deyismeyi ucun bele bir sert yazilir
  firstImgMe.src = `./${me}.png`;
  if (me === "p") {
    firstTitleMe.innerHTML = "Paper";
  } else if (me === "s") {
    firstTitleMe.innerHTML = "Scissors";
  } else {
    firstTitleMe.innerHTML = "Rock";
  }
  secondImgRobot.src = `./${robot}.png`;
  if (robot === "p") {
    secondTitleRobot.innerHTML = "Paper";
  } else if (robot === "s") {
    secondTitleRobot.innerHTML = "Scissors";
  } else {
    secondTitleRobot.innerHTML = "Rock";
  }
}

// Ardicilligimizi sertlerimizi yaziriq

function startGame(e) {
  let firstPlayerChoose = e.key;

  if (!button.includes(firstPlayerChoose)) {
    alert("Please choose item select: 'r-s-p'");
    return;
  }

  //   rock paper scissors
  //   if (firstPlayerChoose === "r") {
  //     firstTitleMe.innerHTML = "Rock";
  //     secondTitleRobot.innerHTML = "Rock";
  //   } else if (firstPlayerChoose === "s") {
  //     firstTitleMe.innerHTML = "Scissors";
  //     secondTitleRobot.innerHTML = "Scissors";
  //   } else {
  //     firstTitleMe.innerHTML = "Paper";
  //     secondTitleRobot.innerHTML = "Paper";
  //   }

  let robotSelect = randomButtonSelector(button);

  if (
    (firstPlayerChoose === "p" && robotSelect === "r") ||
    (firstPlayerChoose === "s" && robotSelect === "p") ||
    (firstPlayerChoose === "r" && robotSelect === "s")
  ) {
    console.log("You Win...");
    console.log("Robot Lose...");
    player1Score += 1;
    showScoreImg(firstPlayerChoose, robotSelect);
  } else if (
    (firstPlayerChoose === "r" && robotSelect === "r") ||
    (firstPlayerChoose === "s" && robotSelect === "s") ||
    (firstPlayerChoose === "p" && robotSelect === "p")
  ) {
    console.log("You Draw...");
    showScoreImg(firstPlayerChoose, robotSelect);
  } else {
    console.log("You Lose...");
    console.log("You Win...");
    player2Score += 1;
    showScoreImg(firstPlayerChoose, robotSelect);
  }
}

window.onkeydown = startGame;
