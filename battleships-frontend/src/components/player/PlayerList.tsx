import React, { useEffect, useState } from "react";
import AddPlayer from "./AddPlayer";
import { getPlayers } from "../../services/apiServices";
import { useAuth } from "../../contexts/AuthContext";

interface Player {
  id: string;
  name: string;
}

const PlayerList: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const { selectPlayer, id: selectedPlayerId } = useAuth();
  const [playerUpdate, setPlayerUpdate] = useState(0);

  useEffect(() => {
    const fetchPlayers = async () => {
      const playersData = await getPlayers();
      setPlayers(playersData);
    };

    fetchPlayers();
  }, [playerUpdate]);

  const handlePlayerClick = (name: string, id: string) => {
    selectPlayer(name, id);
  };

  const handlePlayerAdded = () => {
    setPlayerUpdate(playerUpdate + 1);
  };

  return (
    <div className="col-2">
      <AddPlayer onPlayerAdded={handlePlayerAdded} />
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
  );
};

export default PlayerList;
