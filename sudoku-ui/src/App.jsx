import React, { useState } from "react";
import SudokuGrid from "./components/SudokuGrid";
import Controls from "./components/Controls";
import "./App.css";

const App = () => {
  const emptyBoard = Array(9).fill().map(() => Array(9).fill(""));

  const [board, setBoard] = useState(emptyBoard);

  return (
    <div className="app">
      <h1>Sudoku Solver</h1>
      <SudokuGrid board={board} setBoard={setBoard} />
      <Controls />
    </div>
  );
};

export default App;
