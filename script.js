document.addEventListener("DOMContentLoaded", function() {
  // Activar el autoplay de la música
  const musicPlayer = document.createElement("iframe");
  musicPlayer.src = "https://www.youtube.com/embed/F7B9Nq01tKs?start=94&autoplay=1&mute=0";
  musicPlayer.style.display = "none"; // Ocultar el reproductor
  document.body.appendChild(musicPlayer);

  // Función para generar corazones animados
  function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    document.body.appendChild(heart);

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }

  setInterval(createHeart, 300);
});
