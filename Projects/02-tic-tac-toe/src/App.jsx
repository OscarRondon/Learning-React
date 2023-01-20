import './App.css'
import { useState } from 'react'
import { TURN } from './Commons/constants'
import { Square } from './Components/Square'
import { checkWinner, checkEndGame } from './Controllers/board'
import confetti from 'canvas-confetti' // npm install --save canvas-confetti
import { WinnerModal } from './Components/WinnerModal'

function App () {
  const [board, setBoard] = useState(() => {
    return window.localStorage.getItem('board') !== null ? JSON.parse(window.localStorage.getItem('board')) : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    return window.localStorage.getItem('turn') !== null ? window.localStorage.getItem('turn') : TURN.X
  })
  const [winner, setWinner] = useState(null) // null = no winner yet, false = tie

  const updateBoard = ({ index }) => {
    if (board[index] || winner) return false
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === TURN.X ? TURN.O : TURN.X
    setTurn(newTurn)
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setWinner(null)
    setBoard(Array(9).fill(null))
    setTurn(TURN.X)
    window.localStorage.setItem('board', JSON.stringify(Array(9).fill(null)))
    window.localStorage.setItem('turn', TURN.X)
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe Game</h1>
      <button onClick={resetGame}>Reset</button>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>

            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURN.X}>{TURN.X}</Square>
        <Square isSelected={turn === TURN.O}>{TURN.O}</Square>
      </section>

      <WinnerModal
        winner={winner}
        resetGame={resetGame}
      />

    </main>
  )
}

export default App
