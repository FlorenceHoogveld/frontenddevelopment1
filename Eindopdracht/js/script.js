//variablen aanmaken
var video = document.querySelector("video");
var audio = document.querySelector("audio");

//luisterd of hij op "play" staat is dat zo? --> voert function audio op pauze uit
video.addEventListener("play", function() {
    audio.pause();
});

video.addEventListener("pause", function() {
    audio.play();
});

video.addEventListener("ended", function() {
    audio.play();
});
