import "./GameScreen.scss";
import { GameCanvas } from "./../GameCanvas/GameCanvas";
import { GameScore } from "./../GameScore/GameScore";

export function GameScreen() {
  return (
    <section>
      <GameCanvas></GameCanvas>
      <GameScore></GameScore>
    </section>
  );
}
