import { useState } from 'react'
import { words } from './constants/words'
import { stages } from './constants/stages'
import Hangman from './components/Hangman.jsx'
import WordDisplay from './components/WordDisplay.jsx'
import Keyboard from './components/Keyboard.jsx'
import GameStatus from './components/GameStatus.jsx'

const MAX_ERRORS = stages.length - 1

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)].toLowerCase()
}

export default function App() {
    const [word, setWord] = useState(getRandomWord)
    const [guessed, setGuessed] = useState([])

    const errors = guessed.filter(l => !word.toLowerCase().includes(l)).length
    const isWon = word.toLowerCase().split('').every(l => guessed.includes(l))
    const isLost = errors >= MAX_ERRORS
    const isOver = isWon || isLost

    const handleGuess = (letter) => {
        if (isOver || guessed.includes(letter)) return
        setGuessed(prev => [...prev, letter])
    }

    const handleRestart = () => {
        setWord(getRandomWord())
        setGuessed([])
    }

    return (
        <div className="app">
            <h1 className="app-title">Spânzurătoarea</h1>

            <Hangman errors={errors} />

            <WordDisplay word={word} guessed={guessed} isLost={isLost} />

            <Keyboard
                guessed={guessed}
                word={word}
                onGuess={handleGuess}
                disabled={isOver}
            />

            <GameStatus
                isWon={isWon}
                isLost={isLost}
                word={word}
                onRestart={handleRestart}
            />

            <p className="app-errors">Greșeli: {errors} / {MAX_ERRORS}</p>
        </div>
    )
}