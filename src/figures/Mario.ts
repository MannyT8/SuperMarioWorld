import { DeathAnimation, Keys, Point, Settings } from '../types';
import { Figure } from './Figure';
import { Bullet } from './Bullet';
import { Item } from '../items/Item';
import { MarioState, setup, Direction, images, SizeState } from '../engine/constants';
import { Level } from '../engine/Level';
import { setStyle, setGauge, shiftBy } from '../utils';

export class Mario extends Figure implements DeathAnimation {
  deadly: number;
  cooldown: number;
  blinking: number;
  fast: boolean;
  crouching: boolean;
  jumping: boolean;
  deathBeginWait: number;
  deathEndWait: number;
  deathDir: number;
  deathCount: number;
  deathFrames: number;
  deathStepUp: number;
  deathStepDown: number;
  invulnerable: number;
  coins: number;
  lifes: number;
  marioState: MarioState;
  standSprites: Array<Array<Point>>;
  fireStandSprites: Array<Array<Point>>;
  crouchSprites: Array<Array<Point>>;
  jumpSprites: Array<Array<Point>>;
  isPaused: boolean;
  changeBackground: number;


  constructor(level: Level) {
    super(level);
    console.log(level);
      this.standSprites = [
      [{ x: 412, y: 112 }, { x: 500, y: 112 }], // small
      [{ x: 412, y: 292 }, { x: 500, y: 292 }], // big
      [{ x: 412, y: 1075}, { x: 500, y: 1075}], // fire
      [{ x: 412, y: 1248}, { x: 500, y: 1248}], // fly
    ];
    this.crouchSprites = [
      [{ x: 241, y: 193 }, { x: 672, y: 193 }], //small
      [{ x: 241, y: 374 }, { x: 672, y: 374 }], //big
      [{ x: 241, y: 1159}, { x: 672, y: 1159}], //fire
      [{ x: 241, y: 1159}, { x: 672, y: 1159}]]; //fly

    this.jumpSprites = [
      [{ x: 412, y: 200 }, { x: 500, y: 200 }], //small
      [{ x: 412, y: 380 }, { x: 500, y: 374 }], //big
      [{ x: 412, y: 1165}, { x: 500, y: 1165}], //fire
      [{ x: 412, y: 1165}, { x: 500, y: 1165}]]; //fly


    this.deadly = 0;
    this.invulnerable = 0;
    this.width = 80;
    this.blinking = 0;
    this.setOffset(-24, 0);
    this.cooldown = 0;
    this.player = true;
    this.deathCount = 0;
    this.deathBeginWait = Math.floor(700 / setup.interval);
    this.deathEndWait = 0;
    this.deathFrames = Math.floor(600 / setup.interval);
    this.deathStepUp = Math.ceil(200 / this.deathFrames);
    this.deathDir = 1;
    this.direction = Direction.right;
    this.crouching = false;
    this.jumping = false;
    this.fast = false;
    this.isPaused = false;
    this.changeBackground = 8;
    //  this.level.playMusic('game');
    // this.level.playMusic('gametest');
    // this.level.playMusic('invincible');
        // this.level.playMusic('hot_head_bop');
// this.level.playMusic('snakeychantey');
this.level.playMusic('psycho_driver');
console.log(level);
// this.level.playMusic('b');
// this.level.playMusic("c:\Users\torre\OneDrive\Desktop\SuperMario\mario5-sample-pilet\src\Assets\audio\b.ogg");
// this.level.playMusic('rattle_battle');
}

 
  init(x: number, y: number) {
    super.init(x, y);
    this.setSize(80, 80);
    this.setMarioState(MarioState.small);
    this.setLifes(setup.start_lives);
    this.setCoins(0);
    this.setImage(images.sprites, 81, 0);
  }

  setMarioState(state: MarioState) {
    this.marioState = state;
  }

  store(settings: Partial<Settings>) {
    settings.lifes = this.lifes;
    settings.coins = this.coins;
    settings.state = this.state;
    settings.marioState = this.marioState;
  }

  restore(settings: Settings) {
    this.setLifes(settings.lifes);
    this.setCoins(settings.coins);
    this.setState(settings.state);
  }

