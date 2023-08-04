import React, { useState, useEffect, useCallback } from "react";
import { fetchGames } from "../../services/apiServices";
import JoinGame from "./JoinGame";
import CreateGame from "./CreateGame";
import { useNavigate } from "react-router-dom";

interface Game {
  id: string;
  player1: string;
  player2: string | null;
}

const GameList: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [gameUpdate, setGameUpdate] = useState(0);

  const navigate = useNavigate();

  const handlePlayGameClick = (gameId: string) => {
    navigate(`/playgame/${gameId}`);
  };

  const fetchGamesData = useCallback(async () => {
    try {
      const gamesData = await fetchGames();
      setGames(gamesData);
      setLoading(false);
    } catch (error: any) {
      setError(new Error(error));
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGamesData();
  }, [fetchGamesData, gameUpdate]);

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-3 mt-2">
            <div className="card-body d-flex flex-column align-items-center">
              <CreateGame
                onGameCreation={() => setGameUpdate(gameUpdate + 1)}
              />
            </div>
          </div>
          {games.map((game) => (
            <div key={game.id} className="card mb-3">
              <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title text-center">
                  {game.player1} vs{" "}
                  {game.player2 || (
                    <JoinGame
                      gameId={game.id}
                      onGameUpdate={() => setGameUpdate(gameUpdate + 1)}
                    />
                  )}
                </h5>
                {game.player2 && (
                  <button
                    className="btn btn-success"
                    onClick={() => handlePlayGameClick(game.id)}
                  >
                    Play Game
                  </button>
                )}
                <p className="card-text text-center">Game ID: {game.id}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameList;
