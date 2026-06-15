import { Question } from './types/index';

export function normaliseAnswer(answer: string): string {
  return answer
    .trim()
    .toLowerCase()
    .replace(/[`(){};,.]/g, '')
    .replace(/\s+/g, ' ');
}

export function isAnswerCorrect(question: Question, selectedAnswer: string): boolean {
  const allowedAnswers = question.acceptedAnswers?.length
    ? question.acceptedAnswers
    : [question.correctAnswer];

  const normalisedSelected = normaliseAnswer(selectedAnswer);

  return allowedAnswers.some((answer) => normaliseAnswer(answer) === normalisedSelected);
}
