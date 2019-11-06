document.addEventListener("DOMContentLoaded", init);
function init() {

/* functional elements of the player to variables */
	let playerAudio = document.getElementById("player-audio"),
		playButton = document.getElementById("playButton"),
		pauseButton = document.getElementById("pauseButton"),
		playPrevSong = document.getElementById("prevButton"),
		playNextSong = document.getElementById("nextButton"),
		progress = document.getElementById("progress-on"),
		muteButton = document.getElementById("muteButton"),
		unMuteButton = document.getElementById("unMuteButton");
	console.log(playerAudio, playButton, pauseButton, progress, muteButton, unMuteButton); // checking the elements
	let resTime = 0;

/* links to songs to variables */
	let song0 = document.getElementById("song-0");
	let song1 = document.getElementById("song-1");
	let song2 = document.getElementById("song-2");
	let song3 = document.getElementById("song-3");
	let song4 = document.getElementById("song-4");
	let song5 = document.getElementById("song-5");
	let song6 = document.getElementById("song-6");
	let song7 = document.getElementById("song-7");
	let song8 = document.getElementById("song-8");
	let song9 = document.getElementById("song-9");

/* times of songs to variables */
	let time0 = document.getElementById("time-0");
	let time1 = document.getElementById("time-1");
	let time2 = document.getElementById("time-2");
	let time3 = document.getElementById("time-3");
	let time4 = document.getElementById("time-4");
	let time5 = document.getElementById("time-5");
	let time6 = document.getElementById("time-6");
	let time7 = document.getElementById("time-7");
	let time8 = document.getElementById("time-8");
	let time9 = document.getElementById("time-9");

	let songTable = ["audio/01%20Where%20Do%20You%20Think%20You%27re%20Going.mp3", "audio/02%20Your%20Latest%20Trick.mp3", "audio/03%20Romeo%20and%20Juliet.mp3", "audio/04%20Private%20Investigations.mp3", "audio/05%20You%20and%20Your%20frend.mp3", "audio/06%20Once%20Upon%20a%20time%20in%20the%20west.mp3", "audio/07%20Telegraph%20road.mp3", "audio/08%20Brothers%20in%20Arms.mp3", "audio/09%20The%20Gallery.mp3", "audio/10%20Ticket%20to%20Heaven.mp3"];






}