let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track_name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');


let track_index =0;
let isPlaying = false;
let isRandome = false;
let updateTimer;

const music_list = [
    {
        img:'images/fallingdown.jpg',
        name:'Falling Down',
        artist:'Wid Cards',
        music: 'music/falingdown.mp3'
    },
    {
        img:'images/faded.png',
        name:'Faded',
        artist:'Alan Walker',
        music: 'music/Faded.mp3'
    },
    {
        img:'images/ratherbe.jpg',
        name:'Rather Be',
        artist:'Clean Bandit',
        music: 'music/Rather Be.mp3'
    }
];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = "Playing music " +(track_index + 1) +"of" + music_list.length;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
    random_bg_color();
}

function randowm_bg_color(){
    let hex = ['0','1','3','4', '5','6','7','8','9,']
}