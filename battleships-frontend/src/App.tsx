import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import NavBar from "./components/NavBar";
import PlayerList from "./components/player/PlayerList";
import GameList from "./components/game/GameList";
import PlayGame from "./components/game/PlayGame";

const App: React.FC = () => {
  const { showPlayerList } = useAuth();

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="container-fluid">
          <div className="row">
            <div
              className={`col-10 ${showPlayerList ? "col-md-10" : "col-md-12"}`}
            >
              <Routes>
                <Route path="/" element={<GameList />} />
                <Route path="/playgame/:gameId" element={<PlayGame />} />
              </Routes>
            </div>
            {showPlayerList && (
              <div className="col-2 col-md-2">
                <PlayerList />
              </div>
            )}
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
