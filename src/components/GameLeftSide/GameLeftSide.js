import { Header } from "../Header/Header";
import { ScoreBoard } from "../ScoreBoard/ScoreBoard";
import "./GameLeftSide.scss";

export function GameLeftSide() {
  return (
    <section className="GameLeftSide">
      <Header></Header>
      <ScoreBoard></ScoreBoard>
      <button className="play-button">PLAY</button>
    </section>
  );
}
