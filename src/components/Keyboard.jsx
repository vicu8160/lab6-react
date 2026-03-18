import { letters } from '../constants/letters'

export default function Keyboard({ guessed, word, onGuess, disabled }) {
    return (
        <div className="keyboard">
            {letters.map(letter => {
                const lowerLetter = letter.toLowerCase()
                const isGuessed = guessed.includes(lowerLetter)
                const isCorrect = isGuessed && word.toLowerCase().includes(lowerLetter)
                const isWrong = isGuessed && !word.toLowerCase().includes(lowerLetter)

                let className = 'key'
                if (isCorrect) className += ' correct'
                if (isWrong) className += ' wrong'

                return (
                    <button
                        key={letter}
                        className={className}
                        onClick={() => onGuess(lowerLetter)}
                        disabled={isGuessed || disabled}
                    >
                        {letter}
                    </button>
                )
            })}
        </div>
    )
}