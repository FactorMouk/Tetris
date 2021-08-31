import "./GameScreen.scss";
import { GameCanvas } from "./../GameCanvas/GameCanvas";
import { GameScore } from "./../GameScore/GameScore";

export function GameScreen() {
  return (
    <section className="GameScreen">
      <GameCanvas></GameCanvas>
      <GameScore></GameScore>
    </section>
  );
}
