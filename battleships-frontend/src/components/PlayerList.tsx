import React, { useEffect, useState } from "react";
import { getPlayers } from "../services/apiServices";

interface Player {
  id: string;
  name: string;
}

const PlayerList: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      const playersData = await getPlayers();
      setPlayers(playersData);
    };

    fetchPlayers();
  }, []);

  return (
    <div className="row">
      <div className="col-2 offset-10">
        {players.map((player) => (
          <div className="card m-2" style={{ width: "18rem" }} key={player.id}>
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
