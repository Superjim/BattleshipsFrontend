import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import NavBar from "./components/NavBar";
import PlayerList from "./components/player/PlayerList";
import GameList from "./components/game/GameList";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <div className="App">
        <NavBar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-10">
              <GameList />
            </div>
            <div className="col-2">
              <PlayerList />
            </div>
          </div>
        </div>
      </div>
    </AuthProvider>
  );
};

export default App;
