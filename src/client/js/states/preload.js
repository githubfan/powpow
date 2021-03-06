/**
* Studiengang: MultimediaTechnology / FHS
* Zweck: Web (Basisqualifikationen)
* Autor: Erfan Ebrahimnia
*/

'use strict';

function Preload() {}

Preload.prototype.preload = function() {
    this.loadAssets();
    this.load.onLoadComplete.addOnce(this.onLoadCompleteHandler, this);
};

Preload.prototype.loadAssets = function() {
    // images
    this.load.image('grid', '/game-assets/grid.jpg');
    this.load.image('pewpew', '/game-assets/sprites/pewpew.png', 64, 56);
    this.load.image('healthPickup', '/game-assets/sprites/health.png', 24, 20);
    this.load.image('ammoPickup', '/game-assets/sprites/ammo.png', 13, 24);
    this.load.image('death', '/game-assets/sprites/death.png', 100, 100);
    this.load.image('dickbutt', '/game-assets/sprites/dickbutt.png', 422, 424);
    this.load.image('sun', '/game-assets/sprites/sun.png', 324, 324);
    this.load.spritesheet('character', '/game-assets/sprites/character.png', 100, 140, 6);
    this.load.spritesheet('projectile', '/game-assets/sprites/projectile.png', 43, 64, 6);
    this.load.spritesheet('jetpack', '/game-assets/sprites/jetpack_spritesheet.png', 40, 120, 3);

    // audio
    this.load.audio('boom', '/game-assets/sounds/boom.wav');
    this.load.audio('death', '/game-assets/sounds/death.mp3');
    this.load.audio('jetpack', '/game-assets/sounds/jetpack.wav');
    this.load.audio('no-ammo', '/game-assets/sounds/no-ammo.wav');
    this.load.audio('pickup', '/game-assets/sounds/pickup.wav');
    this.load.audio('shoot', '/game-assets/sounds/shoot.wav');
    this.load.audio('walk', '/game-assets/sounds/walk.wav');
};

Preload.prototype.onLoadCompleteHandler = function() {
    // hide loader
};

module.exports = Preload;
