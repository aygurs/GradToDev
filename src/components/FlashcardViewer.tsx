import { useState } from 'react';
import { Flashcard } from '../types/index';

interface FlashcardViewerProps {
  flashcards: Flashcard[];
  currentIndex: number;
  onNext: () => void;
  onPrevious: () => void;
  onBack: () => void;
}

export function FlashcardViewer({
  flashcards,
  currentIndex,
  onNext,
  onPrevious,
  onBack,
}: FlashcardViewerProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const card = flashcards[currentIndex];
  const isFirstCard = currentIndex === 0;
  const isLastCard = currentIndex === flashcards.length - 1;

  const handleNextClick = () => {
    setIsFlipped(false);
    onNext();
  };

  const handlePreviousClick = () => {
    setIsFlipped(false);
    onPrevious();
  };

  return (
    <div className="flashcard-viewer">
      <div className="flashcard-header">
        <button className="back-button" onClick={onBack}>
          ← Back
        </button>
        <div className="flashcard-title-group">
          <p className="eyebrow">Flashcards</p>
          <h2>Build the concept first</h2>
        </div>
        <div className="card-counter">
          {currentIndex + 1} / {flashcards.length}
        </div>
      </div>

      <div className="progress-track" aria-hidden="true">
        <div
          className="progress-fill"
          style={{ width: `${((currentIndex + 1) / flashcards.length) * 100}%` }}
        />
      </div>

      <div className="flashcard-content">
        <div className={`flashcard ${isFlipped ? 'flipped' : ''}`}>
          <div className="flashcard-inner">
            <div className="flashcard-front">
              <p className="flashcard-label">Question</p>
              <p className="flashcard-text">{card.front}</p>
            </div>
            <div className="flashcard-back">
              <p className="flashcard-label">Answer</p>
              <p className="flashcard-text">{card.back}</p>
              {card.example && (
                <div className="flashcard-example">
                  <p className="example-label">Example:</p>
                  <pre>{card.example}</pre>
                </div>
              )}
            </div>
          </div>
        </div>

        <button className="flip-button" onClick={() => setIsFlipped(!isFlipped)}>
          {isFlipped ? 'Hide Answer' : 'Show Answer'}
        </button>
      </div>

      <div className="flashcard-navigation">
        <button className="nav-button" onClick={handlePreviousClick} disabled={isFirstCard}>
          ← Previous
        </button>
        <button className="nav-button" onClick={handleNextClick} disabled={isLastCard}>
          Next →
        </button>
      </div>
    </div>
  );
}
