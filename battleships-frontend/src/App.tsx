import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import NavBar from "./components/NavBar";
import PlayerList from "./components/PlayerList";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <div className="App">
        <NavBar />
        <p>Battleships</p>
        <PlayerList />
      </div>
    </AuthProvider>
  );
};

export default App;
