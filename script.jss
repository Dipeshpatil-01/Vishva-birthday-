// 🎵 MUSIC CONTROL
const music = document.getElementById("bgMusic");

function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

// 🎁 SURPRISE
function showSurprise() {
  document.getElementById("finalMessage").classList.remove("hidden");
  launchConfetti();
}

// 🎆 CONFETTI
function launchConfetti() {
  for (let i = 0; i < 100; i++) {
    let confetti = document.createElement("div");
    confetti.innerHTML = "🎉";
    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-10px";
    confetti.style.fontSize = "20px";
    document.body.appendChild(confetti);

    let fall = setInterval(() => {
      confetti.style.top = parseInt(confetti.style.top) + 5 + "px";
      if (parseInt(confetti.style.top) > window.innerHeight) {
        clearInterval(fall);
        confetti.remove();
      }
    }, 50);
  }
}
