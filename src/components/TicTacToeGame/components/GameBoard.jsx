export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol className="flex flex-col justify-center gap-2 sm:gap-4 lg:gap-8 my-6 sm:my-8 lg:my-12 p-0 list-none">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol className="flex justify-center gap-2 sm:gap-4 lg:gap-8 m-0 p-0 list-none">
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                  className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border-none bg-tic-tac-board-square text-tic-tac-title text-2xl sm:text-3xl lg:text-5xl font-caprasimo cursor-pointer p-2 sm:p-3 lg:p-4 disabled:cursor-not-allowed"
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
