export default function Log({ turns }) {
  return (
    <ol className="max-w-xs sm:max-w-sm lg:max-w-80 text-tic-tac-log-text list-none mt-4 sm:mt-6 lg:mt-8 mx-auto p-0 text-center text-xs sm:text-sm lg:text-base px-4">
      {turns.map((turn, index) => (
        <li 
          key={`${turn.square.row}${turn.square.col}`}
          className={`rounded mx-2 sm:mx-3 my-2 sm:my-3 p-1 sm:p-2 animate-slide-in-from-left ${
            index === 0 ? 'bg-tic-tac-log-bg text-white' : ''
          }`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {turn.player} selected {turn.square.row + 1}, {turn.square.col + 1}
        </li>
      ))}
    </ol>
  );
}
