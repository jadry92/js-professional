import MediaPlayer from './MediaPlayer.js';
import AutoPause from './plugins/AutoPause.js';
import AutoPlay from './plugins/AutoPlay.js';


const video = document.querySelector('video');
const player = new MediaPlayer({
  el: video,
  plugins: [
    new AutoPlay(),
    new AutoPause()
  ]
});

const button_play = document.querySelector('#play');
button_play.onclick = () => player.togglePlay();
const button_mute = document.querySelector('#mute');
button_mute.onclick = () => player.toggleMute();

if ('serviceWorker' in Navigator) {
  navigator.serviceWorker.register('/assets/sw.js').catch(error => console.error(error))
}