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
/* checking the elements in the console: */
	console.log(playerAudio, playButton, pauseButton, playPrevSong, playNextSong, progress, muteButton, unMuteButton);
	let resTime = 0,
		i = 0;

/* links to songs to variables */
	let song0 = document.getElementById("song-0"),
		song1 = document.getElementById("song-1"),
		song2 = document.getElementById("song-2"),
		song3 = document.getElementById("song-3"),
		song4 = document.getElementById("song-4"),
		song5 = document.getElementById("song-5"),
		song6 = document.getElementById("song-6"),
		song7 = document.getElementById("song-7"),
		song8 = document.getElementById("song-8"),
		song9 = document.getElementById("song-9");

/* times of songs to variables */
	let time0 = document.getElementById("time-0"),
		time1 = document.getElementById("time-1"),
		time2 = document.getElementById("time-2"),
		time3 = document.getElementById("time-3"),
		time4 = document.getElementById("time-4"),
		time5 = document.getElementById("time-5"),
		time6 = document.getElementById("time-6"),
		time7 = document.getElementById("time-7"),
		time8 = document.getElementById("time-8"),
		time9 = document.getElementById("time-9");

	let songTable = ["audio/01%20Where%20Do%20You%20Think%20You%27re%20Going.mp3", "audio/02%20Your%20Latest%20Trick.mp3", "audio/03%20Romeo%20and%20Juliet.mp3", "audio/04%20Private%20Investigations.mp3", "audio/05%20You%20and%20Your%20frend.mp3", "audio/06%20Once%20Upon%20a%20time%20in%20the%20west.mp3", "audio/07%20Telegraph%20road.mp3", "audio/08%20Brothers%20in%20Arms.mp3", "audio/09%20The%20Gallery.mp3", "audio/10%20Ticket%20to%20Heaven.mp3"];

/* functions on click on the buttons */
	playButton.addEventListener("click", ChangePlayButtonToPauseButton);
	pauseButton.addEventListener("click", ChangePauseButtonToPlayButton);

	playPrevSong.addEventListener("click", PlayPrevSong);
	playNextSong.addEventListener("click", PlayNextSong);
	muteButton.addEventListener("click", Mute);
	unMuteButton.addEventListener("click", unMute);

/* functions defined: */
/* 1. to play music */
	function ChangePlayButtonToPauseButton() {
		playButton.classList.remove("play-button-on");
    	playButton.classList.add("play-button-off");
    	pauseButton.classList.remove("pause-button-off");
    	pauseButton.classList.add("pause-button-on");
    
    	doPlay();
    	function doPlay() {
        	playerAudio.play();
    	}
    	goWithProgressOfSong();
	}
/* 2. to stop music */
	function ChangePauseButtonToPlayButton() {
		playButton.classList.remove("play-button-off");
    	playButton.classList.add("play-button-on");
    	pauseButton.classList.remove("pause-button-on");
    	pauseButton.classList.add("pause-button-off");
    
    	doPause();
    	function doPause(){
        	playerAudio.pause();
    	}
    	goWithProgressOfSong();
	}

/* 3. to visualize progress */
	function goWithProgressOfSong() {
    	progress.offsetWidth = 0;
    	let id = setInterval(frame, 5);
    	function frame(){
        	if (playerAudio.readyState){
            	resTime = (playerAudio.currentTime * 310) / playerAudio.duration;
            	progress.style.width = resTime; 
        	}
    	}
	}

