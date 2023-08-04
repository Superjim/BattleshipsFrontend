import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import NavBar from "./components/NavBar";
import PlayerList from "./components/player/PlayerList";
import GameList from "./components/game/GameList";
import PlayGame from "./components/game/PlayGame";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <NavBar />
          <div className="container-fluid">
            <div className="row">
              <div className="col-10">
                <Routes>
                  <Route path="/" element={<GameList />} />
                  <Route path="/playgame/:gameId" element={<PlayGame />} />
                </Routes>
              </div>
              <div className="col-2">
                <PlayerList />
              </div>
            </div>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
