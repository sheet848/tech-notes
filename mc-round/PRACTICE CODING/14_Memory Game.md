```jsx
//memory game

import React, { useState, useEffect } from "react";
import "./memoryGame.css";

const cardsArray = [
  "🍎", "🍌", "🍇", "🍊",
  "🍎", "🍌", "🍇", "🍊"
];

const shuffleCards = () => {
  return [...cardsArray].sort(() => Math.random() - 0.5);
};

const MemoryGame = () => {
  const [cards, setCards] = useState(shuffleCards());
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);

  const handleCardClick = (index) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) return;

    setFlipped([...flipped, index]);
  };

  useEffect(() => {
    if (flipped.length === 2) {
      const [first, second] = flipped;
      if (cards[first] === cards[second]) {
        setMatched((prev) => [...prev, first, second]);
      }
      setMoves((m) => m + 1);
      setTimeout(() => setFlipped([]), 1000);
    }
  }, [flipped, cards]);

  const resetGame = () => {
    setCards(shuffleCards());
    setFlipped([]);
    setMatched([]);
    setMoves(0);
  };

  return (
    <div className="game-container">
      <h2>Memory Match Game</h2>
      <div className="moves">Moves: {moves}</div>
      <div className="grid">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${flipped.includes(index) || matched.includes(index) ? "flipped" : ""}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="front">🎴</div>
            <div className="back">{card}</div>
          </div>
        ))}
      </div>
      <button className="reset-btn" onClick={resetGame}>Restart</button>
    </div>
  );
};

export default MemoryGame;
```

```css
.game-container {
  text-align: center;
  padding: 2rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 80px);
  gap: 1rem;
  justify-content: center;
  margin: 2rem 0;
}

.card {
  width: 80px;
  height: 80px;
  perspective: 600px;
  cursor: pointer;
}

.card.flipped .front {
  transform: rotateY(180deg);
}

.card.flipped .back {
  transform: rotateY(0deg);
}

.front, .back {
  width: 100%;
  height: 100%;
  background: #e5e7eb;
  border-radius: 8px;
  line-height: 80px;
  font-size: 2rem;
  position: absolute;
  backface-visibility: hidden;
  transition: transform 0.4s ease;
}

.front {
  transform: rotateY(0deg);
}

.back {
  transform: rotateY(180deg);
  background: #22c55e;
  color: white;
}

.moves {
  font-size: 1.2rem;
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