export default function Log({ turns }) {
  return (
    <ol className="max-w-80 text-tic-tac-log-text list-none mt-8 mx-auto p-0 text-center">
      {turns.map((turn, index) => (
        <li 
          key={`${turn.square.row}${turn.square.col}`}
          className={`rounded mx-3 my-3 animate-slide-in-from-left ${
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
