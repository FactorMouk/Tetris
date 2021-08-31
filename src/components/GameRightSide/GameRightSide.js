import "./GameRightSide.scss";
import { NextBoard } from "../NextBoard/NextBoard";
import { HoldBoard } from "../HoldBoard/HoldBoard";

export function GameRightSide() {
  return (
    <section className="GameRightSide">
      <HoldBoard></HoldBoard>
      <NextBoard></NextBoard>
    </section>
  );
}
