import "./App.scss";
import { GameLeftSide } from "./components/GameLeftSide/GameLeftSide";
import { GameRightSide } from "./components/GameRightSide/GameRightSide";
import { GameScreen } from "./components/GameScreen/GameScreen";

function App() {
  return (
    <div className="App">
      <GameLeftSide></GameLeftSide>
      <main>
        <GameScreen></GameScreen>
      </main>
      <GameRightSide></GameRightSide>
    </div>
  );
}

export default App;
