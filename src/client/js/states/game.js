'use strict';

var Player = require('../entities/player');

var WORLD_ASPECT_RATIO = 4 / 3;
var WORLD_WIDTH = 2500;
var WORLD_HEIGHT = WORLD_WIDTH / WORLD_ASPECT_RATIO;

var PHYSICS_GRAVITY = 1200;

function Game() {}

Game.prototype.create = function() {
    // to enable fps calculation
    this.game.time.advancedTiming = true;

    this.gridTileSprite = null;

    this.initWorld();
    this.initPhysics();

    this.player = new Player(this.game);
    
    this.game.camera.follow(this.player.character);

    this.bindDOMEvents();
};

Game.prototype.bindDOMEvents = function() {
    window.addEventListener('resize', this.resizeHandler.bind(this));
};

Game.prototype.resizeHandler = function() {
    var width = window.innerWidth;
    var height = window.innerHeight;

    this.game.renderer.resize(width, height);
    this.game.camera.setSize(width, height);

    this.gridTileSprite.width = width;
    this.gridTileSprite.height = height;
};

Game.prototype.initWorld = function() {
    var platformTilemap;

    this.game.stage.backgroundColor = '#fff';
    this.gridTileSprite = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'grid');
    this.gridTileSprite.fixedToCamera = true;
    this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
    this.game.world.setBounds(0, 0, WORLD_WIDTH, WORLD_HEIGHT);

    platformTilemap = this.add.tilemap('map');
    platformTilemap.addTilesetImage('world-tileset', 'map-tileset');
    platformTilemap.setCollisionBetween(1, 4);

    this.platformsLayer = platformTilemap.createLayer('World_map');

    this.platformsLayer.resizeWorld();
};

Game.prototype.initPhysics = function() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = PHYSICS_GRAVITY;
};

Game.prototype.update = function() {
    this.gridTileSprite.tilePosition.set(-this.game.camera.x, -this.game.camera.y);

    this.game.physics.arcade.collide(this.player.character, this.platformsLayer);
    this.player.update();
};

Game.prototype.render = function() {
    this.game.debug.cameraInfo(this.game.camera, 32, 32);
    this.game.debug.text('fps: '+ this.game.time.fps || '--', 32, 140);
};

module.exports = Game;
