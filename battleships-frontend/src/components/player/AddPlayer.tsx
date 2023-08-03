import React, { useState } from "react";
import { addPlayer } from "../../services/apiServices";

const AddPlayer: React.FC = () => {
  const [playerName, setPlayerName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const newPlayerId = await addPlayer(playerName);
      console.log("New player ID:", newPlayerId);
      setPlayerName("");
    } catch (error) {
      console.error("Failed to add player", error);
    }
  };

  return (
    <div className="row mt-3">
      <div className="col-2 offset-10">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Add Player</h5>
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Player Name"
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPlayer;
