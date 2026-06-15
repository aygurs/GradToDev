interface ModeSelectorProps {
  topicTitle: string;
  onFlashcardsClick: () => void;
  onQuestionsClick: () => void;
  onBackClick: () => void;
}

export function ModeSelector({
  topicTitle,
  onFlashcardsClick,
  onQuestionsClick,
  onBackClick,
}: ModeSelectorProps) {
  return (
    <div className="mode-selector">
      <div className="mode-container">
        <button className="back-button" onClick={onBackClick}>
          ← Back
        </button>

        <p className="eyebrow">Study mode</p>
        <h2>{topicTitle}</h2>
        <p className="mode-intro">Start with the cards to understand the idea, then answer questions to check recall.</p>

        <div className="mode-buttons">
          <button className="mode-button flashcards-button" onClick={onFlashcardsClick}>
            <span className="mode-icon">📇</span>
            <span className="mode-title">Flashcards</span>
            <span className="mode-description">Review key concepts in simple language</span>
          </button>

          <button className="mode-button questions-button" onClick={onQuestionsClick}>
            <span className="mode-icon">🎯</span>
            <span className="mode-title">Questions</span>
            <span className="mode-description">Answer, learn, and see your score</span>
          </button>
        </div>
      </div>
    </div>
  );
}
