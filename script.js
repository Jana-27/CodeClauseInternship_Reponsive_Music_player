fetch("get_songs.php")
    .then(response => response.json())
    .then(data => {
        const playlist = document.querySelector(".playlist");
        const audioPlayer = document.getElementById("audio-player");

        data.forEach(song => {
            const songItem = document.createElement("div");
            songItem.className = "song";
            songItem.innerHTML = `<h3>${song.title}</h3><p>${song.artist}</p>`;
            songItem.addEventListener("click", () => {
                audioPlayer.src = song.file_path;
                audioPlayer.play();
            });
            playlist.appendChild(songItem);
        });
    })
    .catch(error => console.error("Error fetching songs:", error));
