import { Topic } from '../types/index';
import { TopicCard } from '../components/TopicCard';

interface TopicSelectPageProps {
  topics: Topic[];
  onSelectTopic: (topic: Topic) => void;
}

export function TopicSelectPage({ topics, onSelectTopic }: TopicSelectPageProps) {
  const totalFlashcards = topics.reduce((total, topic) => total + topic.flashcards.length, 0);
  const totalQuestions = topics.reduce((total, topic) => total + topic.questions.length, 0);

  return (
    <div className="page topic-select-page">
      <div className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Junior developer training</p>
          <h1>GradToDev</h1>
          <p className="subtitle">
            Build real confidence with JavaScript, TypeScript, APIs and engineering fundamentals.
          </p>
        </div>

        <div className="hero-stats" aria-label="Learning library summary">
          <div className="hero-stat">
            <strong>{topics.length}</strong>
            <span>topics</span>
          </div>
          <div className="hero-stat">
            <strong>{totalFlashcards}</strong>
            <span>cards</span>
          </div>
          <div className="hero-stat">
            <strong>{totalQuestions}</strong>
            <span>questions</span>
          </div>
        </div>
      </div>

      <div className="section-heading">
        <div>
          <p className="eyebrow">Choose your path</p>
          <h2>What do you want to practise?</h2>
        </div>
        <p>Pick a topic, review the cards, then test yourself with explanations after every answer.</p>
      </div>

      <div className="topics-grid">
        {topics.map((topic, index) => (
          <TopicCard
            key={topic.id}
            topic={topic}
            index={index}
            onClick={() => onSelectTopic(topic)}
          />
        ))}
      </div>
    </div>
  );
}
