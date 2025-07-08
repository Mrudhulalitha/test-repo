const songs = [
  {
    title: "Kiss Me Baby ",
    artist: "DJ Tillu",
    cover: "C:/Users/mrudh/OneDrive/Desktop/Soptify/images/dj.jpg",
    file:"C:/Users/mrudh/OneDrive/Desktop/Soptify/Music/Tillu Anna Dj Pedithe-320kbps.mp3"
  },
  {
    title: "Chamkeela Angeelesi ",
    artist: "Dasara",
    cover: "C:/Users/mrudh/OneDrive/Desktop/Soptify/images/Dasara.jpg",
    file: "C:/Users/mrudh/OneDrive/Desktop/Soptify/Music/Chamkeela Angeelesi-320kbps.mp3"
  },
  {
    title: "Sooreede ",
    artist: "Salaar",
    cover: "C:/Users/mrudh/OneDrive/Desktop/Soptify/images/salaar.jpg",
    file: "C:/Users/mrudh/OneDrive/Desktop/Soptify/Music/Sooreede From Salaar Cease Fire - Telugu-320kbps.mp3"
  },
  {
    title: "Raghunandana ",
    artist: "Hanuman",
    cover: "C:/Users/mrudh/OneDrive/Desktop/Soptify/images/hanuman (1).jpg",
    file: "C:/Users/mrudh/OneDrive/Desktop/Soptify/Music/Raghunandana From HanuMan Hindi-320kbps.mp3"
  },
  {
    title: "Gaaju Bomma ",
    artist: "Hi Nanna",
    cover: "C:/Users/mrudh/OneDrive/Desktop/Soptify/images/Hi.jpg",
    file:  "C:/Users/mrudh/OneDrive/Desktop/Soptify/Music/Gaaju Bomma-320kbps (1).mp3"
  },
  {
    title: "Inthandham ",
    artist: "Sitha Ramam",
    cover: "C:/Users/mrudh/OneDrive/Desktop/Soptify/images/sitha (1).jpg",
    file: "C:/Users/mrudh/OneDrive/Desktop/Soptify/Music/Inthandham-320kbps.mp3"
  },
  {
    title: "Kurchini Madthapetti ",
    artist: "Guntur karam",
    cover: "C:/Users/mrudh/OneDrive/Desktop/Soptify/images/guntur (1).jpg",
    file: "C:/Users/mrudh/OneDrive/Desktop/Soptify/Music/Madthapetti-320kbps.mp3"
  },
  {
    title: "Ramuloo Ramulaa ",
    artist: "Ala Vaikunthapurramuloo",
    cover: "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2019/10/20/Ala-Vaikunthapurramuloo-Movie-Ramuloo-Ramulaa-Song-Announcement-HD-Poster-and-Still-.jpg?fit=723%2C1024&quality=80&zoom=1&ssl=1",
    file:  "C:/Users/mrudh/OneDrive/Desktop/Soptify/Music/Ramuloo Ramulaa-320kbps.mp3"
  }
];
const playlistDiv = document.getElementById("playlist");
const audio = document.getElementById("audio");
const currentTitle = document.getElementById("current-title");
const currentArtist = document.getElementById("current-artist");
const currentCover = document.getElementById("current-cover");

songs.forEach((song, index) => {
  const songDiv = document.createElement("div");
  songDiv.className = "song";
  songDiv.innerHTML = `
    <img src="${song.cover}" alt="${song.title}">
    <div class="song-title">${song.title}</div>
    <div class="song-artist">${song.artist}</div>
  `;
  songDiv.addEventListener("click", () => playSong(index));
  playlistDiv.appendChild(songDiv);
});


function playSong(index) {
  const song = songs[index];
  currentTitle.textContent = song.title;
  currentArtist.textContent = song.artist;
  currentCover.src = song.cover;
  audio.src = song.file;
  audio.play();
}
