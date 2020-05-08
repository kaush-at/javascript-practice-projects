const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// set video time to progress
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

//stop the video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

//event listner for video element
// when playing video when we click it stops or play
video.addEventListener("click", toggleVideoStatus);

video.addEventListener("play", updatePlayIcon);

video.addEventListener("pause", updatePlayIcon);

video.addEventListener("timeupdate", updateProgress);

//event listner for play button
play.addEventListener("click", toggleVideoStatus);

//event listner for stop button
stop.addEventListener("click", stopVideo);

//event listner for progress bar
progress.addEventListener("change", setVideoProgress);
