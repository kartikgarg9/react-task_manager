Task Manager - React Application
A clean and functional Task Manager built with React and Tailwind CSS.
This project allows users to:


Add new tasks with priority and description


Mark tasks as complete/incomplete


Filter tasks based on completion status


Track task progress visually


Clear all tasks



🚀 Setup Instructions
1. Clone the Repository
git clone <your-repo-url>
cd task-manager

2. Install Dependencies
npm install

3. Start the Development Server
npm start

The app will be available at http://localhost:3000.


🧩 Tailwind CSS Integration
Tailwind CSS is integrated for utility-first styling.

1. Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

2. Configure tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

3. Include Tailwind in CSS
In src/style.css:

@tailwind base;
@tailwind components;
@tailwind utilities;

Remove old styles below if converting fully to Tailwind.


🧪 Unit Testing
Basic testing is done using React Testing Library and Jest.

1. Install testing libraries
npm install --save-dev @testing-library/react @testing-library/jest-dom

2. Example Test
__tests__/ProgressTracker.test.jsx

import { render, screen } from '@testing-library/react';
import ProgressTracker from '../components/ProgressTracker';

test('shows correct task completion summary', () => {
  render(<ProgressTracker tasks={[{ completed: true }, { completed: false }]} />);
  expect(screen.getByText(/1 out of 2 tasks completed/i)).toBeInTheDocument();
});

Run Tests
npm test


📁 Project Structure
src/
├── components/
│   ├── TaskForm.jsx
│   ├── TaskList.jsx
│   ├── ProgressTracker.jsx
├── App.jsx
├── index.js
├── style.css
├── __tests__/
│   └── ProgressTracker.test.jsx


📌 Design Notes

Fully responsive with Tailwind utility classes


Button hover effects and transitions


Progress bar for visual task tracking


Minimal and readable UI



📃 License
This project is licensed under the MIT License.


🤝 Contributing
Contributions are welcome! Feel free to fork this repo and submit pull requests.