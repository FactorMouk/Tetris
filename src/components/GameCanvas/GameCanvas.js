import "./GameCanvas.scss";
import React, { useState, useEffect } from "react";

export function GameCanvas() {
  const COLS = 10;
  const ROWS = 20;
  const BLOCKSIZE = 40;
  const [boardCtx, setBoardCtx] = useState(null);
  const [board, setBoard] = useState(
    Array.from({ length: ROWS }, () => Array(COLS).fill(0))
  );

  useEffect(() => {
    drawBoard();
  }, []);

  function drawBoard() {
    let ctxAux = document.getElementById("tetris-canvas").getContext("2d");
    ctxAux.canvas.width = BLOCKSIZE * COLS;
    ctxAux.canvas.height = BLOCKSIZE * ROWS;
    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLS; j++) {
        ctxAux.fillStyle = "black";
        ctxAux.strokeStyle = "#ffffff1a";
        ctxAux.fillRect(j * BLOCKSIZE, i * BLOCKSIZE, BLOCKSIZE, BLOCKSIZE);
        ctxAux.strokeRect(j * BLOCKSIZE, i * BLOCKSIZE, BLOCKSIZE, BLOCKSIZE);
      }
    }
    setBoardCtx(ctxAux);
    console.log(boardCtx, board, setBoard);
  }

  return <canvas id="tetris-canvas"></canvas>;
}
