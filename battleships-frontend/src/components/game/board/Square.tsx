import React from "react";
import { playTurn } from "../../../services/apiServices";

// Define interfaces and types
interface IProps {
  status: "default" | "miss" | "hit" | "ship";
  row: number;
  column: number;
  type: "hero" | "enemy";
  gameId: string;
  playerId: string;
}

type ColoursMap = {
  [key in "default" | "miss" | "hit" | "ship"]: string;
};

const colours: ColoursMap = {
  default: "blue",
  miss: "blue",
  hit: "red",
  ship: "grey",
};

const Square: React.FC<IProps> = ({
  status,
  row,
  column,
  type,
  gameId,
  playerId,
}) => {
  const colour = colours[status];

  const handleClick = async () => {
    if (type === "enemy") {
      try {
        const result = await playTurn(gameId, playerId, { row, column });
        console.log(result);
        //add optimistic renderings
      } catch (error) {
        console.error(error);
      }
    }
  };

  const overlayCircle = status === "miss";

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: colour,
        width: "30px",
        height: "30px",
        position: "relative",
      }}
    >
      {overlayCircle && (
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "50%",
            width: "15px",
            height: "15px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
    </div>
  );
};

export default Square;
