import { BrowserRouter, Routes, Route } from "react-router-dom";

import CreatePerson from "./components/create";
import GameMain from "./components/game";
import ContextServer from "./context/ContextServer";

function App() {
  return (
    <>
    <ContextServer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreatePerson />} />
          <Route path="/game" element={<GameMain />} />
        </Routes>
      </BrowserRouter>
      </ContextServer>
    </>
  );
}

export default App;
