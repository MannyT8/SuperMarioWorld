import { Keys } from './types';

function keydownHandler(ev: KeyboardEvent) {
  return keys.handler(ev, true);
}

function keyupHandler(ev: KeyboardEvent) {
  return keys.handler(ev, false);
}

export const keys: Keys = {
  bind() {
    document.addEventListener('keydown', keydownHandler);
    document.addEventListener('keyup', keyupHandler);
  },
  reset() {
    keys.left = false;
    keys.right = false;
    keys.accelerate = false;
    keys.jump = false;
    keys.up = false;
    keys.down = false;
    keys.pause = false;
  },

  paused(){
    keys.pause = !keys.pause;
    console.log(keys.pause);
  },

  unbind() {
    document.removeEventListener('keydown', keydownHandler);
    document.removeEventListener('keyup', keyupHandler);
  },
  handler(ev: KeyboardEvent, status: boolean) {
    switch (ev.keyCode) {
      case 57392: //CTRL on MAC
      case 17: //CTRL
      case 75: //K
        keys.accelerate = status;
        break;
      case 83: //S
      case 40: //DOWN ARROW
        keys.down = status;
        break;
      case 68: //D
      case 39: //RIGHT ARROW
        keys.right = status;
        break;
      case 65: //A
      case 37: //LEFT ARROW
        keys.left = status;
        break;
      case 87: //W
      case 38: //UP ARROW
        keys.up = status;
        break;
        case 76: //L
        keys.jump = status;
        break;
        case 32: //SPACE BAR
        keys.pause = status;
        break;
      default:
        return true;
    }

    ev.preventDefault();
    return false;
  },
  
  accelerate: false,
  left: false,
  jump: false,
  up: false,
  right: false,
  down: false,
  pause: false,
};
