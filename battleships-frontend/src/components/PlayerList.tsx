import React, { useEffect, useState } from "react";
import { getPlayers } from "../services/apiServices";

interface Player {
  id: string;
  displayName: string;
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
    <ul>
      {players.map((player) => (
        <li key={player.id}>
          {player.displayName}
          {player.id}
        </li>
      ))}
    </ul>
  );
};

export default PlayerList;
