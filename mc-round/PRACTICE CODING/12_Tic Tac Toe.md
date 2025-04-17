```jsx
//TicTacToe.jsx
import React, { useState } from "react"
import "./styles.css"

const App = () => {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);
    const [winner, setWinner] = useState(null);

    // click on the board
    const handleClick = (index) => {
        if(board[index] || winner) return;

        const newBoard = [...board];
        newBoard[index] = isXTurn ? "X" : "O";

        setBoard(newBoard);
        setIsXTurn(!isXTurn);
        checkWinner(newBoard);
    }

    //check for the winner
    const checkWinner = (board) => {
        const winCombos = [
              [0,1,2], [3,4,5], [6,7,8],  //rows
              [0,3,6], [1,4,7], [2,5,8],  //columns
              [0,4,8], [2,4,6]               //diagonals
        ];

        for(let combo of winCombos) {
            const [a, b, c] = combo;
            if(board[a] && board[a] === board[b] && board[a] === board[c]) {
                setWinner(board[c]);
                return;
            }
        }

        if(!board.includes(null)) {
            setWinner("Draw");
        }
    }

    //reset the game
    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsXTurn(true);
        setWinner(null);
    }
    
    return (
        <>
        <div className="game-container">
            <h2>Tic Tac Toe</h2>
            <div className="status">
                {
                    winner ? winner === "Draw" ? "It's a Draw" : `${winner} Wins!` :
                                    `Next turn : ${isXTurn ? "X" : "O"}`
                }
            </div>
            <div className="grid">
                {
                    board.map((cell, index) => (
                        <div key={index} 
                                onClick={() => handleClick(index)}
                            className="cell">{cell}</div>
                    ))
                }
            </div>
            <button className="reset-btn"
                        onClick={resetGame}>Restart</button>
        </div>
        </>
    )
}

export default App
```

```css
.game-container {
    text-align: center;
    padding: 2rem;
}

.grid {
    display: grid;
    grid-template-columns: repeat(3, 80px);
    gap: 1rem;
    margin: 1.5rem auto;
    justify-content: center;
}

.cell {
    width: 80px;
    height: 80px;
    background: #e5e7eb;
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 80px;
    border-radius: 6px;
    cursor: pointer;
}

.status {
    font-size: 1.4rem;
    margin-bottom: 1rem;
}

.reset-btn {
    padding: 0.6rem 1.2rem;
  font-size: 1rem;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
```

