/*INDEX 2 - SECTION videO*/
let video1 = document.querySelector('video');
let playVideo1 = document.getElementById('playVideo');
let pauseVideo1 = document.getElementById('pauseVideo');

playVideo1.addEventListener('click', () => {
    video1.play()

})
pauseVideo1.addEventListener('click', () => {
    video1.pause()
})


/*DURACION DEL VIDEO*/

let durationVideo = document.getElementById('time01')
video1.addEventListener('loadedmetadata', function () {
    let duration1 = video1.duration;
    durationVideo.textContent = formatTime(duration1);
});

function formatTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);

    minutes = (minutes >= 10) ? minutes : "0" + minutes;
    seconds = (seconds >= 10) ? seconds : "0" + seconds;
    return minutes + ":" + seconds;
}