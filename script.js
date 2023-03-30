/*INDEX 2 - SECTION videO*/
let video1 = document.querySelector('video');
let playVideo1 = document.getElementById('playVideo');
let pauseVideo1 = document.getElementById('pauseVideo');

playVideo1.addEventListener('click',()=>{
    video1.play()
    
})
pauseVideo1.addEventListener('click',()=>{
    video1.pause()
})
