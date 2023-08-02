import "./App.css";
import NavBar from "./components/NavBar";
import PlayerList from "./components/PlayerList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <p>Battleships</p>
      <PlayerList />
    </div>
  );
}

export default App;
