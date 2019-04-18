window.onload = function() {
    // get the video
    const video = document.getElementById('myVideo');

    // get the buttons
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const seekBar = document.getElementById('seekBar');

    // add an event listener for the play button
    playBtn.addEventListener('click', function(e){
        video.play();
    })

    // add an event listener for the pause button
    pauseBtn.addEventListener('click', function(e) {
        video.pause();
    })

    // add an event listener for the seek bar
    seekBar.addEventListener('change', function(e) {
        // calculate the time in the video that playback should be moved to
        const time = video.duration * ( seekBar.value/100);
        video.currentTime = time;
    })

    // update the seek bar as the video plays
    video.addEventListener('timeupdate', function(e) {
        
    })
}