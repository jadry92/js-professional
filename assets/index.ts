import MediaPlayer from './MediaPlayer';
import AutoPause from './plugins/AutoPause';
import AutoPlay from './plugins/AutoPlay';
import AdsPlugin from './plugins/Ads'

const video = document.querySelector('video');
const player = new MediaPlayer({
  el: video,
  plugins: [
    new AutoPlay(),
    new AutoPause(),
    new AdsPlugin()
  ]
});

const playButton: HTMLElement = document.querySelector('#play');
playButton.onclick = () => player.togglePlay();
const muteButton: HTMLElement = document.querySelector('#mute');
muteButton.onclick = () => player.toggleMute();

if ('serviceWorker' in Navigator) {
  navigator.serviceWorker.register('/assets/sw.js').catch(error => console.error(error))
}