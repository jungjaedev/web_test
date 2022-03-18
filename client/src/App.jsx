import React, { useEffect, useRef } from 'react';

function App() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext('2d');
    contextRef.current = context;
  }, []);
  const move = () => {};
  const stop = () => {};

  return <canvas onKeyUp={move} onKeyDown={stop} ref={canvasRef} />;
}

export default App;
