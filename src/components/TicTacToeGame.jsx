import { useState } from "react";

// Importa i componenti del gioco esistenti
import Player from "./TicTacToeGame/components/Player";
import GameBoard from "./TicTacToeGame/components/GameBoard";
import Log from "./TicTacToeGame/components/Log";
import GameOver from "./TicTacToeGame/components/GameOver";
import { WINNING_COMBINATIONS } from "./TicTacToeGame/winning-combinantions";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

export default function TicTacToeGame() {
  const [players, setPlayers] = useState({
    X: "Giocatore 1",
    O: "Giocatore 2",
  });
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => ({
      ...prevPlayers,
      [symbol]: newName
    }));
  }

  return (
    <div className="min-h-screen bg-tic-tac-pattern bg-repeat" style={{backgroundSize: '100% 100%, 30% 30%, 100% 100%'}}>
      <div className="text-center pt-12">
        {/* Game Logo */}
        <img
          src="/game-logo.png"
          alt="Game Logo"
          className="w-32 h-32 mx-auto mb-4 drop-shadow-lg"
        />
        
        {/* Title */}
        <h1 className="font-caprasimo text-5xl text-tic-tac-title mb-12 text-shadow-tic-tac-title">
          Tic-Tac-Toe
        </h1>
      </div>
      
      <main className="pb-12">
        {/* Game Container */}
        <div 
          className="max-w-3xl mx-auto mt-12 p-8 rounded-md shadow-tic-tac-container relative"
          style={{background: 'linear-gradient(#383624, #282617)'}}
        >
          <ol className="list-none p-0 my-4 flex justify-center items-center gap-8 mb-6">
            <Player
              initialName="Player 1"
              symbol="X"
              isActive={activePlayer === "X"}
              onChangeName={handlePlayerNameChange}
            />
            <Player
              initialName="Player 2"
              symbol="O"
              isActive={activePlayer === "O"}
              onChangeName={handlePlayerNameChange}
            />
          </ol>
          
          {(winner || hasDraw) && (
            <GameOver winner={winner} onRestart={handleRestart} />
          )}
          
          <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
        </div>
        
        <Log turns={gameTurns} />
      </main>
    </div>
  );
}