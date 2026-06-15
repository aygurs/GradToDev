import { useState } from 'react';
import { Topic } from '../types/index';
import { FlashcardViewer } from '../components/FlashcardViewer';

interface FlashcardsPageProps {
  topic: Topic;
  onBackClick: () => void;
}

export function FlashcardsPage({ topic, onBackClick }: FlashcardsPageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < topic.flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="page flashcards-page">
      <FlashcardViewer
        flashcards={topic.flashcards}
        currentIndex={currentIndex}
        onNext={handleNext}
        onPrevious={handlePrevious}
        onBack={onBackClick}
      />
    </div>
  );
}
