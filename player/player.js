let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume = document.querySelector("#volume");
let volume_show = document.querySelector("#volume_show")
let volume_icon = document.querySelector('#volume_icon');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');


let timer;
let autoplay = 0;

let index_no = 0;
let playing_song = false;

let track = document.createElement('audio');

let All_song = [

    {
        name : "Staring at the night sky",
        path : "music/2.mp3",
        img : "img/Staring At The Night Sky.jpg",
        singer : "Noise"
        }   
        ,{
            name : "Vastness",
            path : "music/3.mp3",
            img : "img/Vastness.png",
            singer : "Noise"
            }   
            ,{
                name : "love letter",
                path : "music/4.mp3",
                img : "img/Love Letter.jpg",
                singer : "Noise"
                }   
                ,{
                    name : "lust or love",
                    path : "music/5.mp3",
                    img : "img/Lust Or Love.jpg",
                    singer : "Noise"
                    }   
                    ,{
                        name : "Goals are ahead",
                        path : "music/1.mp3",
                        img : "img/Goals Are Ahead.jpg",
                        singer : "Noise"
                        }
    ,{
    name : "jb-rb",
    path : "music/6.mp3",
    img : "img/Jb-Rb.jpg",
    singer : "Noise"
    }
    ,{
        name : "Groovy jazz",
        path : "music/15.mp3",
        img : "img/Groovy Jazz.jpg",
        singer : "Noise"
        }   
        ,{
            name : "Lonely in the bar",
            path : "music/14.mp3",
            img : "img/Lonely In The Bar.jpg",
            singer : "Noise"
            }   
            ,{
                name : "life is a movie",
                path : "music/7.mp3",
                img : "img/Life Is A Movie.jpg",
                singer : "Noise"
                }   
                ,{
                    name : "lullaby night",
                    path : "music/8.mp3",
                    img : "img/Lullaby Night.jpg",
                    singer : "Noise"
                    }   
    ,{
    name : "Classical",
    path : "music/10.mp3",
    img : "img/Classical.jpg",
    singer : "Noise"
    }
    ,{
        name : "Red moon",
        path : "music/13.mp3",
        img : "img/Red Moon.jpg",
        singer : "Noise"
        }   
        ,{
            name : "Chill bro",
            path : "music/11.mp3",
            img : "img/Chill Bro.jpg",
            singer : "Noise"
            }   
            ,{
                name : "Chillax",
                path : "music/9.mp3",
                img : "img/Chillax.jpg",
                singer : "Noise"
                }   
                ,{
                    name : "Just walk",
                    path : "music/12.mp3",
                    img : "img/Just Walk.jpg",
                    singer : "Noise"
                    }   
]

//All funtions

// f load track
function load_track(index_no){
    clearInterval(timer);
    reset_slider();
    track.src = All_song[index_no].path;
    title.innerHTML = All_song[index_no].name;
    track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

    total.innerHTML = All_song.length;
    present.innerHTML = index_no + 1;
    timer = setInterval(range_slider , 1000);
}
load_track(index_no);


//mute song
function mute_sound(){
    track.volume = 0;
    volume.value = 0;
    volume_show.innerHTML = 0;
    }
   

//reset song slider
function reset_slider(){
    slider.value = 0 ;
}

//Checking the song is playing or not 
function justplay(){
    if(playing_song == false){
        playsong();
    }
    else{
        pausesong();
    }
}



function playsong(){
    track.play();
    playing_song = true;
    play.innerHTML = '<i class="bi bi-pause-fill"></i>';
}

//pause song
function pausesong(){
    track.pause();
    playing_song = false;
    play.innerHTML = '<i class="bi bi-play-fill"></i>';
}

//next song
function next_song(){
    if(index_no < All_song.length-1){
        index_no += 1;
        load_track(index_no);
        playsong();
    }
    else{
        
    }
}

//previous song
function previous_song(){
    if(index_no > 0){
        index_no -= 1;
        load_track(index_no);
        playsong();
    }
    else{
        index_no = All_song.length;
        load_track(index_no);
        playsong();
    }
}

//change volume
function change_volume(){
   
    track.volume = recent_volume.value;
    volume_show.innerHTML = recent_volume.value;
}



//change slider position
function change_duration(){
    slider_position = track.duration * (slider.value / 100);
    track.currentTime = slider_position;
}

//autoplay
function autoplay_switch(){
    if(autoplay == 1){
        autoplay = 0;
        auto_play.style.background = "rgba(255,255,255,0.2)";
    }
    else{
        autoplay = 1;
        auto_play.style.background = "#174aaa";
    }
}

function range_slider(){
    let position = 0;

    //update slider position
    if(!isNaN(track.duration)){
        position = track.currentTime * (100 / track.duration);
        slider.value = position;
    }
}

//function will run when song is over
if(track.ended){
    play.innerHTML = '<i class="bi bi-play-fill"></i>';
    if(autoplay == 1){
        index_no += 1;
        load_track(index_no);
        playsong();
    }
}