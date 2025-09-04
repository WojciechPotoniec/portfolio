export default function GameOver({ winner, onRestart }) {
  return (
    <div 
      className="space-y-4 sm:space-y-6 absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center animate-pop-in px-4"
      style={{backgroundColor: 'rgba(40, 38, 23, 0.95)'}}
    >
      <h2 className="font-caprasimo text-3xl sm:text-4xl lg:text-6xl text-center text-tic-tac-gameover-title mb-0">
        Game Over!
      </h2>
      {winner && (
        <p className="text-xl sm:text-2xl lg:text-3xl text-center text-tic-tac-gameover-text">
          {winner} won!
        </p>
      )}
      {!winner && (
        <p className="text-xl sm:text-2xl lg:text-3xl text-center text-tic-tac-gameover-text">
          It's a draw!
        </p>
      )}
      <p>
        <button 
          onClick={onRestart}
          className="block mx-auto text-lg sm:text-xl lg:text-2xl bg-transparent border-2 border-tic-tac-gameover-title text-tic-tac-gameover-title px-3 sm:px-4 py-1.5 sm:py-2 rounded cursor-pointer transition-all duration-200 hover:bg-tic-tac-gameover-title hover:text-tic-tac-title hover:scale-110 shadow-tic-tac-button hover:shadow-tic-tac-button-hover"
        >
          Play Again!
        </button>
      </p>
    </div>
  );
}
