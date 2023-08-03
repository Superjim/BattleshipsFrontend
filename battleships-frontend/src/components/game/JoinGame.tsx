import { useAuth } from "../../contexts/AuthContext";
import { addPlayerToGame } from "../../services/apiServices";

interface JoinGameProps {
  gameId: string;
  onGameUpdate: () => void;
}

const JoinGame: React.FC<JoinGameProps> = ({ gameId, onGameUpdate }) => {
  const { id: playerId } = useAuth();

  const handleJoinGame = async () => {
    try {
      await addPlayerToGame(playerId, gameId);
      console.log("Joined game with game ID:", gameId);
      onGameUpdate();
    } catch (error: any) {
      console.error("Error joining game:", error);
    }
  };

  return (
    <button className="btn btn-primary" onClick={handleJoinGame}>
      Join Game
    </button>
  );
};

export default JoinGame;
