import { stages } from '../constants/stages'

export default function Hangman({ errors }) {
    return (
        <img
            className="hangman-img"
            src={stages[errors]}
            alt={`Hangman stage ${errors}`}
        />
    )
}