
// musicData
const musicData = [

    {
        id: 1,
        name: 'Future Candy',
        duracion: 269_000,
        acopy: 'https://www.youtube.com/watch?v=fLbDZWQWJoA&ab_channel=TONY'
    },
    {
        id: 2,
        name: 'Gotoubun no Katachi',
        duracion: 260_000,
        acopy: 'https://www.youtube.com/watch?v=pmAzNaSBu0w&ab_channel=R-Maldonado84'
    },
    {
        id: 3,
        name: 'Il vento d`oro',
        duracion: 295_000,
        acopy: 'https://www.youtube.com/watch?v=U0TXIXTzJEY&ab_channel=YugoKanno-Topic'
    },
    {
        id: 4,
        name: 'Isekai Girls',
        duracion: 227_000,
        acopy: 'https://www.youtube.com/watch?v=qHV2zs9OFHE&ab_channel=Kiranime'
    },
    {
        id: 5,
        name: 'Lagtrain',
        duracion: 251_000,
        acopy: 'https://www.youtube.com/watch?v=UnIhRpIT7nc&ab_channel=稲葉曇'
    },
    {
        id: 6,
        name: 'Lisa',
        duracion: 206_000,
        acopy: 'https://www.youtube.com/watch?v=awkkyBH2zEo&ab_channel=BLACKPINK'
    },
    {
        id: 7,
        name: 'Noushou Sakaretsu Girl',
        duracion: 191_000,
        acopy: 'https://www.youtube.com/watch?v=ybb9oDbyucI&ab_channel=666DeadDeath'
    },
    {
        id: 8,
        name: 'Onegai konkon',
        duracion: 244_000,
        acopy: 'https://www.youtube.com/watch?v=d0oPe63T6ek&ab_channel=Nanahira'
    },
    {
        id: 9,
        name: 'Renai Circulation',
        duracion: 254_000,
        acopy: 'https://www.youtube.com/watch?v=uKxyLmbOc0Q&ab_channel=%2anamirin'
    },
    {
        id: 10,
        name: 'Share the light',
        duracion: 278_000,
        acopy: 'https://www.youtube.com/watch?v=wNwGiouyLbQ&ab_channel=StivAnim'
    },
    {
        id: 11,
        name: 'Sparkling daydream',
        duracion: 249_000,
        acopy: 'https://www.youtube.com/watch?v=PamFXc4L_5s&ab_channel=ZAQ-Topic'
    },
    {
        id: 12,
        name: 'Seishun Buta Yarou - Fukashigi no Carte Instrumental (KARAOKE)',
        duracion: 237_000,
        acopy: 'https://www.youtube.com/watch?v=vksj3Ubs6IA'
    },
    {
        id: 13,
        name: 'CHIBI BAILANDO//ENDING ANIME',
        duracion: 237_000,
        acopy: 'https://www.youtube.com/watch?v=R-8MKxZuGq4&ab_channel=ANIMEEdits'
    },
    {
        id: 14,
        name: 'Tokyo (Original) | Nya! arigato',
        duracion: 174_000,
        acopy: 'https://www.youtube.com/watch?v=z3Pzfi476HI'
    },


];


// musicBtns
const playBtn = document.querySelector( '#play' );
const pauseBtn = document.querySelector( '#pause' );
const forwardBtn = document.querySelector( '#forward' );


let musicActualDuration;


// getInfoMusic
const getInfoMusic = ( numberMusic ) => {

    const musicInfo = musicData.find( e => e.id === numberMusic );
    musicActualDuration = musicInfo.duracion;
    console.log( musicActualDuration )
    return `Ha reproducir: ${ musicInfo.name }\nDuracion: ${ musicInfo.duracion }\nLink: ${ musicInfo.acopy }`

}


const music = () => {

    numeroMusicActual = Math.floor( Math.random() * ( 15 - 1 ) ) + 1;
    const musicActual = new Audio();
    const infoMusic = getInfoMusic( numeroMusicActual );
    console.log( infoMusic );
    musicActual.src = `./music/music${ numeroMusicActual }.mp3`;
    return musicActual;

};


let musicActualMp3 = music();
console.log( musicActualMp3 );


// playBtn
playBtn.addEventListener( 'click', () => {
    musicActualMp3.play();
});


// pauseBtn
pauseBtn.addEventListener( 'click', () => {
    musicActualMp3.pause();
    console.log( 'Musica pausada' );
});


// forwardBtn
forwardBtn.addEventListener( 'click', () => {
    musicActualMp3.pause();
    musicActualMp3 = music();
    musicActualMp3.play()
});


