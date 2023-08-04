import { useState } from "react";
import EnemyBoard from "./board/EnemyBoard";
import { playTurn } from "../../services/apiServices";
import { useAuth } from "../../contexts/AuthContext";

interface PlayGameProps {
  gameId: string;
}

const initialBoard = Array(10)
  .fill(null)
  .map(() => Array(10).fill("Default"));

const PlayGame: React.FC<PlayGameProps> = ({ gameId }) => {
  const { id: playerId } = useAuth();
  const [enemyBoard, setEnemyBoard] = useState(initialBoard);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const handleSquareClick = async (row: number, column: number) => {
    try {
      const result = await playTurn(gameId, playerId, { row, column });
      setEnemyBoard((prevBoard) => {
        const newBoard = [...prevBoard];
        newBoard[row][column] = result;
        return newBoard;
      });
      setErrorMessage(null);
    } catch (error: any) {
      console.log(error.message);
      setErrorMessage("Error: " + error.response.data);
    }
  };

  return (
    <>
      <EnemyBoard board={enemyBoard} onSquareClick={handleSquareClick} />
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
};

export default PlayGame;
