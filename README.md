# GradToDev

A simple, interactive revision tool for graduate and junior developers who want to build real confidence with JavaScript, TypeScript, APIs, frontend engineering and professional development fundamentals.

Whether you're preparing for interviews, reinforcing concepts after bootcamp, or bridging the gap between junior and mid-level expertise, GradToDev offers two main learning modes - flashcards and quizzes - to suit your learning style.

## 📚 Learning Library

- **19 Topics**
- **591 Flashcards** — Deep explanations with code examples
- **565 Questions** — Multiple formats with instant feedback

## 🎯 Topics Covered

### Core JavaScript & TypeScript
- JavaScript Core Syntax
- JavaScript Array Methods
- JavaScript String Methods
- Objects, Destructuring & Data Shaping
- TypeScript Basics & Narrowing
- TypeScript Generics & Utility Types

### Async & APIs
- Async JavaScript & Fetch
- APIs & HTTP Basics
- API Auth, Errors & Security Basics

### Frontend & UI
- React & UI Engineering Patterns
- Frontend Components, DOM & Events
- HTML Semantics & Good Practices
- CSS Layout, Styling & Animations

### Professional Skills
- Debugging, Testing & Code Quality
- Professional Dev Workflow
- Node.js, Tooling & Runtime Fundamentals
- Web System Design Basics
- DSA & Problem Solving
- Security, Performance & Reliability

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation & Development

```bash
npm install
npm run dev
```

The app will open at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

Output files are in the `dist/` directory, ready to deploy.

## 🛠 Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: CSS with CSS Grid & Flexbox
- **Type Safety**: Full TypeScript coverage for type safety and IDE support

## 📁 Project Structure

```
src/
├── components/        # Reusable UI components
├── pages/            # Full page layouts
├── data/             # Learning content (topics, flashcards, questions)
├── types/            # TypeScript interfaces
├── utils/            # Utility functions
├── App.tsx           # Main app component
└── main.tsx          # Entry point
```

## 💡 How to Use

1. **Select a Topic** — Browse the curated list of 19 topics
2. **Choose Your Mode** — Study flashcards or test with questions
3. **Flashcard Mode** — Flip cards to reveal answers with detailed explanations
4. **Question Mode** — Answer questions and get immediate feedback with explanations
5. **Track Progress** — See your results and revisit weak areas

## 🔧 Extending the Content

To add new topics, flashcards or questions, edit `src/data/topics.ts`. Each topic follows this structure:

```typescript
{
  id: "unique-id",
  title: "Topic Title",
  description: "Brief description...",
  flashcards: [ /* card objects */ ],
  questions: [ /* question objects */ ]
}
```
