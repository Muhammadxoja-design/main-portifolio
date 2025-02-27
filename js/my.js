let htmlText = "<html>";
let htmlText2 = "</html>";
let servic = "<services>";
let eservic = "</services>";
let works = "<works>";
let eworks = "</works>";
let amusic = "<music>";
let emusic = "</music>";
let contact = "<contact>";
let econtact = "</contact>";

document.getElementById("ht2").textContent = htmlText2;
document.getElementById("Services-text").textContent = servic;
document.getElementById("ServicesEnd-text").textContent = eservic;
document.getElementById("works-text").textContent = works;
document.getElementById("worksEnd-text").textContent = eworks;
document.getElementById("Music-text").textContent = amusic;
document.getElementById("MusicEnd-text").textContent = emusic;
document.getElementById("Contact-text").textContent = contact;
document.getElementById("eContact-text").textContent = econtact;

const image = document.getElementById("cover"),
  title = document.getElementById("music-title"),
  artist = document.getElementById("music-artist"),
  currentTimeEl = document.getElementById("current-time"),
  durationEl = document.getElementById("duration"),
  progress = document.getElementById("progress"),
  playerProgress = document.getElementById("player-progress"),
  prevBtn = document.getElementById("prev"),
  nextBtn = document.getElementById("next"),
  playBtn = document.getElementById("play"),
  background = document.getElementById("bg-img");

const music = new Audio();

const songs = [
    // I liked Musics
  {
    path: "audio/Aura.mp3",
    displayName: "Aura.",
    cover: "images/Aura.png",
    artist: "Unknown",
  },
  {
    path: "audio/GLXXMSTRIDER - DONT STOP - Slowed.mp3",
    displayName: "DONT STOP",
    cover: "images/dont-stop.jpg",
    artist: "GLXXMSTRIDER",
  },
  {
    path: "Audio/phonkme KIIXSHI - GHOST.mp3",
    displayName: "KIIXSHI",
    cover: "images/ghost.jpg",
    artist: "phonkme",
  },
  {
    path: "audio/Miguel Angeles - Protection Charm Part Slowed Reverb_1.mp3",
    displayName: "Miguel Angeles",
    cover: "images/Aura.png",
    artist: "Protection Charm",
  },
  {
    path: "audio/Silhouette.mp3",
    displayName: "Silhouette",
    cover: "images/Aura.png",
    artist: "unknown",
  },
  {
    path: "audio/Tak Tak Funk Slowed.mp3",
    displayName: "Tak Tak Funk",
    cover: "images/Aura.png",
    artist: "unknown",
  }
];

let musicIndex = 0;
let isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}

function playMusic() {
  isPlaying = true;
  // Change play button icon
  playBtn.classList.replace("fa-play", "fa-pause");
  // Set button hover title
  playBtn.setAttribute("title", "Pause");
  music.play();
}

function pauseMusic() {
  isPlaying = false;
  // Change pause button icon
  playBtn.classList.replace("fa-pause", "fa-play");
  // Set button hover title
  playBtn.setAttribute("title", "Play");
  music.pause();
}

function loadMusic(song) {
  music.src = song.path;
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  image.src = song.cover;
  background.src = song.cover;
}

function changeMusic(direction) {
  musicIndex = (musicIndex + direction + songs.length) % songs.length;
  loadMusic(songs[musicIndex]);
  playMusic();
}

function updateProgressBar() {
  const { duration, currentTime } = music;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;

  const formatTime = (time) => String(Math.floor(time)).padStart(2, "0");
  durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(
    duration % 60
  )}`;
  currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(
    currentTime % 60
  )}`;
}

function setProgressBar(e) {
  const width = playerProgress.clientWidth;
  const clickX = e.offsetX;
  music.currentTime = (clickX / width) * music.duration;
}

playBtn.addEventListener("click", togglePlay);
prevBtn.addEventListener("click", () => changeMusic(-1));
nextBtn.addEventListener("click", () => changeMusic(1));
music.addEventListener("ended", () => changeMusic(1));
music.addEventListener("timeupdate", updateProgressBar);
playerProgress.addEventListener("click", setProgressBar);

loadMusic(songs[musicIndex]);

document.querySelectorAll(".neon-container").forEach((container) => {
  const rangeSlider = container.querySelector(".range-slider");
  const neonBorder = container.querySelector(".neon-border");

  rangeSlider.addEventListener("input", function () {
    let val = rangeSlider.value;
    neonBorder.style.opacity = val / 100;
  });
});
function loadMusic(song) {
  music.src = song.path;
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  image.src = song.cover;
  background.src = song.cover;

  // Eski trekni to‘xtatish va vaqtni tiklash
  music.pause();
  music.currentTime = 0;
}
  document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("myAudio");
    
    // Pleerni avtomatik yuklash
    audio.load();

    // Pleerni avtomatik boshlash (barcha brauzerlarda ishlamaydi)
    audio.play().catch(error => console.log("Autoplay blocked by browser", error));

    // Audio yuklanganda trek nomini ko‘rsatish
    audio.onloadedmetadata = function () {
      console.log("Track duration:", audio.duration, "seconds");
    };
  });
