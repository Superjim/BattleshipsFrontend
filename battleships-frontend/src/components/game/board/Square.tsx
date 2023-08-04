import React from "react";

interface IProps {
  status: "Default" | "Miss" | "Hit" | "Ship";
  row: number;
  column: number;
  boardType: "hero" | "enemy";
  onClickSquare: (row: number, column: number) => void;
  squareSize: number;
}

const Square: React.FC<IProps> = ({
  status,
  row,
  column,
  boardType,
  onClickSquare,
  squareSize,
}) => {
  let colour = "blue";

  switch (status) {
    case "Default":
      colour = "blue";
      break;
    case "Miss":
      colour = "white";
      break;
    case "Hit":
      colour = "red";
      break;
    case "Ship":
      colour = "darkgrey";
      break;
  }

  const handleClick = () => {
    if (boardType === "enemy") {
      onClickSquare(row, column);
    }
  };

  const style = {
    backgroundColor: colour,
    width: squareSize,
    height: squareSize,
    border: "1px solid black",
    cursor: "pointer",
  };

  return <div style={style} onClick={handleClick}></div>;
};

export default Square;
