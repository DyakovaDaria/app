import { BrowserRouter, Routes, Route } from "react-router-dom";

import CreatePerson from "./components/create"
import GameMain from "./components/game";
import AuthorizatonPage from "./components/authorization";
import MainPage from "./components/mainPage/mainPage";

function App()
{
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={ <MainPage /> } /> */}
          <Route path="/" element={ <CreatePerson /> } />
          <Route path="/game" element={ <GameMain /> } />
          {/* <Route path="/auth" element={<AuthorizatonPage/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;