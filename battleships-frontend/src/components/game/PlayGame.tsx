import { useEffect, useState } from "react";
import HeroBoard from "./board/HeroBoard";
import EnemyBoard from "./board/EnemyBoard";
import { fetchGameById, playTurn } from "../../services/apiServices";
import { useAuth } from "../../contexts/AuthContext";
import { useParams } from "react-router-dom";

const initialBoard = Array(10)
  .fill(null)
  .map(() => Array(10).fill("Default"));

const PlayGame: React.FC = () => {
  const { id: playerId } = useAuth();
  const [heroBoard, setHeroBoard] = useState(initialBoard);
  const [enemyBoard, setEnemyBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState("");
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const params = useParams<{ gameId: string }>();
  const gameId = params.gameId || "";

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        const gameData = await fetchGameById(gameId);
        const player =
          gameData.player1.id === playerId
            ? gameData.player1
            : gameData.player2;

        const otherPlayer =
          gameData.player1.id !== playerId
            ? gameData.player1
            : gameData.player2;

        const board = player.board.squares.map((row: any) =>
          row.map((square: any) => (square.ship ? "Ship" : "Default"))
        );

        setCurrentPlayer(
          gameData.currentPlayer.id === playerId
            ? player.name
            : otherPlayer.name
        );

        setHeroBoard(board);
        setErrorMessage(null);
      } catch (error: any) {
        console.log(error.message);
        setErrorMessage("Error: " + error.response.data);
      }
    };

    fetchGameData();

    const intervalId = setInterval(fetchGameData, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [gameId, playerId]);

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
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <HeroBoard board={heroBoard} />
        <EnemyBoard board={enemyBoard} onSquareClick={handleSquareClick} />
      </div>
      <p>Current Player: {currentPlayer}</p>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default PlayGame;
