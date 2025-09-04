import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleNameChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={`flex items-center w-full sm:w-1/2 border-2 border-transparent transition-all duration-300 ${
      isActive ? 'animate-pulse-border' : ''
    }`}>
      <span className="flex items-center border-2 border-transparent p-1 sm:p-2 rounded font-bold">
        {isEditing ? (
          <input
            type="text"
            required
            value={playerName}
            maxLength={15}
            onChange={handleNameChange}
            className="w-28 sm:w-32 lg:w-40 text-center bg-tic-tac-player-input text-white border-none p-1.5 sm:p-2 rounded uppercase text-xs sm:text-sm animate-pulse-text focus:outline-none"
          />
        ) : (
          <span className={`inline-block w-28 sm:w-32 lg:w-40 text-center text-tic-tac-player-name uppercase p-1.5 sm:p-2 rounded text-xs sm:text-sm overflow-hidden ${
            isActive ? 'text-tic-tac-player-active' : ''
          }`}>
            {playerName}
          </span>
        )}
        <span className={`ml-2 sm:ml-3 lg:ml-4 text-base sm:text-lg text-tic-tac-player-name ${isActive ? 'text-tic-tac-player-active' : ''}`}>
          {symbol}
        </span>
      </span>
      <button 
        onClick={handleEditClick}
        className="w-10 sm:w-12 bg-transparent border-none text-tic-tac-player-text text-xs sm:text-sm cursor-pointer transition-colors duration-200 py-1.5 sm:py-2 px-1 text-center hover:text-tic-tac-player-hover"
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
