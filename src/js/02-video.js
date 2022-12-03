import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
player.on('timeupdate', throttle(currentVideoTime, 1000));

function currentVideoTime({ seconds, duration }) {
  if ((seconds = duration)) return localStorage.clear();

  localStorage.setItem('videoplayer-current-time', seconds);
}
