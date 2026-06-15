import { Topic } from '../types/index';

interface TopicCardProps {
  topic: Topic;
  index: number;
  onClick: () => void;
}

const topicIcons = ['🧠', '⚡', '🧩', '🔁', '🧪', '🌐', '🔐', '🎛️', '🛠️', '✅', '🏗️', '🚀', '🧭'];

export function TopicCard({ topic, index, onClick }: TopicCardProps) {
  return (
    <button className="topic-card" onClick={onClick} type="button">
      <span className="topic-icon" aria-hidden="true">
        {topicIcons[index % topicIcons.length]}
      </span>
      <div className="topic-card-content">
        <h3>{topic.title}</h3>
        <p>{topic.description}</p>
        <div className="topic-stats">
          <span>{topic.flashcards.length} flashcards</span>
          <span>{topic.questions.length} questions</span>
        </div>
      </div>
      <span className="topic-arrow" aria-hidden="true">→</span>
    </button>
  );
}