/* 4. to play songs */
	function PlayFirstSong() {
    	i = 0;
    	playerAudio.src = songTable[0];
    	song0.classList.add("changed-title-song-0");
    	song1.classList.remove("changed-title-song-1");
    	song2.classList.remove("changed-title-song-2");
    	song3.classList.remove("changed-title-song-3");
    	song4.classList.remove("changed-title-song-4");
    	song5.classList.remove("changed-title-song-5");
    	song6.classList.remove("changed-title-song-6");
    	song7.classList.remove("changed-title-song-7");
    	song8.classList.remove("changed-title-song-8");
    	song9.classList.remove("changed-title-song-9");
	
    	time0.classList.add("time0");
    	time1.classList.remove("time1");
    	time2.classList.remove("time2");
    	time3.classList.remove("time3");
    	time4.classList.remove("time4");
    	time5.classList.remove("time5");
    	time6.classList.remove("time6");
    	time7.classList.remove("time7");
    	time8.classList.remove("time8");
    	time9.classList.remove("time9");

    	playButton.classList.remove("play-button-on");
    	playButton.classList.add("play-button-off");
	
    	pauseButton.classList.remove("pause-button-off");
    	pauseButton.classList.add("pause-button-on");
	
    	playerAudio.play();
    	goWithProgressOfSong();
	}

	function PlaySecondSong() {
    	i = 1;
    	playerAudio.src = songTable[1];
    	song1.classList.add("change-title-song-1");
    	song0.classList.remove("change-title-song-0");
    	song2.classList.remove("change-title-song-2");
    	song3.classList.remove("change-title-song-3");
    	song4.classList.remove("change-title-song-4");
    	song5.classList.remove("change-title-song-5");
    	song6.classList.remove("change-title-song-6");
    	song7.classList.remove("change-title-song-7");
    	song8.classList.remove("change-title-song-8");
    	song9.classList.remove("change-title-song-9");
	
    	time1.classList.add("time1");
    	time0.classList.remove("time0");
    	time2.classList.remove("time2");
    	time3.classList.remove("time3");
    	time4.classList.remove("time4");
    	time5.classList.remove("time5");
    	time6.classList.remove("time6");
    	time7.classList.remove("time7");
    	time8.classList.remove("time8");
    	time9.classList.remove("time9");
	
    	playButton.classList.remove("play-button-on");
    	playButton.classList.add("play-button-off");
	
    	pauseButton.classList.remove("pause-button-off");
    	pauseButton.classList.add("pause-button-on");
	
    	playerAudio.play();
    	goWithProgressOfSong();
	}

	function PlayThirdSong() {
    	i = 2;
    	playerAudio.src = songTable[2];
    	song2.classList.add("changed-title-song-2");
    	song0.classList.remove("changed-title-song-0");
    	song1.classList.remove("changed-title-song-1");
    	song3.classList.remove("changed-title-song-3");
    	song4.classList.remove("changed-title-song-4");
    	song5.classList.remove("changed-title-song-5");
    	song6.classList.remove("changed-title-song-6");
    	song7.classList.remove("changed-title-song-7");
    	song8.classList.remove("changed-title-song-8");
    	song9.classList.remove("changed-title-song-9");
	
    	time2.classList.add("time2");
    	time0.classList.remove("time0");
    	time1.classList.remove("time1");
    	time3.classList.remove("time3");
    	time4.classList.remove("time4");
    	time5.classList.remove("time5");
    	time6.classList.remove("time6");
    	time7.classList.remove("time7");
    	time8.classList.remove("time8");
    	time9.classList.remove("time9");
	
    	playButton.classList.remove("play-button-on");
    	playButton.classList.add("play-button-off");
	
    	pauseButton.classList.remove("pause-button-off");
    	pauseButton.classList.add("pause-button-on");
	
    	playerAudio.play();
    	goWithProgressOfSong();
	}

	function PlayFourthSong() {
	    i = 3;
	    playerAudio.src = songTable[3];
	    song3.classList.add("changed-title-song-3");
	    song0.classList.remove("changed-title-song-0");
	    song1.classList.remove("changed-title-song-1");
	    song2.classList.remove("changed-title-song-2");
	    song4.classList.remove("changed-title-song-4");
	    song5.classList.remove("changed-title-song-5");
	    song6.classList.remove("changed-title-song-6");
	    song7.classList.remove("changed-title-song-7");
	    song8.classList.remove("changed-title-song-8");
	    song9.classList.remove("changed-title-song-9");

	    time3.classList.add("time3");
	    time0.classList.remove("time0");
	    time1.classList.remove("time1");
	    time2.classList.remove("time2");
	    time4.classList.remove("time4");
	    time5.classList.remove("time5");
	    time6.classList.remove("time6");
	    time7.classList.remove("time7");
	    time8.classList.remove("time8");
	    time9.classList.remove("time9");

	    playButton.classList.remove("play-button-on");
	    playButton.classList.add("play-button-off");

	    pauseButton.classList.remove("pause-button-off");
	    pauseButton.classList.add("pause-button-on");

	    playerAudio.play();
	    goWithProgressOfSong();
	}

	function PlayFifthSong() {
	    i = 4;
	    playerAudio.src = songTable[4];
	    song4.classList.add("changed-title-song-4");
	    song0.classList.remove("changed-title-song-0");
	    song1.classList.remove("changed-title-song-1");
	    song2.classList.remove("changed-title-song-2");
	    song3.classList.remove("changed-title-song-3");
	    song5.classList.remove("changed-title-song-5");
	    song6.classList.remove("changed-title-song-6");
	    song7.classList.remove("changed-title-song-7");
	    song8.classList.remove("changed-title-song-8");
	    song9.classList.remove("changed-title-song-9");

	    time4.classList.add("time4");
	    time0.classList.remove("time0");
	    time1.classList.remove("time1");
	    time2.classList.remove("time2");
	    time3.classList.remove("time3");
	    time5.classList.remove("time5");
	    time6.classList.remove("time6");
	    time7.classList.remove("time7");
	    time8.classList.remove("time8");
	    time9.classList.remove("time9");

	    playButton.classList.remove("play-button-on");
	    playButton.classList.add("play-button-off");

	    pauseButton.classList.remove("pause-button-off");
	    pauseButton.classList.add("pause-button-on");

	    playerAudio.play();
	    goWithProgressOfSong();
	}

	function PlaySixthSong() {
	    i = 5;
	    playerAudio.src = songTable[5];
	    song5.classList.add("changed-title-song-5");
	    song0.classList.remove("changed-title-song-0");
	    song1.classList.remove("changed-title-song-1");
	    song2.classList.remove("changed-title-song-2");
	    song3.classList.remove("changed-title-song-3");
	    song4.classList.remove("changed-title-song-4");
	    song6.classList.remove("changed-title-song-6");
	    song7.classList.remove("changed-title-song-7");
	    song8.classList.remove("changed-title-song-8");
	    song9.classList.remove("changed-title-song-9");

	    time5.classList.add("time5");
	    time0.classList.remove("time0");
	    time1.classList.remove("time1");
	    time2.classList.remove("time2");
	    time3.classList.remove("time3");
	    time4.classList.remove("time4");
	    time6.classList.remove("time6");
	    time7.classList.remove("time7");
	    time8.classList.remove("time8");
	    time9.classList.remove("time9");

	    playButton.classList.remove("play-button-on");
	    playButton.classList.add("play-button-off");

	    pauseButton.classList.remove("pause-button-off");
	    pauseButton.classList.add("pause-button-on");

	    playerAudio.play();
	    goWithProgressOfSong();
	}

	function PlaySeventhSong() {
	    i = 6;
	    playerAudio.src = songTable[6];
	    song6.classList.add("changed-title-song-6");
	    song0.classList.remove("changed-title-song-0");
	    song1.classList.remove("changed-title-song-1");
	    song2.classList.remove("changed-title-song-2");
	    song3.classList.remove("changed-title-song-3");
	    song4.classList.remove("changed-title-song-4");
	    song5.classList.remove("changed-title-song-5");
	    song7.classList.remove("changed-title-song-7");
	    song8.classList.remove("changed-title-song-8");
	    song9.classList.remove("changed-title-song-9");

	    time6.classList.add("time6");
	    time0.classList.remove("time0");
	    time1.classList.remove("time1");
	    time2.classList.remove("time2");
	    time3.classList.remove("time3");
	    time4.classList.remove("time4");
	    time5.classList.remove("time5");
	    time7.classList.remove("time7");
	    time8.classList.remove("time8");
	    time9.classList.remove("time9");

	    playButton.classList.remove("play-button-on");
	    playButton.classList.add("play-button-off");

	    pauseButton.classList.remove("pause-button-off");
	    pauseButton.classList.add("pause-button-on");

	    playerAudio.play();
	    goWithProgressOfSong();
	}

	function PlayEighthSong() {
	    i = 7;
	    playerAudio.src = songTable[7];
	    song7.classList.add("changed-title-song-7");
	    song0.classList.remove("changed-title-song-0");
	    song1.classList.remove("changed-title-song-1");
	    song2.classList.remove("changed-title-song-2");
	    song3.classList.remove("changed-title-song-3");
	    song4.classList.remove("changed-title-song-4");
	    song5.classList.remove("changed-title-song-5");
	    song6.classList.remove("changed-title-song-6");
	    song8.classList.remove("changed-title-song-8");
	    song9.classList.remove("changed-title-song-9");

	    time7.classList.add("time7");
	    time0.classList.remove("time0");
	    time1.classList.remove("time1");
	    time2.classList.remove("time2");
	    time3.classList.remove("time3");
	    time4.classList.remove("time4");
	    time5.classList.remove("time5");
	    time6.classList.remove("time6");
	    time8.classList.remove("time8");
	    time9.classList.remove("time9");

	    playButton.classList.remove("play-button-on");
	    playButton.classList.add("play-button-off");

	    pauseButton.classList.remove("pause-button-off");
	    pauseButton.classList.add("pause-button-on");

	    playerAudio.play();
	    goWithProgressOfSong();
	}

	function PlayNinthSong() {
	    i = 8;
	    playerAudio.src = songTable[8];
	    song8.classList.add("changed-title-song-8");
	    song0.classList.remove("changed-title-song-0");
	    song1.classList.remove("changed-title-song-1");
	    song2.classList.remove("changed-title-song-2");
	    song3.classList.remove("changed-title-song-3");
	    song4.classList.remove("changed-title-song-4");
	    song5.classList.remove("changed-title-song-5");
	    song6.classList.remove("changed-title-song-6");
	    song7.classList.remove("changed-title-song-7");
	    song9.classList.remove("changed-title-song-9");

	    time8.classList.add("time8");
	    time0.classList.remove("time0");
	    time1.classList.remove("time1");
	    time2.classList.remove("time2");
	    time3.classList.remove("time3");
	    time4.classList.remove("time4");
	    time5.classList.remove("time5");
	    time6.classList.remove("time6");
	    time7.classList.remove("time7");
	    time9.classList.remove("time9");

	    playButton.classList.remove("play-button-on");
	    playButton.classList.add("play-button-off");

	    pauseButton.classList.remove("pause-button-off");
	    pauseButton.classList.add("pause-button-on");

	    playerAudio.play();
	    goWithProgressOfSong();
	}

	function PlayTenthSong() {
	    i = 9;
	    playerAudio.src = songTable[9];
	    song9.classList.add("changed-title-song-9");
	    song0.classList.remove("changed-title-song-0");
	    song1.classList.remove("changed-title-song-1");
	    song2.classList.remove("changed-title-song-2");
	    song3.classList.remove("changed-title-song-3");
	    song4.classList.remove("changed-title-song-4");
	    song5.classList.remove("changed-title-song-5");
	    song6.classList.remove("changed-title-song-6");
	    song7.classList.remove("changed-title-song-7");
	    song8.classList.remove("changed-title-song-8");

	    time9.classList.add("time9");
	    time0.classList.remove("time0");
	    time1.classList.remove("time1");
	    time2.classList.remove("time2");
	    time3.classList.remove("time3");
	    time4.classList.remove("time4");
	    time5.classList.remove("time5");
	    time6.classList.remove("time6");
	    time7.classList.remove("time7");
	    time8.classList.remove("time8");

	    playButton.classList.remove("play-button-on");
	    playButton.classList.add("play-button-off");

	    pauseButton.classList.remove("pause-button-off");
	    pauseButton.classList.add("pause-button-on");

	    playerAudio.play();
	    goWithProgressOfSong();
	}

	function PlayNextSong() {
	    ++i;
	    if (i === 0) {
	        PlayFirstSong();
	    }
	    else if (i === 1) {
	        PlaySecondSong();
	    } 
	    else if (i === 2) {
	        PlayThirdSong();
	    }
	    else if (i === 3) {
	        PlayFourthSong();
	    }
	    else if (i === 4) {
	        PlayFifthSong();
	    }
	    else if (i === 5) {
	        PlaySixthSong();
	    }
	    else if (i === 6) {
	        PlaySeventhSong();
	    }
	    else if (i === 7) {
	        PlayEighthSong();
	    }
	    else if (i === 8) {
	        PlayNinthSong();
	    }
	    else if (i >= 9){
	        i = 0;
	        PlayTenthSong();
	    }
	    else if (i < 0){
	        i = 0;
	    }
	}

	function PlayPrevSong() {
	    --i;
	    if (i === 0) {
	        PlayFirstSong();
	    }
	    else if (i === 1) {
	        PlaySecondSong();
	    } 
	    else if (i === 2) {
	        PlayThirdSong();
	    }
	    else if (i === 3) {
	        PlayFourthSong();
	    }
	    else if (i === 4) {
	        PlayFifthSong();
	    }
	    else if (i === 5) {
	        PlaySixthSong();
	    }
	    else if (i === 6) {
	        PlaySeventhSong();
	    }
	    else if (i === 7) {
	        PlayEighthSong();
	    }
	    else if (i === 8) {
	        PlayNinthSong();
	    }
	    else if (i >= 9) {
	        i = 0;
	        PlayFirstSong();
	    }
	    else if (i < 0) {
	        i = 9;
	        PlayTenthSong();
	    }
	}

	function Mute() {
	    muteButton.classList.remove("volume");
	    muteButton.classList.add("volume-off");
	    unMuteButton.classList.remove("volume-mute-off");
	    unMuteButton.classList.add("volume-mute-on");
	    playerAudio.muted = true;
	}

	function unMute() {
	    muteButton.classList.add("volume");
	    muteButton.classList.remove("volume-off");
	    unMuteButton.classList.add("volume-mute-off");
	    unMuteButton.classList.remove("volume-mute-on");
	    playerAudio.muted = false;
	}
}