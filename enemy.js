// example.js

// Dummy global objects to satisfy references
const Enjine = {
  Resources: {
    PlaySound: (sound) => console.log(`Playing sound: ${sound}`)
  }
};
const Mario = {
  MarioCharacter: {
    Facing: 1
  }
};

class Example {
  constructor(X, Y, Width) {
    this.X = X;
    this.Y = Y;
    this.Width = Width;
    this.Xa = 0;
    this.Ya = 0;
    this.FlyDeath = false;
    this.SpriteTemplate = { IsDead: false };
    this.DeadTime = 0;
    this.Winged = true;
    this.YFlip = false;
  }

  updatePosition(x, y) {
    // First check
    if (x === (this.X / 16) | 0 && y === (this.Y / 16) | 0) {
      return false;
    }
    // ... other logic could go here
    return true;
  }

  handleCollision(xTile, yTile) {
    // Second check
    if (
      this.X + this.Width > xTile * 16 &&
      this.X - this.Width < xTile * 16 + 16 &&
      yTile === ((this.Y - 1) / 16) | 0
    ) {
      Enjine.Resources.PlaySound("kick");
      this.Xa = -Mario.MarioCharacter.Facing * 2;
      this.Ya = -5;
      this.FlyDeath = true;
      if (this.SpriteTemplate !== null) {
        this.SpriteTemplate.IsDead = true;
      }
      this.DeadTime = 100;
      this.Winged = false;
      this.YFlip = true;
    }
  }
}

// Export the class for use elsewhere
module.exports = Example;
