import { useState } from 'react';
import { Topic, Page } from './types/index';
import { topics } from './data/topics';
import { TopicSelectPage } from './pages/TopicSelectPage';
import { TopicModePage } from './pages/TopicModePage';
import { FlashcardsPage } from './pages/FlashcardsPage';
import { QuestionsPage } from './pages/QuestionsPage';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('topic-select');
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  const handleSelectTopic = (topic: Topic) => {
    setSelectedTopic(topic);
    setCurrentPage('mode-select');
  };

  const handleSelectFlashcards = () => {
    setCurrentPage('flashcards');
  };

  const handleSelectQuestions = () => {
    setCurrentPage('questions');
  };

  const handleBackToTopics = () => {
    setSelectedTopic(null);
    setCurrentPage('topic-select');
  };

  const handleBackToMode = () => {
    setCurrentPage('mode-select');
  };

  return (
    <div className="app">
      {currentPage === 'topic-select' && (
        <TopicSelectPage
          topics={topics}
          onSelectTopic={handleSelectTopic}
        />
      )}

      {currentPage === 'mode-select' && selectedTopic && (
        <TopicModePage
          topic={selectedTopic}
          onSelectFlashcards={handleSelectFlashcards}
          onSelectQuestions={handleSelectQuestions}
          onBackClick={handleBackToTopics}
        />
      )}

      {currentPage === 'flashcards' && selectedTopic && (
        <FlashcardsPage
          topic={selectedTopic}
          onBackClick={handleBackToMode}
        />
      )}

      {currentPage === 'questions' && selectedTopic && (
        <QuestionsPage
          topic={selectedTopic}
          onBackClick={handleBackToMode}
        />
      )}
    </div>
  );
}

export default App;
