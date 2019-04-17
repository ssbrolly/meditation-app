// const app = () => {
//     const song = document.querySelector('.song');
//     const play = document.querySelector('.play');
//     const outline = document.querySelector('.moving-outline circle');
//     const video = document.querySelector('.vid-container video');

//     // Sounds
//     const sounds = document.querySelectorAll('.sound-picker button');
//     // Time Display
//     const timeDisplay = document.querySelector('.time-display');
//     const timeSelect = document.querySelectorAll('.time-select button');
//     // Get the length of the outline
//     const outLineLength = outline.getTotalLength();
//     // Duration
//     let fakeDuration = 600;

//     outline.style.strokeDasharray = outLineLength;
//     outline.style.strokeDashoffset = outLineLength;

//     // Play sounds
//     play.addEventListener('click', () => {
//         checkPlaying(song);
//     });

//     sounds.forEach(option => {
//         option.addEventListener('click', function() {
//             song.src = this.getAttribute('data-sound');
//             video.src = this.getAttribute('data-video')
//             checkPlaying(song);
//         });
//     })

//     //Select sounds
//     timeSelect.forEach(option=> {
//         option.addEventListener('click', function() {
//             fakeDuration = this.getAttribute('data-time');
//             let seconds = Math.floor(fakeDuration % 60);
//             let minutes = Math.floor(fakeDuration / 60)
//             let secondZero = 0;
//             if (seconds !== 0) {
//                 secondZero = '';
//             };
//             timeDisplay.textContent = `${minutes}:${seconds}${secondZero}`;
                // resetTimer(song);
//         });
//     });

    // const resetTimer = (song) => {
    //     song.currentTime = 0;
    //     checkPlaying(song);
    // };

//     //Stop and Play sounds function;
//     function checkPlaying(song) {
//         if (song.paused) {
//             song.play();
//             video.play();
//             play.src = './svg/pause.svg';
//         } else {
//             song.pause();
//             video.pause();
//             play.src = './svg/play.svg';
//         };
//     };

//     // Animate circle
//     song.ontimeupdate = () => {
//         let currentTime = song.currentTime;
//         let elapsed = fakeDuration - currentTime;
//         let seconds = Math.floor(elapsed % 60);
//         let minutes = Math.floor(elapsed / 60);

//         // Animate the circle
//         let progress = outLineLength - (currentTime / fakeDuration) * outLineLength;
//         outline.style.strokeDashoffset = progress;

//         // Animate the text
//         timeDisplay.textContent = `${minutes}:${seconds}`;

//         if (currentTime >= fakeDuration) {
//             song.pause();
//             song.currentTime = 0;
//             play.src = './svg/play.svg';
//             video.pause();
//         };
//     };
// };

// app();



const app = () => {
    const song = document.querySelector('.song');
    const video = document.querySelector('.vid-container video');
    const play = document.querySelector('.play');
    const outline = document.querySelector('.moving-outline circle');

    // time display
    let timeDisplay = document.querySelector('.time-display');
    let timeSelect = document.querySelectorAll('.time-select button');
    // sounds
    let sounds = document.querySelectorAll('.sound-picker button');
    //circle length
    let outlineLength = outline.getTotalLength();
    
    let fakeDuration = 600;

    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;

    play.addEventListener('click', () => {
        checkPlaying(song);
    });

    const checkPlaying = (song) => {
        if (song.paused) {
            song.play();
            video.play();
            play.src = './svg/pause.svg';
        } else {
            song.pause();
            video.pause();
            play.src = './svg/play.svg';
        };
    };

    play




}

app();