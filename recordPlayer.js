const playButton = document.querySelector('#play');
const pauseButton = document.querySelector('#pause');
const stopButton = document.querySelector('#stop');
const musicDisplay = document.querySelector('#musicDisplay');

//all info stored in object
const record = {
    artist: "J. Dilla",
    album: "Donuts",
    year: 2006,
    songs: 31,
    minutes: 43,
    seconds: 24,
    format: ["vinyl", "CD", "mp3", "casette"],
    sound: new Audio('/audio-files/jdilla_donuts_stop.wav'),
    playing: false,
    play: function () {
        if (!this.playing) {
            this.playing = true;
            musicDisplay.innerText = `Playing ${this.album} by ${this.artist}`;
            this.sound.play();
        }
    },
    pause: function () {
        if (this.playing) {
            this.playing = false;
            musicDisplay.innerText = `You have paused playback`;
            this.sound.pause();
        }
    },
    stop: function () {
        if (this.playing) {
            this.playing = false;
            musicDisplay.innerText = `You have stopped playback`;
            this.sound.pause();
            this.sound.currentTime = 0;
        }
    }
};
playButton.addEventListener('click', function () {
    record.play();
});
pauseButton.addEventListener('click', function () {
    record.pause();
});
stopButton.addEventListener('click', function () {
    record.stop();
});
//create a constructor function so that I can create a bunch more record objects with all this functionality