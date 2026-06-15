import { useEffect, useState } from 'react';
import { Question } from '../types/index';
import { isAnswerCorrect } from '../utils';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onSubmitAnswer: (answer: string) => void;
}

export function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  onSubmitAnswer,
}: QuestionCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    setSelectedAnswer('');
    setSubmitted(false);
    setShowExplanation(false);
  }, [question.id]);

  const hasOptions = Boolean(question.options?.length);
  const isCorrect = isAnswerCorrect(question, selectedAnswer);

  const handleSubmit = () => {
    if (!selectedAnswer.trim()) return;
    setSubmitted(true);
    setShowExplanation(true);
  };

  const handleNext = () => {
    onSubmitAnswer(selectedAnswer);
  };

  return (
    <div className="question-card">
      <div className="question-header">
        <p className="eyebrow">Knowledge check</p>
        <h2>Question {questionNumber} of {totalQuestions}</h2>
      </div>

      <div className="progress-track" aria-hidden="true">
        <div
          className="progress-fill"
          style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
        />
      </div>

      <div className="question-content">
        <div className="question-type-pill">{question.type ?? 'multiple-choice'}</div>
        <p className="question-prompt">{question.prompt}</p>

        {hasOptions ? (
          <div className="options-group">
            {question.options!.map((option) => (
              <label key={option} className="option-label">
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                  disabled={submitted}
                />
                <span className={`option-text ${submitted && isAnswerCorrect(question, option) ? 'correct' : ''} ${submitted && selectedAnswer === option && !isCorrect ? 'incorrect' : ''}`}>
                  {option}
                </span>
              </label>
            ))}
          </div>
        ) : (
          <div className="typed-answer-group">
            <label htmlFor={`answer-${question.id}`}>Type your answer</label>
            <input
              id={`answer-${question.id}`}
              className="typed-answer-input"
              value={selectedAnswer}
              onChange={(event) => setSelectedAnswer(event.target.value)}
              disabled={submitted}
              placeholder="Example: response.ok"
              onKeyDown={(event) => {
                if (event.key === 'Enter' && selectedAnswer.trim() && !submitted) {
                  handleSubmit();
                }
              }}
            />
          </div>
        )}

        {!submitted && (
          <button
            className="submit-button"
            onClick={handleSubmit}
            disabled={!selectedAnswer.trim()}
          >
            Submit Answer
          </button>
        )}

        {submitted && (
          <div className={`answer-feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
            <p className="feedback-title">
              {isCorrect ? '✅ Correct!' : '❌ Not quite'}
            </p>
            {!isCorrect && !hasOptions && (
              <p className="typed-correct-answer">Expected answer: <strong>{question.correctAnswer}</strong></p>
            )}
            {!showExplanation && (
              <button
                className="show-explanation-button"
                onClick={() => setShowExplanation(true)}
              >
                Show Explanation
              </button>
            )}
            {showExplanation && (
              <div className="explanation">
                <p className="explanation-title">Explanation:</p>
                <p className="explanation-text">{question.explanation}</p>
                <button className="next-button" onClick={handleNext}>
                  {questionNumber === totalQuestions ? 'See Results' : 'Next Question'}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
