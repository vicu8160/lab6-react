export default function WordDisplay({ word, guessed, isLost }) {
    return (
        <div className="word-display">
            {word.split('').map((letter, i) => {
                const isGuessed = guessed.includes(letter.toLowerCase())
                const isRevealed = isLost && !isGuessed

                let className = 'word-letter'
                if (isGuessed) className += ' found'
                else if (isRevealed) className += ' missed'
                else className += ' blank'

                return (
                    <span key={i} className={className}>
                        {isGuessed || isLost ? letter : '_'}
                    </span>
                )
            })}
        </div>
    )
}