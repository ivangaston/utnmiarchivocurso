
/*INDEX 2 - SECTION videO*/

window.addEventListener('load', () => {

    let video1 = document.querySelector('video');
    let playVideo1 = document.getElementById('playVideo');
    let pauseVideo1 = document.getElementById('pauseVideo');

    playVideo1.addEventListener('click', () => {
        video1.play();
    });
    pauseVideo1.addEventListener('click', () => {
        video1.pause();
    });


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
});


// JUEGO ROMPECABEZAS

const imgGame = document.querySelectorAll('.imgX');
const cajaGame = document.querySelectorAll('.imgBox');

let draggedItem = null;

for (let i = 0; i < imgGame.length; i++) {
    const draggable = imgGame[i];

    draggable.addEventListener('dragstart', function () {
        draggedItem = draggable;
        setTimeout(function () {
            draggable.style.display = 'none';
        },0);
    });

    draggable.addEventListener('dragend', function () {
        setTimeout(function () {
            draggedItem.style.display = 'block';
            draggedItem = null;
        },0);
    });
}

for (let i = 0; i < cajaGame.length; i++) {
    const dropzone = cajaGame[i];

    dropzone.addEventListener('dragover', function (event) {
        event.preventDefault();
    });

    dropzone.addEventListener('drop', function () {
        this.appendChild(draggedItem);

        this.classList.add('occupied');
        dropzone.style.pointerEvents = 'none'; 
        
        const p = this.querySelector('p');
        if (p) {
            p.style.display = 'none';
        }
    });
};



/*REINICIO JUEGO*/
let botonRestart = () => {
    window.location.reload()
}