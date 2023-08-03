import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import NavBar from "./components/NavBar";
import AddPlayer from "./components/player/AddPlayer";
import PlayerList from "./components/player/PlayerList";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <div className="App">
        <NavBar />
        <p>Battleships</p>
        <AddPlayer />
        <PlayerList />
      </div>
    </AuthProvider>
  );
};

export default App;
