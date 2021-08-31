import "./HoldBoard.scss";
import React, { useState, useEffect } from "react";

export function HoldBoard() {
  const COLS = 4;
  const ROWS = 4;
  const BLOCKSIZE = 40;

  const [holdBoardCtx, setHoldBoardCtx] = useState(null);

  useEffect(() => {
    drawHoldBoard();
  }, []);

  function drawHoldBoard() {
    let ctxAux = document.getElementById("hold-board").getContext("2d");
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
    setHoldBoardCtx(ctxAux);
    console.log(holdBoardCtx);
  }
  return (
    <section className="HoldBoard">
      <h3>HOLD</h3>
      <canvas id="hold-board"></canvas>
    </section>
  );
}
