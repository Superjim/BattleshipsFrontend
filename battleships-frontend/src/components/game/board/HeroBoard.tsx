import React from "react";
import Square from "./Square";

interface HeroBoardProps {
  board: ("Default" | "Hit" | "Miss" | "Ship")[][];
}

const HeroBoard: React.FC<HeroBoardProps> = ({ board }) => {
  const squareSize = 50;
  const gridContainerStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: `30px repeat(10, ${squareSize}px)`,
    gridTemplateRows: `30px repeat(10, ${squareSize}px)`,
    width: 40 + 10 * squareSize + "px",
    textAlign: "center",
  };

  const rowLabels = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const columnLabels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  const labelStyle: React.CSSProperties = {
    fontWeight: "bold",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  };

  return (
    <div style={gridContainerStyle}>
      {/* top left corner ___DONT REMOVE THIS BLESSED DIV___ */}
      <div></div>

      {/* labels */}
      {columnLabels.map((label) => (
        <div
          key={`col-${label}`}
          style={{ fontWeight: "normal", height: "30px", ...labelStyle }}
        >
          {label}
        </div>
      ))}

      {board.map((row, rowIndex) => (
        <React.Fragment key={`row-${rowIndex}`}>
          {/* labels */}
          <div
            style={{
              fontWeight: "bold",
              textAlign: "center",
              width: "30px",
              ...labelStyle,
            }}
          >
            {rowLabels[rowIndex]}
          </div>

          {row.map((status, columnIndex) => (
            <Square
              key={`${rowIndex}-${columnIndex}`}
              status={status}
              row={rowIndex}
              column={columnIndex}
              boardType="hero"
              onClickSquare={() => {}}
              squareSize={squareSize}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default HeroBoard;
