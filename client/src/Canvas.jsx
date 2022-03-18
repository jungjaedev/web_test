import React, { useState, useEffect } from 'react';

const Canvas = props => {
  const [first, setFirst] = useState('');
  const [canvas, setCanvas] = useState();

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
      first.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }
  if (first !== '') {
    const player = new Player();
    player.draw(first);
  }

  useEffect(() => {
    setCanvas(props.canvasRef.current);
    const context = props.canvas.getContext('2d');

    setFirst(context);
  }, [canvas]);

  return <canvas ref={props.canvasRef} />;
};

export default Canvas;
