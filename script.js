const tracks = [
    {title : "Little Braver",
     path : "tracks/New Empire - A Little Braver (Official Music Video).mp3",
     artist : "New Empire",
     img: "img/little braver.jpg"
    },
    {title : "Berta",
        path : "tracks/ዮሐና - በርታ ft. ካሥማሠ - Yohana - Berta ft. Kassmasse.mp3",
        artist : "Yohana ft. Kasmase",
        img: "img/yohanakasmase.png"

       },
       {title : "Growing Pains",
        path : "tracks/[THE HEIRS] Young Do  Eun sang  FAN MV - Growing pains (Eng Sub).mp3",
        artist : "The Heirs",
        img: "img/the heirs.jpg"
       }
]

let current_index = 0;
const music_name = document.getElementById("music-name");
const artist = document.getElementById("artist");
const pic = document.getElementById("pic");
const music = document.getElementById("audio");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const play = document.getElementById("play");
const slider = document.getElementById("slider");


music.onloadedmetadata = function () {
    slider.value =  0;
    slider.max = music.duration;
}

function setMusic(track){
    music.src = track.path;
    music_name.innerHTML = track.title;
    artist.innerHTML = track.artist;
    pic.src = track.img;
    
}




function stopStart() {
    if (music.paused) {  
        music.play();
        play.classList.remove("fa-play");
        play.classList.add("fa-pause");
    } else {
        music.pause();
        play.classList.remove("fa-pause");
        play.classList.add("fa-play");
    }
}

function playPrev(){
    current_index = (current_index - 1) % tracks.length;
    setMusic(tracks[current_index]);
    stopStart();

}

function playNext(){
    current_index = (current_index + 1) % tracks.length;
    setMusic(tracks[current_index]);
    stopStart();

}


music.addEventListener("timeupdate", function() {
    slider.value = music.currentTime; 
});

slider.addEventListener("input", function() {
    music.currentTime = slider.value; 
});

slider.addEventListener("change", function() {
    if (music.paused) {
        play.classList.remove("fa-play");
        play.classList.add("fa-pause");
        music.play(); // Resume playback if paused
    }
});


play.addEventListener("click", stopStart);
prev.addEventListener("click", playPrev);
next.addEventListener("click", playNext);

setMusic(tracks[current_index]);

