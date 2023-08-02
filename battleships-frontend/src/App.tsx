import "./App.css";
import NavBar from "./components/NavBar";
import PlayerList from "./components/PlayerList";

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="container-fluid">
        <p>Battleships</p>
        <PlayerList />
      </div>
    </div>
  );
};

export default App;
