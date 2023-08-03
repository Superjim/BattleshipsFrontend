import React, { useState, useEffect, useCallback } from "react";
import { fetchGames } from "../../services/apiServices";
import JoinGame from "./JoinGame";
import CreateGame from "./CreateGame";

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
            <div className="card-body">
              <CreateGame
                onGameCreation={() => setGameUpdate(gameUpdate + 1)}
              />
            </div>
          </div>
          {games.map((game) => (
            <div key={game.id} className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Game {game.id}</h5>
                <p className="card-text">Player 1: {game.player1}</p>
                {game.player2 !== null ? (
                  <p className="card-text">Player 2: {game.player2}</p>
                ) : (
                  <JoinGame
                    gameId={game.id}
                    onGameUpdate={() => setGameUpdate(gameUpdate + 1)}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameList;
