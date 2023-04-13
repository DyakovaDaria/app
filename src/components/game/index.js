import GameProvider from "../../context/ContextGame";
import GameMain from "./GameMain";

export default () => {
  return (
    <GameProvider>
      <GameMain />
    </GameProvider>
  );
};
