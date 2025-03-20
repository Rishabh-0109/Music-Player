const ArjanVally = new Audio('Songs/ARJAN-VAILLY.mp3');
const DollarSidhuMooseWala = new Audio('Songs/Dollar-SIDHU-MOOSEWALA.mp3');
const EastSideFlow = new Audio('Songs/East-Side-Flow-Sidhu-Moose-Wala.mp3');
const EXPERT = new Audio('Songs/EXPERT-JATT.mp3');
const MILLIONAIRE = new Audio('Songs/MILLIONAIRE-SONG.mp3');
const RussianBandana = new Audio('Songs/Russian-Bandana.mp3');
const ShubhCheques = new Audio('Songs/Shubh-Cheques.mp3');
const SoHigh = new Audio('Songs/So-High-Sidhu-Moose-Wala.mp3');
const hiii = new Image('Image/ArjanVally.jpg');

// button Selection
const preBtn = document.getElementById('pre');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const songName = document.getElementById('songs-name');
const photo = document.getElementById('image');

const Songs = [
    { ele: ArjanVally, audioName: 'Arjan-Vally' , poster: 'url(Image/Arjan-Vally.jpg)' },
    { ele: DollarSidhuMooseWala, audioName: 'Dollar-Sidhu Moose Wala', poster:'url(Image/Dollar.jpeg)' },
    { ele: EastSideFlow, audioName: 'EastSideFlow Siddhu Moose Wala', poster:'url(Image/East-Side..jpg)' },
    { ele: EXPERT, audioName: 'Expert Jatt', poster:'url(Image/Expert-Jatt.jpg)' },
    { ele: MILLIONAIRE, audioName: 'Millionaire', poster:'url(Image/Millionare.jpg)' },
    { ele: RussianBandana, audioName: 'Russian Bandana' , poster:'url(Image/Russian-bandana.jpg)'},
    { ele: ShubhCheques, audioName: 'Cheques', poster:'url(Image/Cheques.jpg)' },
    { ele: SoHigh, audioName: 'So High', poster:'url(Image/So-high.jpg.jpg)' },
];

for (const song of Songs) {
    song.ele.addEventListener('ended', () => {
        updateSong('next');
        PlayPause();
    })

}

let current = 0;
let currentSong = Songs[current].ele;
songName.textContent = Songs[current].audioName;
photo.style.backgroundImage =  Songs[current].poster;

playBtn.addEventListener('click', () => {
    PlayPause();
});

nextBtn.addEventListener('click', () => {
    updateSong('next');
    PlayPause();
});
preBtn.addEventListener('click', () => {
    updateSong('pre');
    PlayPause();
})

const updateSong = (action) => {
    currentSong.pause();
    currentSong.currentTime = 0;
    if (action === 'next') {
        current++;
        if (current > Songs.length - 1) current = 0;

    }
    else if (action === 'pre') {
        current--;
        if (current < 0) current = Songs.length - 1;
    }
    currentSong = Songs[current].ele;
    songName.textContent = Songs[current].audioName;
    photo.style.backgroundImage =  Songs[current].poster;
}

const PlayPause = () => {
    if (currentSong.paused) {
        currentSong.play();
        playBtn.className = 'bi-pause-circle-fill';

    }
    else {
        currentSong.pause();
        playBtn.className = 'bi-play-circle-fill';
    }

}
