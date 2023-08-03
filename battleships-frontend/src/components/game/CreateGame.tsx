import { useAuth } from "../../contexts/AuthContext";
import { addGame } from "../../services/apiServices";

interface CreateGameProps {
  onGameCreation: () => void;
}

const CreateGame: React.FC<CreateGameProps> = ({ onGameCreation }) => {
  const { id: playerId } = useAuth();

  const handleCreateGame = async () => {
    try {
      const newGameId = await addGame(playerId);
      // handle game creation later
      console.log("New game created with game ID:", newGameId);
      onGameCreation();
    } catch (error) {
      console.error("Error creating game:", error);
    }
  };

  return (
    <button className="btn btn-primary" onClick={handleCreateGame}>
      Create Game
    </button>
  );
};

export default CreateGame;
