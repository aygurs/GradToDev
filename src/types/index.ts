// Topic and learning materials
export type Flashcard = {
  id: string;
  front: string;
  back: string;
  example?: string;
};

export type QuestionType = 'multiple-choice' | 'true-false' | 'scenario' | 'type-answer';

export type Question = {
  id: string;
  type?: QuestionType;
  prompt: string;
  options?: string[];
  correctAnswer: string;
  acceptedAnswers?: string[];
  explanation: string;
};

export type Topic = {
  id: string;
  title: string;
  description: string;
  flashcards: Flashcard[];
  questions: Question[];
};

// Quiz progress and results
export type QuizResult = {
  questionId: string;
  prompt: string;
  selectedAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  explanation: string;
};

// Navigation state
export type Page = 'topic-select' | 'mode-select' | 'flashcards' | 'questions' | 'results';
