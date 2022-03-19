const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100,
    };
    this.width = 100;
    this.height = 100;
  }

  draw() {
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

const player = new player();
player.draw();
