export default function GameOver({ winner, onRestart }) {
  return (
    <div 
      className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center animate-pop-in"
      style={{backgroundColor: 'rgba(40, 38, 23, 0.95)'}}
    >
      <h2 className="font-caprasimo text-6xl text-center text-tic-tac-gameover-title mb-0">
        Game Over!
      </h2>
      {winner && (
        <p className="text-3xl text-center text-tic-tac-gameover-text">
          {winner} won!
        </p>
      )}
      {!winner && (
        <p className="text-3xl text-center text-tic-tac-gameover-text">
          It's a draw!
        </p>
      )}
      <p>
        <button 
          onClick={onRestart}
          className="block mx-auto text-2xl bg-transparent border-2 border-tic-tac-gameover-title text-tic-tac-gameover-title px-4 py-2 rounded cursor-pointer transition-all duration-200 hover:bg-tic-tac-gameover-title hover:text-tic-tac-title hover:scale-110 shadow-tic-tac-button hover:shadow-tic-tac-button-hover"
        >
          Play Again!
        </button>
      </p>
    </div>
  );
}
