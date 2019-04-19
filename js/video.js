window.onload = function() {
    // get the video
    const video = document.getElementById('myVideo');

    // get the buttons
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const seekBar = document.getElementById('seekBar');
    const volumeControl = document.getElementById('volume');
    const muteBtn = document.getElementById('muteBtn');

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
        // calculate the slider value
        const value = (100/video.duration) * video.currentTime;

        // update the slider value
        seekBar.value = value;
    })

    // pause the video when the user starts seeking
    seekBar.addEventListener('mousedown', function(e) {
        video.pause();
    })

    // continue the video when the user stops seeking
    seekBar.addEventListener('mouseup', function(e) {
        video.play();
    })

    // add an event listener for the volume control
    volumeControl.addEventListener('change', function(e) {
        // update the videos volume property
        video.volume = volumeControl.value;
    })

    // add an event listener for the mute button
    muteBtn.addEventListener('click', function(e) {
        // toggle the muted value
        if (video.muted == true) {
            video.muted = false;
            muteBtn.textContent = "Mute";
        } else {
            video.muted = true;
            muteBtn.textContent = "Unmute";
        }
    })
}