export default function GameStatus({ isWon, isLost, word, onRestart }) {
    if (!isWon && !isLost) return null

    return (
        <div className="game-status">
            {isWon && (
                <p className="status-message won">🎉 Felicitări! Ai câștigat!</p>
            )}
            {isLost && (
                <p className="status-message lost">
                    💀 Ai pierdut! Cuvântul era: <strong>{word}</strong>
                </p>
            )}
            <button className="restart-btn" onClick={onRestart}>
                Joacă din nou
            </button>
        </div>
    )
}