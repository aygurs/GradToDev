import { Topic } from '../types/index';
import { ModeSelector } from '../components/ModeSelector';

interface TopicModePageProps {
  topic: Topic;
  onSelectFlashcards: () => void;
  onSelectQuestions: () => void;
  onBackClick: () => void;
}

export function TopicModePage({
  topic,
  onSelectFlashcards,
  onSelectQuestions,
  onBackClick,
}: TopicModePageProps) {
  return (
    <div className="page topic-mode-page">
      <ModeSelector
        topicTitle={topic.title}
        onFlashcardsClick={onSelectFlashcards}
        onQuestionsClick={onSelectQuestions}
        onBackClick={onBackClick}
      />
    </div>
  );
}
