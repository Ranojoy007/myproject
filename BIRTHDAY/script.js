/* ========================= START WEBSITE ========================= */ const startBtn =
  document.getElementById("startBtn");
const intro = document.getElementById("intro");
const mainContent = document.getElementById("mainContent");
startBtn.addEventListener("click", () => {
  intro.style.transition = "1s";
  intro.style.opacity = "0";
  setTimeout(() => {
    intro.style.display = "none";
    mainContent.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
    startMusic();
  }, 1000);
});
/* ========================= MUSIC ========================= */
/* ========================= MUSIC ========================= */

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

async function startMusic() {
  try {
    music.volume = 0.7;

    await music.play();

    playing = true;
    musicBtn.innerHTML = "🔊";
    musicBtn.title = "Pause music";

    console.log("Music started successfully!");
  } catch (error) {
    playing = false;
    musicBtn.innerHTML = "🎵";

    console.log("Music could not start:", error);
  }
}

musicBtn.addEventListener("click", async () => {
  try {
    if (music.paused) {
      await music.play();

      playing = true;
      musicBtn.innerHTML = "🔊";
      musicBtn.title = "Pause music";
    } else {
      music.pause();

      playing = false;
      musicBtn.innerHTML = "🎵";
      musicBtn.title = "Play music";
    }
  } catch (error) {
    console.log("Music error:", error);
  }
});
/* ========================= TYPEWRITER ========================= */
 const message = ` You came into my life and somehow made it a little brighter, a little happier and a lot more beautiful. I don't know what the future will bring, but I know one thing... I want to keep seeing that beautiful smile. On your birthday, I don't just wish you happiness for today. I wish you a life filled with beautiful memories, big dreams, peaceful moments and everything your heart deserves. And if I can be a small part of that journey, I'll consider myself incredibly lucky. Happy Birthday, my love. ❤️ `;
const typewriter = document.getElementById("typewriter");
let index = 0;
let startedTyping = false;
function typeMessage() {
  if (index < message.length) {
    typewriter.innerHTML +=
      message.charAt(index) === "\n" ? "<br>" : message.charAt(index);
    index++;
    setTimeout(typeMessage, 30);
  }
}
/* Start typing when message section appears */ const observer =
  new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !startedTyping) {
          startedTyping = true;
          typeMessage();
        }
      });
    },
    { threshold: 0.3 },
  );
observer.observe(document.querySelector(".message-section"));
/* ========================= FLOATING HEARTS ========================= */ function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  const hearts = ["❤️", "💖", "💕", "💗", "💓", "💘"];
  heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animationDuration = Math.random() * 5 + 5 + "s";
  document.body.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 10000);
}
setInterval(createHeart, 800);
/* ========================= FINAL SURPRISE ========================= */ const loveBtn =
  document.getElementById("loveBtn");
const finalMessage = document.getElementById("finalMessage");
loveBtn.addEventListener("click", () => {
  finalMessage.classList.remove("hidden");
  finalMessage.scrollIntoView({ behavior: "smooth" });
  createFireworks();
});
/* ========================= FIREWORKS / HEART EXPLOSION ========================= */ function createFireworks() {
  for (let i = 0; i < 60; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = "50%";
    heart.style.top = "50%";
    heart.style.zIndex = "999";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 400 + 100;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    heart.animate(
      [
        { transform: "translate(-50%, -50%) scale(0)", opacity: 1 },
        {
          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1.5)`,
          opacity: 0,
        },
      ],
      { duration: 1800, easing: "cubic-bezier(.17,.67,.83,.67)" },
    );
    document.body.appendChild(heart);
    setTimeout(() => {
      heart.remove();
    }, 2000);
  }
}
