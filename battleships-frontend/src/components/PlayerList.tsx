import React, { useEffect, useState } from "react";
import { getPlayers } from "../services/apiServices";
import { useAuth } from "../contexts/AuthContext";

interface Player {
  id: string;
  name: string;
}

const PlayerList: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const { selectPlayer, id: selectedPlayerId } = useAuth();

  useEffect(() => {
    const fetchPlayers = async () => {
      const playersData = await getPlayers();
      setPlayers(playersData);
    };

    fetchPlayers();
  }, []);

  const handlePlayerClick = (name: string, id: string) => {
    selectPlayer(name, id);
  };

  return (
    <div className="row">
      <div className="col-2 offset-10">
        {players.map((player) => (
          <div
            className={`card m-2 ${
              selectedPlayerId === player.id ? "selected" : ""
            }`}
            style={{
              width: "18rem",
              cursor: "pointer",
              backgroundColor:
                selectedPlayerId === player.id ? "lightblue" : "inherit",
            }}
            key={player.id}
            onClick={() => handlePlayerClick(player.name, player.id)}
          >
            <div className="card-body">
              <h5 className="card-title">{player.name}</h5>
              <p className="card-text text-muted">{player.id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerList;
