import { useAuth } from "../../contexts/AuthContext";
import { addGame } from "../../services/apiServices";

function CreateGame() {
  const { id: playerId } = useAuth();

  const handleCreateGame = async () => {
    try {
      const newGameId = await addGame(playerId);
      // handle game creation later
      console.log("New game created with game ID:", newGameId);
    } catch (error) {
      console.error("Error creating game:", error);
    }
  };

  return (
    <button className="nav-link" onClick={handleCreateGame}>
      Create Game
    </button>
  );
}

export default CreateGame;
