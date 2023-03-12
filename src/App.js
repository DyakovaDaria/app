import { BrowserRouter, Routes, Route } from "react-router-dom";

import CreatePerson from "./components/create"
import GameMain from "./components/game";

function App()
{
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <CreatePerson /> } />
          <Route path="/game" element={ <GameMain /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;