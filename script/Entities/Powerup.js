ENGINE.Powerup = function(args) {

  Utils.extend(this, {
    type: "medikit" /* default color if none is provided */
  }, args);

  this.sprites = {
    "medikit": [103, 66, 15, 15]
  };

  this.sprite = this.sprites[this.type];

  this.width = this.sprite[2];
  this.height = this.sprite[3];
  this.radius = Math.min(this.width, this.height) / 2 | 0;

};

ENGINE.Powerup.prototype = {

  constructor: ENGINE.Coin,

  collidable: true,

  collision: function(object) {

    if (object instanceof ENGINE.Player) {

      object.powerUp(this);
      this.collection.remove(this);

    }

  },

  step: function(delta) {
  },

  render: function(delta) {
    app.layer.drawRegion(app.images.spritesheet, this.sprite, this.x, this.y);
  }

};
