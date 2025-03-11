import React from "react";
import "./SudokuGrid.css";

const SudokuGrid = ({ board, setBoard }) => {
  const handleChange = (row, col, value) => {
    if (value === "" || /^[1-9]$/.test(value)) {
      const newBoard = board.map((r, rIdx) =>
        r.map((c, cIdx) => (rIdx === row && cIdx === col ? value : c))
      );
      setBoard(newBoard);
    }
  };

  return (
    <div className="grid">
      {board.map((row, rIdx) =>
        row.map((num, cIdx) => (
          <input
            key={`${rIdx}-${cIdx}`}
            type="text"
            maxLength="1"
            value={num}
            onChange={(e) => handleChange(rIdx, cIdx, e.target.value)}
            className={`cell ${(rIdx % 3 === 2 && rIdx !== 8) ? "border-bottom" : ""} ${(cIdx % 3 === 2 && cIdx !== 8) ? "border-right" : ""}`}
          />
        ))
      )}
    </div>
  );
};

export default SudokuGrid;
