import { useState } from 'react';
import { Topic, QuizResult } from '../types/index';
import { QuestionCard } from '../components/QuestionCard';
import { isAnswerCorrect } from '../utils';
import { ResultsSummary } from '../components/ResultsSummary';

interface QuestionsPageProps {
  topic: Topic;
  onBackClick: () => void;
}

export function QuestionsPage({ topic, onBackClick }: QuestionsPageProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);
  const [quizComplete, setQuizComplete] = useState(false);

  const currentQuestion = topic.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === topic.questions.length - 1;

  const handleSubmitAnswer = (selectedAnswer: string) => {
    const isCorrect = isAnswerCorrect(currentQuestion, selectedAnswer);

    const result: QuizResult = {
      questionId: currentQuestion.id,
      prompt: currentQuestion.prompt,
      selectedAnswer,
      correctAnswer: currentQuestion.correctAnswer,
      isCorrect,
      explanation: currentQuestion.explanation,
    };

    const updatedResults = [...quizResults, result];
    setQuizResults(updatedResults);

    if (isLastQuestion) {
      setQuizComplete(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleRetakeQuiz = () => {
    setCurrentQuestionIndex(0);
    setQuizResults([]);
    setQuizComplete(false);
  };

  const handleBackToTopics = () => {
    onBackClick();
  };

  if (quizComplete) {
    return (
      <div className="page questions-page">
        <ResultsSummary
          results={quizResults}
          topicTitle={topic.title}
          onBackToTopics={handleBackToTopics}
          onRetakeQuiz={handleRetakeQuiz}
        />
      </div>
    );
  }

  return (
    <div className="page questions-page">
      <div className="questions-container">
        <button className="back-button" onClick={onBackClick}>
          ← Back
        </button>
        <QuestionCard
          question={currentQuestion}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={topic.questions.length}
          onSubmitAnswer={handleSubmitAnswer}
        />
      </div>
    </div>
  );
}
