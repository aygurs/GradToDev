import { QuizResult } from '../types/index';

interface ResultsSummaryProps {
  results: QuizResult[];
  topicTitle: string;
  onBackToTopics: () => void;
  onRetakeQuiz: () => void;
}

export function ResultsSummary({
  results,
  topicTitle,
  onBackToTopics,
  onRetakeQuiz,
}: ResultsSummaryProps) {
  const totalQuestions = results.length;
  const correctAnswers = results.filter((r) => r.isCorrect).length;
  const percentage = totalQuestions === 0 ? 0 : Math.round((correctAnswers / totalQuestions) * 100);

  return (
    <div className="results-summary">
      <div className="results-header">
        <h2>Quiz Complete!</h2>
        <p className="results-topic">Topic: {topicTitle}</p>
      </div>

      <div className="results-score">
        <div className="score-circle">
          <div className="score-percentage">{percentage}%</div>
          <div className="score-text">
            {correctAnswers} / {totalQuestions} correct
          </div>
        </div>
      </div>

      <div className="results-message">
        {percentage === 100 && <p>🎉 Perfect score! You've mastered this topic!</p>}
        {percentage >= 80 && percentage < 100 && (
          <p>🌟 Excellent work! You have a strong understanding.</p>
        )}
        {percentage >= 60 && percentage < 80 && (
          <p>👍 Good job! Review the questions you missed to improve.</p>
        )}
        {percentage < 60 && (
          <p>💪 Keep practicing! Review the explanations and try again.</p>
        )}
      </div>

      <div className="results-review">
        <h3>Question Review</h3>
        <div className="review-list">
          {results.map((result, index) => (
            <div
              key={result.questionId}
              className={`review-item ${result.isCorrect ? 'correct' : 'incorrect'}`}
            >
              <div className="review-status">
                <span className="review-icon">
                  {result.isCorrect ? '✓' : '✗'}
                </span>
                <span className="review-number">Q{index + 1}</span>
              </div>
              <div className="review-content">
                <p className="review-question">{result.prompt}</p>
                <p className="review-answer">
                  Your answer: <strong>{result.selectedAnswer}</strong>
                </p>
                {!result.isCorrect && (
                  <p className="review-correct">
                    Correct answer: <strong>{result.correctAnswer}</strong>
                  </p>
                )}
                <p className="review-explanation">{result.explanation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="results-actions">
        <button className="action-button retake" onClick={onRetakeQuiz}>
          Retake Quiz
        </button>
        <button className="action-button back" onClick={onBackToTopics}>
          Back to Topics
        </button>
      </div>
    </div>
  );
}