  setState(state: SizeState) {
    if (state !== this.state) {
      this.setMarioState(MarioState.small);
      super.setState(state);    }
  }

  setPosition(x: number, y: number) {
    super.setPosition(x, y);
    const r = this.level.width - 640;
    const w = this.x <= 210 ? 0 : this.x >= this.level.width - 230 ? r : r / (this.level.width - 440) * (this.x - 210);
    this.level.setParallax(w);
    if (this.onground && this.x >= this.level.width - 128) {
      this.victory();
    }
  }

  trigger(obj: Item) {
    obj.activate(this);
  }

  input(keys: Keys) {
    this.fast = keys.accelerate;
    this.crouching = keys.down;
    this.jumping = keys.up;

      if (this.onground && this.jumping) {
        this.jump();
      }
      if (!this.crouching) {

        if (keys.accelerate && this.marioState === MarioState.fire) {
          this.shoot();
      }

      if (keys.right || keys.left) {
        this.walk(keys.left, keys.accelerate);
      } else {
        this.vx = 0;
      }

      if(keys.pause){
// this.pause();
        console.log("Pause Pressed");
        console.log("Background = " + this.changeBackground);
        console.log("something happened");

        if(this.isPaused == false){
          this.level.setBackground(this.changeBackground);
          this.changeBackground = (this.changeBackground + 1)%10;
          // this.level.pause();
          // this.isPaused = true;
          console.log("isPaused = " + this.isPaused)

          return
        } 
        if(this.isPaused == true){
          this.level.start();
          this.isPaused = false;
          return
        } 
      }
    }
  }
  
// music(){
//   this.level.playMusic('success');
// }

  victory() {
    this.level.playMusic('success');
    this.clearFrames();
    setStyle(this.view, {
      display: 'block',
    });
    this.setImage(images.sprites, this.state === SizeState.small ? 241 : 161, 81);
    this.level.next();
  }

  pause() {
    this.level.pause();
  }

  unpause() {
    this.level.start();
  }

  shoot() {
    if (!this.cooldown) {
      this.cooldown = setup.cooldown;
      this.level.playSound('shoot');
      const bullet = new Bullet(this);
      bullet.init(this.x, this.y);
    }
  }

  setVelocity(vx: number, vy: number) {
    if (this.crouching) {
      vx = 0;
      this.crouch();
    } else if (this.onground){
      if (vx > 0)   this.walkRight();
      else if (vx < 0)  this.walkLeft();
       else if (vx == 0) this.stand();
    }

    super.setVelocity(vx, vy);
  }

  blink(times: number) {
    this.blinking = Math.max(2 * times * setup.blinkfactor, this.blinking);
  }

  invincible() {
    this.level.playMusic('invincible');
    this.deadly = Math.floor(setup.invincible / setup.interval);
    this.invulnerable = this.deadly;
    this.blink(Math.ceil(this.deadly / (2 * setup.blinkfactor)));
  }

  grow() {
    if (this.state === SizeState.small) {
      this.setState(SizeState.big);
      this.setMarioState(MarioState.big);
    }
    this.level.playSound('grow');
      this.blink(3);
  }

  shooter() {
      this.grow();
      this.setMarioState(MarioState.fire);
    }

  walk(reverse: boolean, fast: boolean) {
    this.vx = setup.walking_v * (fast ? 2 : 1) * (reverse ? -1 : 1);
  }

  walkRight() {
    if (this.marioState === MarioState.small) {
      // if (!this.setupFrames(8, 2, true, 'WalkRightSmall')) {
        this.setImage(images.sprites, 758, 112);

      //}
     } else if (this.marioState === MarioState.big) {
      // if (!this.setupFrames(9, 2, true, 'WalkRightBig')) {
        this.setImage(images.sprites, 758, 292);
     // }
    }
      else if (this.marioState === MarioState.fire){
      // if (!this.setupFrames(9, 2, false, 'WalkLeftFire')) {
        this.setImage(images.sprites, 760, 1075);
    //}
  }
  }

