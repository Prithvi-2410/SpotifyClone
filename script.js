// script.js

document.addEventListener("DOMContentLoaded", () => {
    const moods = document.querySelectorAll(".mood");
    const playlistFrame = document.getElementById("playlist-frame");

    const playlists = {
        happy: "https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec7aLTmlC",
        calm: "https://open.spotify.com/embed/playlist/37i9dQZF1DX1gRalH1mWrP",
        sad: "https://open.spotify.com/embed/playlist/37i9dQZF1DX3YSRoSdA634",
        energetic: "https://open.spotify.com/embed/playlist/37i9dQZF1DX1g0iEXLFycr",
        one_direction:"https://open.spotify.com/embed/album/4gCNyS7pidfK3rKWhB3JOY",
        trending: "https://open.spotify.com/playlist/4hOKQuZbraPDIfaGbM3lKI"
    };

    moods.forEach(button => {
        button.addEventListener("click", () => {
            const mood = button.getAttribute("data-mood");
            playlistFrame.src = playlists[mood];
            playlistFrame.style.display = "block";
        });
    });

    document.getElementById("toggle-theme").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });
});
