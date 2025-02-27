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
  { path: "audio/Aura.mp3", displayName: "Aura", cover: "images/Aura.png", artist: "Unknown" },
  { path: "audio/GLXXMSTRIDER - DONT STOP - Slowed.mp3", displayName: "DONT STOP", cover: "images/dont-stop.jpg", artist: "GLXXMSTRIDER" },
  { path: "Audio/phonkme KIIXSHI - GHOST.mp3", displayName: "KIIXSHI", cover: "images/ghost.jpg", artist: "phonkme" },
  { path: "audio/Miguel Angeles - Protection Charm Part Slowed Reverb_1.mp3", displayName: "Miguel Angeles", cover: "images/Aura.png", artist: "Protection Charm" },
  { path: "audio/Silhouette.mp3", displayName: "Silhouette", cover: "images/Aura.png", artist: "Unknown" },
  { path: "audio/Tak Tak Funk Slowed.mp3", displayName: "Tak Tak Funk", cover: "images/Aura.png", artist: "Unknown" }
];

let musicIndex = 0;
let isPlaying = false;

// 🎵 **Pleerni ishga tushirish yoki to‘xtatish**
function togglePlay() {
  isPlaying ? pauseMusic() : playMusic();
}

// 🎵 **Musiqani o‘ynatish**
function playMusic() {
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "Pause");

  music.play().catch(error => {
    console.log("Autoplay blocked:", error);
  });
}

// 🎵 **Musiqani to‘xtatish**
function pauseMusic() {
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Play");
  music.pause();
}

// 🎵 **Musiqani yuklash va ijro etish**
function loadMusic(song) {
  music.src = song.path;
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  image.src = song.cover;
  background.src = song.cover;

  music.pause();
  music.currentTime = 0;

  // **Trek tugaganda avtomatik keyingisini o‘ynatish**
  music.onended = function () {
    changeMusic(1);
  };

  playMusic();
}

// 🎵 **Keyingi yoki oldingi trekni o‘ynatish**
function changeMusic(direction) {
  musicIndex = (musicIndex + direction + songs.length) % songs.length;
  loadMusic(songs[musicIndex]);
}

// 🎵 **Ijro progressini yangilash**
function updateProgressBar() {
  const { duration, currentTime } = music;
  if (!duration) return; // 🎵 **Agar trek yuklanmagan bo‘lsa, funksiyani bajarmaslik**

  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;

  const formatTime = time => String(Math.floor(time)).padStart(2, "0");
  durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
  currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
}

// 🎵 **Ijro vaqtini o‘zgartirish**
function setProgressBar(e) {
  const width = playerProgress.clientWidth;
  const clickX = e.offsetX;
  music.currentTime = (clickX / width) * music.duration;
}

// **🎧 Barcha hodisalarni qo‘shish**
playBtn.addEventListener("click", togglePlay);
prevBtn.addEventListener("click", () => changeMusic(-1));
nextBtn.addEventListener("click", () => changeMusic(1));
music.addEventListener("timeupdate", updateProgressBar);
playerProgress.addEventListener("click", setProgressBar);

// 🎵 **Ilk trekni yuklash**
loadMusic(songs[musicIndex]);