  walkLeft() {
    if (this.marioState === MarioState.small) {
      if (!this.setupFrames(8, 2, false, 'WalkLeftSmall')) {
        this.setImage(images.sprites, 154, 112);
      }
    } else if (this.marioState === MarioState.big) {

      if (!this.setupFrames(9, 2, false, 'WalkLeftBig')) {
        this.setImage(images.sprites, 154, 292);
      }
    }
      else if (this.marioState === MarioState.fire){
      if (!this.setupFrames(9, 2, false, 'WalkLeftFire')) {
        this.setImage(images.sprites, 154, 1075);
    }
  }
}

  stand() {
    const coords = this.standSprites[this.marioState - 1][this.direction === Direction.left ? 0 : 1];
    this.setImage(images.sprites, coords.x, coords.y);
    this.clearFrames();
  }

  crouch() {
    const coords = this.crouchSprites[this.marioState - 1][this.direction === Direction.left ? 0 : 1];
    this.setImage(images.sprites, coords.x, coords.y);
    this.clearFrames();
  }

  jump() {
    this.level.playSound('jump');
    this.vy = setup.jumping_v;
    const coords = this.jumpSprites[this.marioState - 1][this.direction === Direction.left ? 0 : 1];
    // const coords = this.jumpSprites[this.state - 1][this.direction === Direction.left ? 0 : 1];
    this.setImage(images.sprites, coords.x, coords.y);
    this.clearFrames();
  }

  move() {
    this.input(this.level.controls);
    super.move();
  }

  addCoin() {
    this.setCoins(this.coins + 1);
  }

  playFrame() {
    if (this.blinking) {
      if (this.blinking % setup.blinkfactor === 0) {
        setStyle(this.view, {
          display: this.view.style.display === 'none' ? 'block' : 'none',
        });
      }

      this.blinking--;
    }

    if (this.cooldown) {
      this.cooldown--;
    }

    if (this.deadly) {
      this.deadly--;
    }

    if (this.invulnerable) {
      this.invulnerable--;
    }

    super.playFrame();
  }

  setCoins(coins: number) {
    this.coins = coins;

    if (this.coins >= setup.max_coins) {
      this.addLife();
      this.coins -= setup.max_coins;
    }

    setGauge(this.level.world, 'coinNumber', `${this.coins}`);
  }

  addLife() {
    this.level.playSound('liveupgrade');
    this.setLifes(this.lifes + 1);
  }

  setLifes(lifes: number) {
    this.lifes = lifes;
    setGauge(this.level.world, 'liveNumber', `${this.lifes}`);
  }

  death() {
    if (this.deathBeginWait) {
      this.deathBeginWait--;
      return true;
    }

    if (this.deathEndWait) {
      return !!--this.deathEndWait;
    }

    shiftBy(this.view, 'bottom', this.deathDir, this.deathDir > 0 ? this.deathStepUp : this.deathStepDown);
    this.deathCount += this.deathDir;

    if (this.deathCount === this.deathFrames) {
      this.deathDir = -1;
    } else if (this.deathCount === 0) {
      this.deathEndWait = Math.floor(1800 / setup.interval);
    }

    return true;
  }

  die() {
    this.setMarioState(MarioState.small);
    this.deathStepDown = Math.ceil(240 / this.deathFrames);
    this.setupFrames(9, 2, false);
    this.setImage(images.sprites, 81, 205);
    this.level.playMusic('die');
    super.die();
  }

  

  hurt(from: Figure) {
    if (this.deadly) {
      from.die();
    } else if (this.invulnerable) {
      return;
    }
    else if (this.state === SizeState.small) {
      console.log("died from figure")
      this.die();
    } 
    else if (this.marioState === MarioState.big){
      console.log("big to small")
      this.level.playSound('hurt');
      this.invulnerable = Math.floor(setup.invulnerable / setup.interval);
      this.blink(Math.ceil(this.invulnerable / (2 * setup.blinkfactor)));
      this.setState(SizeState.small);
      return;
    }
     else if (this.marioState === MarioState.fire){
      console.log("fire to big")
     this.setMarioState(MarioState.big);
     this.level.playSound('hurt');
     return;
     }
    
  }
}
