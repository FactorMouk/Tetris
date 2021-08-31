import "./NextBoard.scss";
import React, { useState, useEffect } from "react";

export function NextBoard() {
  const COLS = 4;
  const ROWS = 12;
  const BLOCKSIZE = 40;

  const [nextBoardCtx, setNextBoardCtx] = useState(null);

  useEffect(() => {
    drawNextBoard();
  }, []);

  function drawNextBoard() {
    let ctxAux = document.getElementById("next-board").getContext("2d");
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
    setNextBoardCtx(ctxAux);
    console.log(nextBoardCtx);
  }

  return (
    <section className="NextBoard">
      <h3>NEXT</h3>
      <canvas id="next-board"></canvas>
    </section>
  );
}
