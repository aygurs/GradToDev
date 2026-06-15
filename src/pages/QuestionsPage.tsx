import { useState } from 'react';
import { Topic, QuizResult } from '../types/index';
import { QuestionCard } from '../components/QuestionCard';
import { isAnswerCorrect } from '../utils';
import { ResultsSummary } from '../components/ResultsSummary';

interface QuestionsPageProps {
  topic: Topic;
  onBackClick: () => void;
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

export function QuestionsPage({ topic, onBackClick }: QuestionsPageProps) {
  const [shuffledQuestions, setShuffledQuestions] = useState(() =>
    shuffleArray(topic.questions)
  );

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);
  const [quizComplete, setQuizComplete] = useState(false);

  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === shuffledQuestions.length - 1;

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
      setCurrentQuestionIndex((previousIndex) => previousIndex + 1);
    }
  };

  const handleRetakeQuiz = () => {
    setShuffledQuestions(shuffleArray(topic.questions));
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
          totalQuestions={shuffledQuestions.length}
          onSubmitAnswer={handleSubmitAnswer}
        />
      </div>
    </div>
  );
}