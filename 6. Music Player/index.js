'use strict';

const playButton = document.querySelectorAll(".musicplayer__icon")[1];
let musicProgress = document.querySelector(".musicplayer__progress");

let isPaused = false;
let musicSeconds = 0;

playButton.addEventListener('click', () => {

    if (!isPaused) {
        playButton.classList.remove("fa-play")
        playButton.classList.add("fa-pause")
        isPaused = true;
        handleMusicState()
    } else if (isPaused) {
        playButton.classList.add("fa-play")
        playButton.classList.remove("fa-pause")
        isPaused = false;
        handleMusicState()
    }
})

function handleMusicState() {
        if (isPaused) {
        setTimeout(1000)
        musicProgress.value += 1;
        console.log(musicProgress);
        handleMusicState();
    } else if (!isPaused) {
        musicProgress = musicProgress;
    }
}
