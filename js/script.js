var video = document.querySelector("video");
var audio = document.querySelector("audio");

video.addEventListener("play", function() {
    audio.pause();
});

video.addEventListener("pause", function() {
    audio.play();
});

video.addEventListener("ended", function() {
    audio.play();
});
