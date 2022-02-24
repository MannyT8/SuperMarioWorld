// import { ItemFigure } from './ItemFigure';
// import { Figure } from '../figures/Figure';
// import { Level } from '../engine/Level';
// import { images, setup, GroundBlocking } from '../engine/constants';
// import { Mario } from '../figures/Mario';
// import { setStyle } from '../utils';

// export class Star extends ItemFigure {
//   active: boolean;
//   taken: number;

//   constructor(level: Level) {
//     super(level);
//     this.active = false;
//     // this.setImage(images.objects, 32, 69);
//     this.setImage(images.sprites, 402, 1878);
//     setStyle(this.view, {
//       display: 'none',
//     });
//   }

//   init(x: number, y: number) {
//     // super.init(x, y);
//     super.init(x, y + 32);
//     this.setSize(32, 32);
//   }

//   release() {
//     this.taken = 4;
//     this.active = true;
//     this.level.playSound('mushroom');
//     setStyle(this.view, {
//       display: 'block',
//     });
//     // this.setVelocity(setup.star_vx, setup.star_vy);
//     this.setVelocity(setup.mushroom_v, setup.gravity);

//     // this.setupFrames(10, 2, false);
//   }

//   collides(_is: number, _ie: number, _js: number, _je: number, _blocking: GroundBlocking) {
//     return false;
//   }

  

//   move() {
//     if (this.active) {
//       // this.vy += this.vy <= -setup.star_vy ? setup.gravity : setup.gravity / 2;
//       super.move();
//     }

//     if (this.taken) {
//       this.taken--;
//     }
//   }

//   hit(opponent: Figure) {
//     if (!this.taken && this.active && opponent.player) {
//       (<Mario>opponent).invincible();
//       this.die();
//     }
//   }
// }

import { ItemFigure } from './ItemFigure';
import { Figure } from '../figures/Figure';
import { images, Direction, setup, GroundBlocking } from '../engine/constants';
import { Level } from '../engine/Level';
import { Mario } from '../figures/Mario';
import { setStyle } from '../utils';

export class Star extends ItemFigure {
  active: boolean;
  released: number;

  constructor(level: Level) {
    super(level);
    this.active = false;
    // this.setImage(images.objects, 582, 60);
    // this.setImage(images.sprites, 122, 1884);
    this.setImage(images.sprites, 402, 1878);
    this.released = 0;
    setStyle(this.view, {
      zIndex: '94',
      display: 'none',
    });
  }

  init(x: number, y: number) {
    // super.init(x, y);
        super.init(x, y + 32);
    // this.setSize(32, 32);
    this.setSize(48, 32);

  }

  release() {
    this.released = 4;
    // this.active = true;
        this.setVelocity(setup.star_vx, setup.star_vy);
    this.level.playSound('mushroom');

    setStyle(this.view, {
      display: 'block',
    });

  }

  move() {
    if (this.active) {
      super.move();

      if (this.vx === 0) {
        this.setVelocity(this.direction === Direction.right ? -setup.star_vx : setup.star_vx, this.vy);
      }
      if (this.vy === 0) {
        this.setVelocity(this.vx, setup.star_vy);
                    this.vy += this.vy <= -setup.star_vy ? setup.gravity : setup.gravity / 2;
      }
    } else if (this.released) {
      this.released--;
      this.setPosition(this.x, this.y + 8);

      if (!this.released) {
        this.active = true;
        setStyle(this.view, {
          zIndex: '99',
        });
      }
    }
  }

  hit(opponent: Figure) {
    if (this.active && opponent.player) {
     (<Mario>opponent).invincible();
  

      this.die();
    }
  }
}
